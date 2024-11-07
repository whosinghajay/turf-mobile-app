import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import {
  default as CalendarIcon,
  default as FavouriteIcon,
  default as LeftArrowIcon,
  default as ShareIcon,
} from 'react-native-vector-icons/AntDesign';
import { API_SERVER } from '../../envVar';
import { useCreateBookingMutation } from '../redux/api/bookingAPI';
import { useGetSingleTurfQuery } from '../redux/api/turfAPI';
import { useAppSelector } from '../redux/hooks';
type FlattenedSlot = {
  date: string;
  time: string;
  booked: boolean;
};

interface UpdatedSlot {
  courtNumber: number;
  date: string;
  time: string;
  booked: boolean;
}

const BookCourtPage = () => {
  const [calendarState, setCalendarState] = useState(false);
  const [selectedDate, setSeletedDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  const [flattenedSlots, setFlattenedSlots] = useState<FlattenedSlot[]>([]);

  const [currentDay, setCurrentDay] = useState('today');
  const [selectedSlot, setSelectedSlot] = useState<string[]>([]);

  const [user, setUser] = useState({
    id: '',
    name: '',
    phoneNumber: '',
  });

  const [createBooking] = useCreateBookingMutation();
  const turfData = useAppSelector(state => state.turf);

  const {
    isLoading,
    isError,
    isSuccess,
    data,
    error,
    refetch: refetchSingleTurf,
  } = useGetSingleTurfQuery(turfData.turf._id);

  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('my-data');
      if (data !== null) {
        const parsedData = JSON.parse(data);
        return parsedData;
      } else {
        console.log('No data found');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };

  const logUserData = async () => {
    const data = await getUserData();
    if (data) {
      const {_id, fullName, phoneNumber} = data;
      console.log(_id, fullName, phoneNumber, 'userData is here');
      setUser({
        id: _id,
        name: fullName,
        phoneNumber: phoneNumber,
      });
    }
  };

  useEffect(() => {
    logUserData();
  }, []);

  const navigation = useNavigation<any>();
  const route = useRoute();
  const {court} = route.params as {court: string};

  const courtNumber = Number(court.split(' ')[1]);

  const selectedCourt =
    isSuccess &&
    data?.turf.slot.find(court => court.courtNumber === courtNumber);

  const today = new Date().toISOString().split('T')[0];

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  useEffect(() => {
    if (selectedCourt) {
      const newFlattenedSlots: FlattenedSlot[] = selectedCourt.days.reduce<
        FlattenedSlot[]
      >((acc, day) => {
        if (day.date === selectedDate) {
          day.slots.forEach(slot => {
            acc.push({
              date: day.date,
              time: slot.time,
              booked: slot.booked,
            });
          });
        }
        return acc;
      }, []);
      setFlattenedSlots(newFlattenedSlots);
      setSelectedSlot([]);
    }
  }, [selectedDate, selectedCourt]);

  const selectDateHandler = () => {
    setCalendarState(true);
  };

  const todaySelectDateHandler = () => {
    setSeletedDate(today);
    setCurrentDay('today');
  };

  const tomorrowSelectDateHandler = () => {
    setSeletedDate(tomorrow);
    setCurrentDay('tomorrow');
  };

  const toggleSlotSelection = (slotTime: string) => {
    if (selectedSlot.includes(slotTime)) {
      setSelectedSlot(selectedSlot.filter(time => time !== slotTime));
    } else {
      setSelectedSlot([...selectedSlot, slotTime]);
    }
  };

  const isDisabled = selectedSlot.length === 0;

  const bookingData = {
    userId: user.id,
    status: 'booked',
    turfInfo: {
      turfName: isSuccess ? data.turf.turfName : '',
      turfPhoto: isSuccess ? data.turf.image : '',
      turfPrice: isSuccess ? data.turf.price : 0,
      turfLocation: isSuccess ? data.turf.turfLocation : '',
      turfId: isSuccess ? data.turf._id : '',
      slot: selectedSlot.map(slot => ({
        courtNumber,
        date: selectedDate,
        time: slot,
        booked: true,
      })),
    },
    total: isSuccess ? data.turf.price * selectedSlot.length : 0,
  };

  const onPressHandler = async () => {
    const newBooking = await createBooking(bookingData);
    console.log(newBooking, 'New Booking');

    const updatedSlot: UpdatedSlot[] = isSuccess
      ? data.turf.slot.reduce((acc: UpdatedSlot[], court) => {
          if (court.courtNumber === courtNumber) {
            court.days.forEach(day => {
              if (day.date === selectedDate) {
                day.slots.forEach(slot => {
                  if (selectedSlot.includes(slot.time)) {
                    acc.push({
                      courtNumber: court.courtNumber,
                      date: day.date,
                      time: slot.time,
                      booked: true,
                    });
                  }
                });
              }
            });
          }
          return acc;
        }, [])
      : [];

    // The body for the update request
    const updateRequest = {
      turfId: isSuccess && data.turf._id,
      body: {
        slot: updatedSlot,
        updatedAt: new Date(),
      },
    };
    console.log(updateRequest, 'hhhhhh');

    // Updating the turf slots
    fetch(`${API_SERVER}/api/v1/turf/${updateRequest.turfId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateRequest.body),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Turf updated successfully:', data);
      })
      .catch(error => {
        console.error('Error updating turf:', error);
      });

    navigation.navigate('BookCourtReciept', {
      court,
      date: selectedDate,
      time: selectedSlot.join(', '),
    });
  };

  useFocusEffect(
    useCallback(() => {
      refetchSingleTurf();
    }, []),
  );

  // const handlePaymentAppSelect = async () => {
  //   const recipientUPI = 'bharatpe.90068407581@fbpe';
  //   const yourName = isSuccess && data?.turf.turfName;
  //   const transactionId = Date.now().toString();
  //   // const amount = isSuccess && data.turf.price * selectedSlot.length;
  //   const amount = 2;
  //   const currency = 'INR';

  //   // Custom deep link callback URL to capture payment result
  //   const callbackUrl = 'creasecrown://paymentresult'; // Replace with your custom deep link scheme

  //   // UPI payment URL
  //   const upiLink = `upi://pay?pa=${recipientUPI}&pn=${encodeURIComponent(
  //     yourName,
  //   )}&mc=0000&tid=${transactionId}&tt=Test%20Transaction&am=${amount}&cu=${currency}&url=${encodeURIComponent(
  //     callbackUrl,
  //   )}`;

  //   try {
  //     await Linking.openURL(upiLink);
  //     // Wait for the payment process (You may need to handle the callback to check for success)
  //   } catch (error) {
  //     Alert.alert('Unable to find any UPI in your phone');
  //   }
  // };

  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(new Date().getDate() + 5);
  console.log(sevenDaysLater);

  return (
    <View className="mx-4 mt-4">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            underlayColor={'#EFEFEF'}
            onPress={() => navigation.goBack()}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">
            Book Court
          </Text>
        </View>
        <View className="flex-row gap-3 items-center">
          <TouchableHighlight>
            <ShareIcon name="sharealt" size={23} color="black" />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => navigation.navigate('Favourite')}>
            <FavouriteIcon name="hearto" size={23} color="black" />
          </TouchableHighlight>
        </View>
      </View>

      {/* turf image */}
      <View className="max-w-fit mx-auto mt-[20px] drop-shadow-md">
        <Image
          source={{uri: `${API_SERVER}/${isSuccess && data.turf.image}`}}
          style={{
            width: 364,
            height: 172.86,
            borderRadius: 12,
          }}
        />
      </View>

      {/* date and calender section */}
      <View className="flex-row pt-4 gap-2 max-w-fit mx-auto">
        <TouchableHighlight
          underlayColor="#36D759"
          onPress={todaySelectDateHandler}
          className="border-[1px] border-slate-400 px-4 py-1 rounded-xl"
          style={{
            backgroundColor: currentDay === 'today' ? '#49B114' : '#e0e0e0',
          }}>
          <View>
            <Text
              className="text-white text-base font-semibold"
              style={{
                color: currentDay === 'today' ? 'white' : 'black',
              }}>
              Today
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#D0D0D0"
          onPress={tomorrowSelectDateHandler}
          className="border-[1px] border-slate-400 px-4 py-1 rounded-xl"
          style={{
            backgroundColor: currentDay === 'tomorrow' ? '#49B114' : '#e0e0e0',
          }}>
          <View>
            <Text
              className="text-black text-base font-semibold"
              style={{
                color: currentDay === 'tomorrow' ? 'white' : 'black',
              }}>
              Tomorrow
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#D0D0D0"
          onPress={selectDateHandler}
          className="flex-row items-center border-[1px] border-slate-400 px-3 py-1 rounded-xl"
          style={{
            backgroundColor:
              currentDay === 'selectedDay' ? '#49B114' : '#e0e0e0',
          }}>
          <View className="flex-row items-center">
            <Text
              className="text-black mr-1 font-semibold"
              style={{
                color: currentDay === 'selectedDay' ? 'white' : 'black',
              }}>
              Select Date
            </Text>
            <CalendarIcon name="calendar" size={20} color="#000000" />
          </View>
        </TouchableHighlight>
      </View>

      {/* price per hour wala section */}
      <View className="pt-4 pb-2 mx-2">
        <Text className="text-black text-base font-semibold">
          Price - {isSuccess && data.turf.price} hourly
        </Text>
        <View className="pt-3 flex-row flex-wrap gap-3 mx-auto">
          {flattenedSlots?.map((slot, index) => (
            <TouchableHighlight
              key={index}
              underlayColor={'transparent'}
              onPress={() => toggleSlotSelection(slot.time)}
              className="border-2 border-slate-300 rounded-xl"
              disabled={slot.booked === true}>
              <View
                className="px-2 py-3 rounded-xl"
                style={{
                  backgroundColor: slot.booked
                    ? 'grey'
                    : selectedSlot.includes(slot.time)
                    ? '#49B114'
                    : '#e0e0e0',
                }}>
                <Text
                  className="text-xs font-semibold"
                  style={{
                    color: slot.booked
                      ? 'white'
                      : selectedSlot.includes(slot.time)
                      ? '#fff'
                      : '#000',
                  }}>
                  {slot.time}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>

      {/* button section */}
      <TouchableHighlight
        disabled={isDisabled}
        underlayColor="#4141eb"
        className=" mt-3 rounded-xl"
        style={{
          backgroundColor: isDisabled ? '#A9A9A9' : '#1D1CA3',
        }}
        // onPress={handlePaymentAppSelect}>
        onPress={onPressHandler}>
        <Text className="text-lg text-center text-white py-3">
          Proceed to Pay ₹{isSuccess && data.turf.price * selectedSlot.length}
        </Text>
      </TouchableHighlight>

      {/* calendar */}
      {calendarState && (
        <View className="w-80 absolute top-40 left-10">
          <Calendar
            minDate={today}
            maxDate={sevenDaysLater}
            onDayPress={(day: any) => {
              setCurrentDay('selectedDay');
              setSeletedDate(day.dateString);
              setCalendarState(false);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default BookCourtPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // Add shadow effect for Android
    shadowColor: '#000', // Add shadow effect for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paymentButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  paymentButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  paymentButtonText: {
    fontSize: 16,
    textAlign: 'left',
  },
  cancelButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF4D4D',
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
