import {View, Text, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {default as LeftArrowIcon} from 'react-native-vector-icons/AntDesign';

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

const SlotPage = () => {
  const [userData, setUserData] = useState<User | null>(null);

  const navigation = useNavigation<any>();

  useEffect(() => {
    const getUser = async () => {
      const jsonValue = await AsyncStorage.getItem('my-data');
      const data: User = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(data);
    };
    getUser();
  }, []);

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
    </>
  );
};

export default SlotPage;
