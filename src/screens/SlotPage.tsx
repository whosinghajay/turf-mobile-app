import {View, Text, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {default as LeftArrowIcon} from 'react-native-vector-icons/AntDesign';
import {Calendar} from 'react-native-calendars';
import {default as CalendarIcon} from 'react-native-vector-icons/AntDesign';
import {default as ArrowDownIcon} from 'react-native-vector-icons/MaterialIcons';
import {API_SERVER} from '../../envVar';
import {Image} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {useGetTurfQuery} from '../redux/api/turfAPI';
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

const SlotPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [userData, setUserData] = useState<User | null>(null);
  const [calendarState, setCalendarState] = useState(false);
  const [selectedDate, setSeletedDate] = useState('alldates');
  const [currentDay, setCurrentDay] = useState('all');
  const [turfList, setTurfList] = useState<Turf[]>([]);

  const userDataa = useAppSelector(state => state.turf);

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

  return (
    <>
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
      <View className="flex-row mt-5 mb-5 px-4 justify-between">
        {/* turf info */}
        <TouchableHighlight>
          <View className="flex-row items-center justify-between rounded-xl border-[1px] border-slate-400 px-4 py-[1.8px]">
            {/* turf location and name */}
            <View>
              <Text>Turf Name</Text>
              <Text className="truncate">Turf Location</Text>
            </View>
            {/* arrow icon */}
            <View>
              <ArrowDownIcon
                name="keyboard-arrow-down"
                size={26}
                color={currentDay === 'selectedDay' ? '#fffff' : '#000000'}
              />
            </View>
          </View>
        </TouchableHighlight>

        {/* calendar icon */}
        <TouchableHighlight
          onPress={() => setCalendarState(true)}
          underlayColor={'transparent'}>
          <View
            className="flex-row items-center border-[1px] border-slate-400 px-4 py-[9.5px] rounded-xl bg-[#e0e0e0]"
            style={{
              backgroundColor:
                currentDay === 'selectedDay' ? '#49B114' : '#e0e0e0',
            }}>
            <Text
              className=" mr-1 font-semibold"
              style={{
                color: currentDay === 'selectedDay' ? 'white' : 'black',
              }}>
              Select Date
            </Text>
            <CalendarIcon
              name="calendar"
              size={20}
              color={currentDay === 'selectedDay' ? '#fffff' : '#000000'}
            />
          </View>
        </TouchableHighlight>
      </View>

      {/* turf image */}
      <View className="max-w-fit mx-auto mt-[20px] drop-shadow-md">
        <Image
          source={{uri: `${API_SERVER}/${turfList[0].image}`}}
          style={{
            width: 364,
            height: 172.86,
            borderRadius: 12,
          }}
        />
      </View>

      {/* calendar */}
      {calendarState && (
        <View className="w-80 absolute top-40 left-10">
          <Calendar
            onDayPress={(day: any) => {
              setCurrentDay('selectedDay');
              setSeletedDate(day.dateString);
              setCalendarState(false);
            }}
          />
        </View>
      )}
    </>
  );
};

export default SlotPage;
