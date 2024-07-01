import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';
import RadioButtons from '../components/RadioButtons';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

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
              />
            </View>
            {/* gender section */}
            <View className="">
              <Text className="text-white text-lg ml-[10px] pb-1">Gender</Text>
              <RadioButtons optionOne='male' optionTwo='female' />
            </View>
            {/* role section */}
            <View className="">
              <Text className="text-white text-lg ml-[10px] pb-1">Role</Text>
              <RadioButtons optionOne='user' optionTwo='turfPoster' />
            </View>
            {/* next button */}
            <View className="bg-white h-[11%] rounded-lg">
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
