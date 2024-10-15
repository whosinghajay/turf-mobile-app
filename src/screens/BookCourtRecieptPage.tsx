import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {
  default as FavouriteIcon,
  default as LeftArrowIcon,
  default as ShareIcon,
} from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Octicons';
import {API_SERVER} from '../../envVar';
import {useAppSelector} from '../redux/hooks';

const BookCourtRecieptPage = () => {
  const navigation = useNavigation<any>();

  const [userData, setUserData] = useState({
    id: '',
    name: '',
    phoneNumber: '',
  });

  const route = useRoute();
  const {court, time, date} = route.params as {
    court: string;
    time: string;
    date: string;
  };

  const slotLength = time.split(',');

  const turfData = useAppSelector(state => state.turf);

  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('my-data');
      if (data !== null) {
        const parsedData = JSON.parse(data);
        return parsedData;
      } else {
        console.error('No data found');
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
      setUserData({
        id: _id,
        name: fullName,
        phoneNumber: phoneNumber,
      });
    }
  };

  useEffect(() => {
    logUserData();
  }, []);

  return (
    <View className="mx-4 mt-4">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            underlayColor={'#EFEFEF'}
            onPress={() => navigation.navigate('BookCourt', {court})}>
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
          source={{uri: `${API_SERVER}/${turfData.turf.image}`}}
          style={{
            width: 364,
            height: 172.86,
            borderRadius: 12,
          }}
        />
      </View>

      {/* turf name and booking timing section */}
      <View className="pt-3 pl-1">
        <Text className="text-lg text-black font-semibold">
          {turfData.turf.turfName}
        </Text>
        <Text className="text-base text-black font-semibold">
          {date}, {time}
        </Text>
        <Image
          source={require('../assests/images/breakLine.png')}
          style={{width: 334, height: 4.41, marginTop: 8}}
        />
      </View>

      {/* Booking Summary Section */}
      <View className="pt-3 pl-1">
        <Text className="text-black" style={{fontSize: 14, fontWeight: 600}}>
          Booking Summary
        </Text>
        <View className="pt-2 flex-row">
          {/* first side */}
          <View className="gap-2 w-[50%]">
            <Text className="text-sm font-[500] text-black">Name</Text>
            <Text className="text-sm font-[500] text-black">Contact no.</Text>
            <Text className="text-sm font-[500] text-black">Price</Text>
            <Text className="text-sm font-[500] text-black">Discount</Text>
          </View>
          {/* second side */}
          <View className="gap-2">
            <Text className="text-sm font-[500] text-black">
              {userData.name}
            </Text>
            <Text className="text-sm font-[500] text-black">
              {userData.phoneNumber}
            </Text>
            <Text className="text-sm font-[500] text-black">
              {turfData.turf.price * slotLength.length}
            </Text>
            <Text className="text-sm font-[500] text-black">10%</Text>
          </View>
        </View>
        <Image
          source={require('../assests/images/breakLine.png')}
          style={{width: 334, height: 4.41, marginTop: 8}}
        />
      </View>

      {/* location section */}
      <View className="border-[2.5px] mt-3 px-3 py-2 border-slate-300 rounded-xl flex-row justify-between">
        <View className="w-[70%]">
          <Text className="text-base font-semibold text-black mb-2">
            Location
          </Text>
          <View>
            <View className="flex-row gap-1 items-start">
              <LocationIcon name="location" size={20} color="black" />
              <Text className="text-black text-sm">
                {turfData.turf.turfLocation}
              </Text>
            </View>
          </View>
        </View>
        <View className="pt-1">
          <Image
            source={require('../assests/images/mapImageSmall.png')}
            style={{width: 76, height: 76}}
            className="border rounded-xl"
          />
        </View>
      </View>
    </View>
  );
};

export default BookCourtRecieptPage;
