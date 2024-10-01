import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableHighlight, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import Toast from 'react-native-toast-message';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_SERVER} from '../../envVar';
import {useAppSelector} from '../redux/hooks';

const OTP = () => {
  const [otp, setOtp] = useState<string>('');
  const [sentOtp, setSentOtp] = useState<string | null>(null);
  console.log(sentOtp, "jjjj")
  const navigation = useNavigation<any>();
  const userData = useAppSelector(state => state.user);

  useEffect(() => {
    const sendOtp = async () => {
      const response = await fetch(`${API_SERVER}/api/v1/otp/request-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: userData.user.phoneNumber,
        }),
      });

      const data = await response.json();
      if (data.message === 'OTP sent successfully') {
        setSentOtp(data.otp); // Store sent OTP (or manage in a better way)
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to send OTP',
        });
      }
    };

    sendOtp();
  }, [userData.user.phoneNumber]);

  const textChangeHandler = (e: string) => {
    setOtp(e);
  };

  // const nextPageHandler = async () => {
  //   if (otp === correctOTP) {
  //     const response = await fetch(`${API_SERVER}/api/v1/user/create`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         phoneNumber: userData.user.phoneNumber,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       if (data.message.includes('Welcome back')) {
  //         await AsyncStorage.setItem('my-data', JSON.stringify(data.user));
  //         navigation.reset({
  //           index: 0,
  //           routes: [{name: 'Tab'}], // Navigate to the main app screen (e.g., Tab navigator)
  //         });
  //       }
  //     } else {
  //       navigation.navigate('ProfileScreen');
  //     }
  //   } else {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Wrong OTP',
  //       text2: 'Enter Correct OTP',
  //     });
  //   }
  // };

  const nextPageHandler = async () => {
    if (!sentOtp) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'OTP not sent yet',
      });
      return;
    }

    const response = await fetch(`${API_SERVER}/api/v1/otp/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: userData.user.phoneNumber,
        otp: otp,
      }),
    });

    const data = await response.json();

    if (data.message === 'OTP verified successfully') {
      // Proceed to create user or navigate accordingly
      const createUserResponse = await fetch(`${API_SERVER}/api/v1/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: userData.user.phoneNumber,
        }),
      });

      const createUserData = await createUserResponse.json();

      if (createUserData.success) {
        await AsyncStorage.setItem('my-data', JSON.stringify(createUserData.user));
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tab' }],
        });
      } else {
        navigation.navigate('ProfileScreen');
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Wrong OTP',
        text2: 'Enter Correct OTP',
      });
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
            {/* heading text */}
            <View>
              <View className="items-center">
                <Text className="text-white text-base pb-[1px] pl-[2px]">
                  Verify your
                </Text>

                <Text className="text-white text-lg pb-2 pl-[2px]">
                  Phone Number
                </Text>
              </View>

              {/* otp input field */}
              <View className="flex-row items-center mx-14 mt-[12px]">
                <OtpInput
                  numberOfDigits={4}
                  onTextChange={textChangeHandler}
                  theme={{
                    pinCodeContainerStyle: {
                      backgroundColor: 'white',
                      height: 50,
                      width: 50,
                    },
                  }}
                />
              </View>
            </View>

            {/* button */}
            <View className="bg-white h-[21%] rounded-lg ">
              <TouchableHighlight
                underlayColor="#e9e9e9"
                className="w-full h-full rounded-lg items-center justify-center"
                onPress={nextPageHandler}>
                <Text className="text-xl text-black font-medium">Next</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OTP;
