import {View, Text, StatusBar, Image, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {SplashScreenData} from '../assests/data/SplashScreenData';
import {useNavigation} from '@react-navigation/native';

const data = SplashScreenData;
const dataLength = data.length;

const SplashScreen = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<any>();

  const skipToProfile = () => navigation.navigate('Profile');

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
              <Text className="text-lg text-white">
                {data[index].buttonTwoText}
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
