import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';
import DownArrowIcon from 'react-native-vector-icons/MaterialIcons';
import { useAppDispatch } from '../redux/hooks';
import { userLogin } from '../redux/reducer/userReducer';
import { User } from '../types/types';

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );
  
  const navigation = useNavigation<any>();

  const dispatch = useAppDispatch();

  const onChangeHandler = (e: string) => {
    // Clearing the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Setting a new timeout to log the value after 1000ms (1 second)
    const newTimeoutId = setTimeout(() => {
      setPhoneNumber(Number(e));
    }, 300);

    // Saving the timeout ID to state
    setTimeoutId(newTimeoutId);
  };

  const onPressHandler = () => {
    if (!phoneNumber) {
      Toast.show({
        type: 'error',
        text1: 'Empty Field',
        text2: 'Enter your phone number',
      });
    }
    if (phoneNumber) {
      const user: User = {
        phoneNumber,
        gender: '',
        fullName: '',
        location: '',
        role: '',
      };
      dispatch(userLogin(user));
      navigation.navigate('OTP');
    }
  };

  return (
    <ImageBackground
      source={require('../assests/images/Otp/OtpScreenBackground.png')}
      resizeMode="cover">
      <View className="h-full">
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.goBack()}
          className="w-[18px] ml-[20px] mt-[26px]">
          <LeftArrowIcon name="arrowleft" size={20} color="white" />
        </TouchableHighlight>

        <View className="max-h-full my-auto mx-4">
          <View className="gap-5 mt-[40px]">
            <View>
              <Text className="text-white text-2xl pb-[10px] pl-[2px]">
                Sign In
              </Text>

              <Text className="text-white text-base pb-2 pl-[2px]">
                Phone Number
              </Text>

              {/* input field */}
              <View className="flex-row items-center border-[1px] border-white rounded-xl">
                <TouchableHighlight
                  underlayColor="transparent"
                  className="ml-[2px] mr-[2px]">
                  <View className="flex-row border-r-[1px] border-white pl-4">
                    <Image
                      source={require('../assests/images/indiaFlag.png')}
                      style={{width: 25.32, height: 17.7}}
                    />
                    <DownArrowIcon
                      name="keyboard-arrow-down"
                      size={20}
                      color="white"
                    />
                  </View>
                </TouchableHighlight>
                <TextInput
                  placeholder="Phone Number"
                  className="h-[60px] pl-6 rounded-xl text-white "
                  placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                  keyboardType="numeric"
                  onChangeText={onChangeHandler}
                  maxLength={10}
                />
              </View>
            </View>

            {/* button */}
            <View className="bg-white h-[21%] rounded-lg ">
              <TouchableHighlight
                underlayColor="#e9e9e9"
                className="w-full h-full rounded-lg items-center justify-center"
                onPress={onPressHandler}>
                <Text className="text-xl text-black font-medium">Send OTP</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PhoneNumber;
