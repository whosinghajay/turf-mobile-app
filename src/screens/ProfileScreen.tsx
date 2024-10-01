import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';
import RadioButtons from '../components/RadioButtons';
import { useCreateUserMutation } from '../redux/api/userAPI';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { userLogin } from '../redux/reducer/userReducer';
import { User, userInfoType } from '../types/types';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    fullName: '',
    location: '',
    gender: '',
    role: '',
  });
  
  const navigation = useNavigation<any>();

  const dispatch = useAppDispatch();

  const [createUser] = useCreateUserMutation();

  const userData = useAppSelector(state => state.user);


  const onNameChangeHandler = (e: string) => {
    setUserInfo({...userInfo, fullName: e});
  };

  const onLocationChangeHandler = (e: string) => {
    setUserInfo({...userInfo, location: e});
  };

  const onGenderChangeHandler = (e: string) => {
    setUserInfo({...userInfo, gender: e});
  };

  const onRoleChangeHandler = (e: string) => {
    setUserInfo({...userInfo, role: e});
  };

  const onPressNextButton = async () => {
    if (
      !userInfo.fullName ||
      !userInfo.location ||
      !userInfo.gender ||
      !userInfo.role
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all fields.',
      });
      return;
    }

    const user: User = {
      phoneNumber: userData.user.phoneNumber,
      gender: userInfo.gender!,
      fullName: userInfo.fullName!,
      location: userInfo.location!,
      role: userInfo.role!,
    };
    try {
      dispatch(userLogin(user));
      const newUser = await createUser(user);
      await AsyncStorage.setItem('my-data', JSON.stringify(newUser.data?.user));
      navigation.reset({
        index: 0,
        routes: [{name: 'Tab'}],
      });
      Toast.show({
        type: 'success',
        text1: `Welcome! ${user.fullName}`,
        text2: 'Account Created Successfully',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: String(error),
        text2: 'Error in creating account',
      });
    }
  };

  return (
    <ImageBackground
      source={require('../assests/images/Otp/OtpScreenBackground.png')}
      resizeMode="cover">
      <View className="h-full">
        {/* back button */}
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.goBack()}
          className="w-[18px] ml-[20px] mt-[26px]">
          <LeftArrowIcon name="arrowleft" size={20} color="white" />
        </TouchableHighlight>

        {/* main body */}
        <View className="max-h-full my-auto mx-4">
          <View className="gap-5 mt-[140px]">
            {/* name section */}
            <View>
              <Text className="text-white text-lg pb-1 pl-[2px]">
                Enter Your Full Name
              </Text>
              <TextInput
                placeholder="Enter Your Full Name"
                className="h-[60px] border-[1px] pl-6 rounded-xl text-white border-white"
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                onChangeText={onNameChangeHandler}
              />
            </View>
            {/* location section */}
            <View>
              <Text className="text-white text-lg pb-1 pl-[2px]">
                Enter Your Location
              </Text>
              <TextInput
                placeholder="Enter Your Location"
                className="h-[60px] border-[1px] pl-6 rounded-xl text-white border-white"
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                onChangeText={onLocationChangeHandler}
              />
            </View>
            {/* gender section */}
            <View className="">
              <Text className="text-white text-lg ml-[10px] pb-1">Gender</Text>
              <RadioButtons
                optionOne="male"
                optionTwo="female"
                onSelectionChange={onGenderChangeHandler}
              />
            </View>
            {/* role section */}
            <View className="">
              <Text className="text-white text-lg ml-[10px] pb-1">Role</Text>
              <RadioButtons
                optionOne="user"
                optionTwo="turfPoster"
                onSelectionChange={onRoleChangeHandler}
              />
            </View>
            {/* next button */}
            <View className="bg-white h-[11%] rounded-lg">
              <TouchableHighlight
                underlayColor="#e9e9e9"
                className="w-full h-full rounded-lg items-center justify-center"
                onPress={onPressNextButton}>
                <Text className="text-xl text-black font-medium">Next</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
