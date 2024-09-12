import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  default as CalendarIcon,
  default as LeftArrowIcon,
} from 'react-native-vector-icons/AntDesign';
import {API_SERVER} from '../../envVar';
import {useGetSingleTurfQuery, useGetTurfQuery} from '../redux/api/turfAPI';
import {Turf} from '../types/types';

interface User {
  _id: string;
  phoneNumber: number;
  gender: string;
  fullName: string;
  location: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UserInfoType {
  _id: string;
  phoneNumber: number;
  gender: string;
  fullName: string;
  location: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

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

const SlotPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [userData, setUserData] = useState<User | null>(null);
  const [calendarState, setCalendarState] = useState(false);
  const [selectedDate, setSeletedDate] = useState('');
  const [currentDay, setCurrentDay] = useState('all');
  const [turfList, setTurfList] = useState<Turf[]>([]);
  const [turfInfo, setTurfInfo] = useState<Turf | null>(null);
  const [selectedTurf, setSelectedTurf] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string[]>([]);
  const [flattenedSlots, setFlattenedSlots] = useState<FlattenedSlot[]>([]);
  const [courtNumber, setCourtNumber] = useState<number | null>();

  const navigation = useNavigation<any>();

  const {isLoading, isError, isSuccess, data, error, refetch} =
    useGetTurfQuery();

  useEffect(() => {
    const getUser = async () => {
      const jsonValue = await AsyncStorage.getItem('my-data');
      const data: User = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    const userData = async () => {
      const data = await AsyncStorage.getItem('my-data');
      if (data) {
        setUserInfo(JSON.parse(data));
      }
    };
    userData();
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
    }
    if (isError) {
      console.error('Error fetching turf data: ', error);
    }
    if (isSuccess && data) {
      const userTurfs = data.turf.filter(turf => turf.turfId === userInfo?._id);
      setTurfList(userTurfs);
    }
  }, [isLoading, isError, isSuccess, data, error, userInfo]);

  const MULTI_SELECT_OPTIONS = turfList.map(turf => ({
    label: turf.turfName,
    value: turf.turfName,
  }));

  let courts: {id: string; name: string}[] = [];

  for (let i = 1; i <= turfInfo?.courtNumbers!; i++) {
    courts.push({id: String(i), name: String(i)});
  }

  useEffect(() => {
    const singleTurfInfo = turfList.find(c => c.turfName === selectedTurf);
    setTurfInfo(singleTurfInfo!);
  }, [selectedTurf, selectedDate]);

  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(new Date().getDate() + 5);

  const toggleSlotSelection = (slotTime: string) => {
    if (selectedSlot.includes(slotTime)) {
      setSelectedSlot(selectedSlot.filter(time => time !== slotTime));
    } else {
      setSelectedSlot([...selectedSlot, slotTime]);
    }
  };

  const selectedCourt = turfInfo?.slot.find(c => c.courtNumber === courtNumber);

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
  }, [selectedDate, courtNumber, turfInfo]);

  const handleOutsidePress = () => calendarState && setCalendarState(false);

  const {
    isLoading: isSingleTurfLoading,
    isError: isSingleTurfError,
    isSuccess: isSingleTurfSuccess,
    data: isSingleTurfData,
    error: isSingleTurfError2,
    refetch: refetchSingleTurf,
  } = useGetSingleTurfQuery(turfInfo?._id);

  const onPressHandler = async () => {
    // const updatedSlot: UpdatedSlot[] =
    //   isSuccess && isSingleTurfData?.turf.slot
    //     ? isSingleTurfData?.turf.slot.reduce((acc: UpdatedSlot[], court) => {
    //         if (court.courtNumber === courtNumber) {
    //           court.days.forEach(day => {
    //             if (day.date === selectedDate) {
    //               day.slots.forEach(slot => {
    //                 if (selectedSlot.includes(slot.time)) {
    //                   acc.push({
    //                     courtNumber: court.courtNumber,
    //                     date: day.date,
    //                     time: slot.time,
    //                     booked: true,
    //                   });
    //                 }
    //               });
    //             }
    //           });
    //         }
    //         return acc;
    //       }, [])
    //     : [];

    // Optimistic UI update: mark selected slots as booked in state
    const updatedSlot: UpdatedSlot[] = flattenedSlots
      .filter(slot => selectedSlot.includes(slot.time))
      .map(slot => ({
        courtNumber: courtNumber!,
        date: slot.date,
        time: slot.time,
        booked: true,
      }));

    // Optimistically mark slots as booked in state to update UI immediately
    const newFlattenedSlots = flattenedSlots.map(slot => {
      if (selectedSlot.includes(slot.time)) {
        return {...slot, booked: true};
      }
      return slot;
    });
    setFlattenedSlots(newFlattenedSlots);

    // Create the body for the update request
    const updateRequest = {
      turfId: isSuccess && turfInfo?._id,
      body: {
        slot: updatedSlot,
        updatedAt: new Date(),
      },
    };

    // Update the turf slots
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

    // Clearing selected slots and disable the button
    setSelectedSlot([]);
  };

  const isDisabled = selectedSlot.length === 0;

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={{flex: 1}}>
        {/* header */}
        <View className="flex-row justify-between mt-4 mx-4">
          <View className="flex-row gap-2 items-center">
            <TouchableHighlight
              onPress={() => {
                if (userData?.role === 'user') {
                  navigation.navigate('Home');
                } else if (userData?.role === 'turfPoster') {
                  navigation.navigate('TurfHome');
                }
              }}
              underlayColor={'#EFEFEF'}>
              <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
            </TouchableHighlight>
            <Text className="text-black text-[18px] font-semibold">Slots</Text>
          </View>
        </View>

        {/* turf info and calendar */}
        <View className="flex-col mt-5 mb-5 px-4 justify-between gap-2">
          {/* turf info */}
          <View className="">
            <Text className="text-white text-base">Turf</Text>
            <View className="">
              <DropDownPicker
                multiple={false}
                open={open}
                value={selectedTurf}
                items={MULTI_SELECT_OPTIONS}
                setOpen={setOpen}
                setValue={setSelectedTurf}
                setItems={() => {}}
                placeholder="Select Turf"
                dropDownContainerStyle={{
                  backgroundColor: 'white',
                }}
                style={{backgroundColor: '#E5E4E2'}}
                placeholderStyle={{
                  color: 'black',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              />
            </View>
          </View>

          {/* calendar */}
          <TouchableHighlight
            onPress={() => setCalendarState(true)}
            underlayColor={'transparent'}>
            <View
              className="flex-row justify-between items-center border-[1px] border-slate-400 px-4 py-[9.5px] rounded-xl bg-[#e0e0e0]"
              style={{
                backgroundColor: '#e0e0e0',
              }}>
              <Text
                className=" mr-1 font-semibold"
                style={{
                  color: 'black',
                }}>
                {selectedDate === '' ? 'Select Date' : selectedDate}
              </Text>
              <CalendarIcon name="calendar" size={20} color={'#000000'} />
            </View>
          </TouchableHighlight>
        </View>

        {/* turf image */}
        <View className="max-w-fit mx-auto mt-[10px] drop-shadow-md">
          {turfInfo && turfInfo.image ? (
            <Image
              source={{
                uri: `${API_SERVER}/${turfInfo.image}`,
              }}
              style={{
                width: 364,
                height: 172.86,
                borderRadius: 12,
              }}
            />
          ) : (
            <View
              style={{
                width: 364,
                height: 172.86,
                borderRadius: 12,
              }}
              className="items-center justify-center bg-slate-200">
              <Text className="text-semibold text-base">
                No Image Available
              </Text>
            </View>
          )}
        </View>

        {/* courtNumber section */}
        <View className="items-center">
          <FlatList
            data={courts}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setCourtNumber(Number(item.name));
                }}>
                <View className="mt-4 mx-4 px-2 py-2 bg-slate-200 rounded-md">
                  <Text>Court {item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* slot section */}
        <View className="pb-2 mx-2">
          <Text className="text-black text-base font-semibold">
            {/* Price - {isSuccess && data.turf.price} hourly */}
          </Text>
          <View className="pt-2 flex-row flex-wrap gap-3 mx-auto">
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
          className=" mt-3 rounded-xl mx-4"
          style={{
            backgroundColor: isDisabled ? '#A9A9A9' : '#1D1CA3',
          }}
          onPress={onPressHandler}>
          <Text className="text-lg text-center text-white py-2">
            Fill Slot{selectedSlot.length > 1 ? 's' : ''}
          </Text>
        </TouchableHighlight>

        {/* calendar */}
        {calendarState && (
          <View className="w-80 absolute top-40 left-10">
            <Calendar
              minDate={new Date().toISOString().split('T')[0]}
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
    </TouchableWithoutFeedback>
  );
};

export default SlotPage;
