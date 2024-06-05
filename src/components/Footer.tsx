import {View, Text, Image} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View className="bg-[#1D1CA3] rounded-t-2xl h-[78.86px] flex-row justify-around items-center px-3">
      <View className="gap-1 items-center">
        <Image
          source={require('../assests/icons/footerHome.png')}
          style={{width: 22, height: 22.01}}
        />
        <Text className="text-white font-semibold text-xs">Home</Text>
      </View>
      <View className="gap-1 items-center">
        <Image
          source={require('../assests/icons/favoriteIcon.png')}
          style={{width: 22, height: 22.01}}
        />
        <Text className="text-white font-semibold text-xs">Favorite</Text>
      </View>
      <View className="gap-1 items-center">
        <Image
          source={require('../assests/icons/notificationIcon.png')}
          style={{width: 22, height: 22.01}}
        />
        <Text className="text-white font-semibold text-xs">Notification</Text>
      </View>
      <View className="gap-1 items-center">
        <Image
          source={require('../assests/icons/settingIcon.png')}
          style={{width: 22, height: 22.01}}
        />
        <Text className="text-white font-semibold text-xs">Setting</Text>
      </View>
      <View className="gap-1 items-center">
        <Image
          source={require('../assests/icons/profileIcon.png')}
          style={{width: 22, height: 22.01}}
        />
        <Text className="text-white font-semibold text-xs">Profile</Text>
      </View>
    </View>
  );
};

export default Footer;
