import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, TouchableHighlight, View } from 'react-native';
import { default as LeftArrowIcon } from 'react-native-vector-icons/AntDesign';
import { default as ToggleIcon } from 'react-native-vector-icons/FontAwesome6';
import { default as LogoutIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as RightArrowIcon } from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation<any>();

  const toggleLocationOnOff = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {/* header */}
      <View className="flex-row justify-between mt-4 mx-4">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            underlayColor={'#EFEFEF'}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">Settings</Text>
        </View>
      </View>

      {/* setting options */}
      <View className="mt-4 mx-4">
        {/* language */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Language</Text>
            <RightArrowIcon name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableHighlight>

        {/* location */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Location</Text>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={toggleLocationOnOff}>
              <ToggleIcon
                name={toggle ? "toggle-on" : "toggle-off"}
                size={26}
                color="#0064D2"
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>

        {/* privacy policy */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Privacy Policy</Text>
            <RightArrowIcon name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableHighlight>

        {/* terms and condition */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Terms and Condition</Text>
            <RightArrowIcon name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableHighlight>

        {/* rate app */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Rate App</Text>
            <Text className="text-black text-base">v4.87.2</Text>
          </View>
        </TouchableHighlight>

        {/* delete account */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Delete Account</Text>
            <RightArrowIcon name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableHighlight>

        {/* logout */}
        <TouchableHighlight
          onPress={() => Alert.alert('clicked')}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Logout</Text>
            <LogoutIcon name="logout" size={20} color="black" />
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default SettingScreen;
