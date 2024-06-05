import {View, Text, Image, TextInput, StatusBar} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <>
     <StatusBar
        backgroundColor="#1D1CA3"
      />
    <View className="bg-[#1D1CA3] pt-7 pb-4 pl-5">
      <View className="flex-row items-center gap-2 mb-4">
        <Image
          source={require('../assests/icons/locationIcon.png')}
          style={{width: 19, height: 19}}
        />
        <Text className="text-white text-xs">Vijay Nagar Indore</Text>
      </View>
      <View className="flex-row items-center gap-5">
        <TextInput
          placeholder="Search"
          className="border-[1.5px] rounded-lg border-white text-white pl-5"
          style={{width: 296, height: 45}}
          placeholderTextColor="white"
        />
        <Image
          source={require('../assests/icons/filterIcon.png')}
          style={{width: 20, height: 18}}
        />
      </View>
    </View>
    </>
  );
};

export default Header;
