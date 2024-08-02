import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  default as CalendarIcon,
  default as LeftArrowIcon,
} from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Octicons';
import {
  useCancelBookingMutation,
  useGetBookingQuery,
} from '../redux/api/bookingAPI';
import {Booking, Turf} from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetTurfQuery} from '../redux/api/turfAPI';
import {API_SERVER} from '../../envVar';

interface Slot {
  courtNumber: number;
  date: string;
  time: string;
  booked: boolean;
}

const FavouriteScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();

  const {
    isLoading,
    isError,
    isSuccess,
    data,
    error,
    refetch: refetchBookings,
  } = useGetBookingQuery();
  const {
    isLoading: turfIsLoading,
    isError: turfIsError,
    isSuccess: turfIsSuccess,
    data: turfData,
    error: turfError,
    refetch: refetchTurfs,
  } = useGetTurfQuery();

  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    phoneNumber: '',
  });

  const [
    deleteBooking,
    {isLoading: isDeleting, isError: deleteError, isSuccess: deleteSuccess},
  ] = useCancelBookingMutation();

  const [bookingInfo, setBookingInfo] = useState<Booking>();
  const [turfInfo, setTurfInfo] = useState<Turf[]>();

  useEffect(() => {
    if (turfIsLoading) {
      console.log('Loading....');
    }
    if (turfData && turfIsSuccess) {
      setTurfInfo(turfData.turf);
    }
    if (turfError) {
      console.log('Error getting Turf Info', turfError);
    }
  }, [turfIsLoading, turfIsError, turfIsSuccess, turfData, turfError]);

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
  // Usage in an async function
  const logUserData = async () => {
    const data = await getUserData();
    if (data) {
      const {_id, fullName, phoneNumber} = data;
      console.log(_id, fullName, phoneNumber, 'userData is here');
      setUser({
        id: _id,
        name: fullName,
        phoneNumber: phoneNumber, // Ensure this matches the state property name
      });
    }
  };

  useEffect(() => {
    logUserData();
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
    }
    if (isError) {
      console.error('Error fetching data: ', error);
    }
    if (isSuccess && data) {
      console.log('Data fetched successfully: ', data);
      const filteredBookings = data.bookings.filter(
        booking => booking.userId === user.id,
      );

      setBookingData(filteredBookings);
    }
  }, [isLoading, isError, isSuccess, data, error, user.id]);

  useFocusEffect(
    useCallback(() => {
      refetchBookings();
    }, []),
  );

  const renderItem = ({item}: {item: Booking}) => {
    const time = item.turfInfo.slot.map(a => a.time);
    const date = item.turfInfo.slot.map(a => a.date);

    let timeString = '';
    for (let i = 0; i < time.length; i++) {
      if (i === time.length - 1) {
        timeString += String(time[i]);
      } else {
        timeString += String(time[i] + ' | ');
      }
    }

    return (
      <View className="mt-5 pt-2 border-2 border-slate-300 rounded-xl">
        <View className="flex-row justify-between mx-4 items-center">
          <Text className="font-semibold text-base text-black">
            {/* Booking ID: RJ023NP */}
            Your Booking
          </Text>
          <Text className="text-xs">
            {/* Tue, 23 May-2024 */}
            {date[0]}
          </Text>
        </View>

        <View className="flex-row mx-4 mt-4">
          <Text className="w-[40%] text-black text-lg font-semibold">
            {item.turfInfo.turfName}
          </Text>
          <View className="flex-row w-[60%]">
            <View className="mt-[1.5px]">
              <LocationIcon name="location" size={20} color="black" />
            </View>
            <Text className="text-xs ml-2">{item.turfInfo.turfLocation}</Text>
          </View>
        </View>

        <View className="flex-row mx-4 mt-1">
          <View className="w-[47%]">
            <Text className="text-black text-base pb-1">Contact</Text>
            <Text className="text-black text-base pb-1">Time</Text>
            <Text className="text-black text-base pb-1">
              {time.length} {time.length > 1 ? 'Slots' : 'Slot'}
            </Text>
          </View>
          <View>
            <Text className="text-black text-base pb-1">
              {user.phoneNumber}
            </Text>
            <Text className="text-black text-base pb-1">
              {/* 02:00PM-04:00PM  */}
              {timeString}
            </Text>
            <Text className="text-black text-base pb-1">Rs {item.total}</Text>
          </View>
        </View>

        <View className="flex-row mx-4 justify-between mt-2 mb-4">
          <TouchableHighlight className="border-[1.8px] px-4 py-2 rounded-xl border-slate-400">
            <Text className="text-black font-semibold text-lg">
              Change Time
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'white'}
            className="border-[1.8px] px-4 py-2 rounded-xl border-slate-400"
            onPress={() => {
              setModalVisible(true);
              setBookingInfo(item);
            }}>
            <Text className="text-black font-semibold text-lg">
              Cancel Booking
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const cancelBookingHandler = async () => {
    const slots: Slot[] = [];

    const n = bookingInfo?.turfInfo.slot.map(c => c.time).length!;
    const date = bookingInfo?.turfInfo.slot.map(c => c.date)[0]!;
    const courtNumber = bookingInfo?.turfInfo.slot.map(c => c.courtNumber)[0]!;

    for (let i = 0; i < n; i++) {
      slots.push({
        courtNumber: courtNumber,
        date: date,
        booked: false,
        time: bookingInfo?.turfInfo.slot.map(c => c.time)[i]!,
      });
    }

    const updateRequest = {
      slot: slots,
    };

    fetch(`${API_SERVER}/api/v1/turf/${bookingInfo?.turfInfo.turfId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateRequest),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Turf updated successfully:', data);
      })
      .catch(error => {
        console.error('Error updating turf:', error);
      });

    await deleteBooking(bookingInfo?._id!);

    setModalVisible(false);
    refetchBookings();
    refetchTurfs();
  };

  return (
    <View className="h-full px-4 pt-4">
      {/* <ScrollView className="mx-4 mt-4"> */}
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            underlayColor={'#EFEFEF'}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">Bookings</Text>
        </View>
      </View>

      {/* date and calender section */}
      {/* <View className="flex-row w-full mt-5">
        <View className="border-[1px] border-slate-400 px-6 py-2 rounded-xl bg-[#49B114] mr-6">
          <Text className="text-white text-base font-semibold">All</Text>
        </View>
        <View className="border-[1px] border-slate-400 px-6 py-2 rounded-xl bg-[#e0e0e0] mr-6">
          <Text className="text-black text-base font-semibold">Today</Text>
        </View>
        <View className="flex-row items-center border-[1px] border-slate-400 px-4 py-2 rounded-xl bg-[#e0e0e0]">
          <Text className="text-black mr-1 font-semibold">31st May 2024</Text>
          <CalendarIcon name="calendar" size={20} color="#000000" />
        </View>
      </View> */}

      {/* <ScrollView> */}
      {/* Booking id  */}
      <FlatList data={bookingData} renderItem={renderItem} />

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="w-[90%] mx-auto my-auto items-center border-[3px] bg-white border-[#49B114] rounded-2xl py-6 px-6">
          <Text
            className="w-[80%] font-semibold text-black text-center"
            style={{fontSize: 16}}>
            Are you sure you want to cancel the booking?
          </Text>
          <View className="w-[100%] flex-row justify-between mt-6">
            <TouchableHighlight
              className="border-2 border-[#49B114] w-[45%] py-[6px] rounded-full items-center"
              onPress={cancelBookingHandler}
              underlayColor={'transparent'}>
              <Text className="text-black text-lg font-semibold">Confirm</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setModalVisible(false)}
              className="border-2 border-[#49B114] w-[45%] py-[6px] rounded-full items-center"
              underlayColor={'transparent'}>
              <Text className="text-black text-lg font-semibold">Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {/* </ScrollView> */}
      {/* dim background */}
      {modalVisible && (
        <View
          className="absolute top-0 bottom-0 right-0 left-0 z-[1]"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}></View>
      )}
    </View>
  );
};

export default FavouriteScreen;
