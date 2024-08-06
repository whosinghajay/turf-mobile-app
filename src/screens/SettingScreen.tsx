import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Modal, Text, TouchableHighlight, View} from 'react-native';
import {default as LeftArrowIcon} from 'react-native-vector-icons/AntDesign';
import {default as ToggleIcon} from 'react-native-vector-icons/FontAwesome6';
import {default as LogoutIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as RightArrowIcon} from 'react-native-vector-icons/MaterialIcons';
import {useDeleteUserMutation} from '../redux/api/userAPI';

interface User {
  _id: string;
  phoneNumber: number;
  gender: string;
  fullName: string;
  location: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const SettingScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  const navigation = useNavigation<any>();
  const [deleteUser, {isLoading, error}] = useDeleteUserMutation();

  useEffect(() => {
    const getUser = async () => {
      const jsonValue = await AsyncStorage.getItem('my-data');
      const data: User = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(data);
    };
    getUser();
  }, []);

  const toggleLocationOnOff = () => {
    setToggle(!toggle);
  };

  const logoutHandler = async () => {
    await AsyncStorage.removeItem('my-data');
    setModalVisible(false);
    navigation.navigate('Splash Screen');
  };

  // const deleteHandler = async () => {
  //   await AsyncStorage.removeItem('my-data');
  //   try {
  //     if (userData?._id) {
  //       const response = await deleteUser(userData?._id).unwrap();
  //       console.log('Delete response:', response);

  //       setModalDeleteVisible(false);
  //       navigation.navigate('Splash Screen');
  //     } else {
  //       console.error('User ID is missing');
  //     }
  //   } catch (error) {
  //     console.error('Failed to delete user:', error);
  //     Alert.alert('Error', 'Failed to delete user. Please try again.');
  //   }
  // };

  const deleteHandler = () => {};
  
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
                name={toggle ? 'toggle-on' : 'toggle-off'}
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
          onPress={() => setModalDeleteVisible(true)}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Delete Account</Text>
            <RightArrowIcon name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableHighlight>

        {/* logout */}
        <TouchableHighlight
          onPress={() => setModalVisible(true)}
          underlayColor={'#EFEFEF'}>
          <View className="flex-row items-center justify-between border-b-2 pb-2 my-2 border-slate-200">
            <Text className="text-black text-base">Logout</Text>
            <LogoutIcon name="logout" size={20} color="black" />
          </View>
        </TouchableHighlight>

        {/* modal for logout */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View className="w-[90%] mx-auto my-auto items-center bg-white rounded-2xl py-6 px-6">
            <Text
              className="w-[80%] font-semibold text-black text-center"
              style={{fontSize: 16}}>
              Are you sure you want to logout?
            </Text>
            <View className="w-[100%] flex-row justify-between mt-6">
              <TouchableHighlight
                underlayColor={'white'}
                onPress={logoutHandler}
                className="bg-red-600 w-[45%] py-[6px] rounded-full items-center">
                <Text className="text-white text-lg font-semibold">Logout</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'white'}
                onPress={() => setModalVisible(false)}
                className="border-slate-400 border-2 w-[45%] py-[6px] rounded-full items-center">
                <Text className="text-black text-lg font-semibold">Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* modal for delete */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalDeleteVisible}
          onRequestClose={() => setModalDeleteVisible(false)}>
          <View className="w-[90%] mx-auto my-auto items-center bg-white rounded-2xl py-6 px-6">
            <Text
              className="w-[80%] font-semibold text-black text-center"
              style={{fontSize: 16}}>
              Are you sure you want to delete your account?
            </Text>
            <View className="w-[100%] flex-row justify-between mt-6">
              <TouchableHighlight
                underlayColor={'white'}
                onPress={deleteHandler}
                className="bg-[#ff1414] w-[45%] py-[6px] rounded-full items-center">
                <Text className="text-white text-lg font-semibold">Delete</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'white'}
                onPress={() => setModalDeleteVisible(false)}
                className="border-2 border-slate-400 w-[45%] py-[6px] rounded-full items-center">
                <Text className="text-black text-lg font-semibold">Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default SettingScreen;
