import {
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const Screen1 = () => {
  return (
    <>
      <StatusBar backgroundColor="#1D1CA3" />
      <View className="bg-[#1D1CA3] h-full px-4 justify-around">
        <View className="max-w-fit mx-auto">
          <Image
            source={require('../../assests/images/Splash/SplashScreenImg1.png')}
            style={{width: 343.07, height: 418}}
            className="rounded-3xl"
          />
        </View>
        <View className="gap-6">
          <View className="">
            <Text className="text-5xl font-semibold text-white">
              Explore {'\n'}The Beautiful {'\n'}World!
            </Text>
          </View>
          <View className="flex-row justify-between px-1">
            <TouchableHighlight className="bg-white px-[67px] items-center justify-center h-12 rounded-xl">
              <Text className="text-lg text-black">Skip</Text>
            </TouchableHighlight>
            <TouchableHighlight className="bg-[#0064D2] px-[67px] items-center justify-center h-12 rounded-lg">
              <Text className="text-lg text-white">Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </>
  );
};

export default Screen1;
