import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableHighlight, View } from 'react-native';
import RightArrowIcon from 'react-native-vector-icons/Ionicons';
import { SplashScreenData } from '../assests/data/SplashScreenData';

const data = SplashScreenData;
const dataLength = data.length;

const SplashScreen = () => {
  const [index, setIndex] = useState(0);
  
  const navigation = useNavigation<any>();

  const skipToProfile = () => navigation.navigate('PhoneNumber');

  const nextIndex = () => {
    if (index === dataLength - 1) {
      skipToProfile(); // Calling skipToProfile function
      return;
    }
    return setIndex(prev => prev + 1);
  };

  return (
    <>
      <StatusBar backgroundColor="#1D1CA3" />
      <View className="bg-[#1D1CA3] h-full px-4 justify-around">
        <View className="max-w-fit mx-auto">
          <Image
            source={data[index].image}
            style={{width: 343.07, height: 418}}
            className="rounded-3xl"
          />
          <View className="flex-row gap-2 max-w-fit mx-auto relative top-6">
            <View className="h-[7px] w-7 rounded-full bg-white" />
            <View className="h-[7px] w-7 rounded-full bg-white" />
            <View className="h-[7px] w-7 rounded-full bg-white" />
          </View>
        </View>
        <View className="gap-6">
          <View className="gap-1">
            <Text className="text-5xl font-semibold text-white">
              {data[index].text1}
            </Text>
            <Text className="text-5xl font-semibold text-white">
              {data[index].text2}
            </Text>
            <Text className="text-5xl font-semibold text-white">
              {data[index].text3}
            </Text>
          </View>
          <View className="flex-row justify-between px-1">
            <TouchableHighlight
              underlayColor="#e9e9e9"
              onPress={skipToProfile}
              className="bg-[#fff] w-[48%] items-center justify-center h-12 rounded-xl">
              <Text className="text-lg text-black">
                {data[index].buttonOneText}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#0074D2"
              onPress={nextIndex}
              className="bg-[#0064D2] w-[48%] items-center justify-center h-12 rounded-lg">
              <View className="flex-row items-center gap-1">
                <Text className="text-lg text-white">
                  {data[index].buttonTwoText}
                </Text>
                <RightArrowIcon
                  name="arrow-forward-circle-sharp"
                  size={20}
                  color="white"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
