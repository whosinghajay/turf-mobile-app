import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';

const OTP = () => {
  const navigation = useNavigation<any>();

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
                  onTextChange={text => console.log(text)}
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
                onPress={() => navigation.navigate('ProfileScreen')}>
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
