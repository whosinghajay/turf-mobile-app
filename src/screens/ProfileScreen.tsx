import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
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
              <Text className="text-white text-lg pb-1 pl-[2px]">
                Enter Your Full Name
              </Text>
              <TextInput
                placeholder="Enter Your Full Name"
                className="h-[60px] border-[1px] pl-6 rounded-xl text-white border-white"
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              />
            </View>
            <View>
              <Text className="text-white text-lg pb-1 pl-[2px]">
                Enter Your Location
              </Text>
              <TextInput
                placeholder="Enter Your Location"
                className="h-[60px] border-[1px] pl-6 rounded-xl text-white border-white"
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              />
            </View>
            <View className="bg-white h-[17%] rounded-lg ">
              <TouchableHighlight
                underlayColor="#e9e9e9"
                className="w-full h-full rounded-lg items-center justify-center"
                onPress={() => navigation.navigate('Tab')}>
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
