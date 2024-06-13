import {
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableHighlight,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import CrossIcon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocationIcon2 from 'react-native-vector-icons/FontAwesome6';
import FavouriteIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <>
      <StatusBar backgroundColor="#1D1CA3" />
      <View className="bg-[#1D1CA3] pt-7 pb-4 pl-5">
        <View className="flex-row justify-between">
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => setModalVisible(true)}>
            <View className="flex-row items-center gap-2 mb-4">
              <Octicons name="location" size={20} color="white" />
              <Text className="text-white" style={{fontSize: 14}}>
                Vijay Nagar Indore
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => navigation.navigate('Favourite')}>
            <View className="mr-8">
              <FavouriteIcon name="hearto" size={21} color="white" />
            </View>
          </TouchableHighlight>
        </View>

        <View className="flex-row items-center justify-between">
          <TextInput
            placeholder="Search"
            className="border-[1.5px] rounded-lg border-white text-white pl-5"
            style={{width: 296, height: 45}}
            placeholderTextColor="white"
          />
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => Alert.alert('filter button')}
            className='mr-7'>
            <AntDesign name="filter" size={30} color="white" />
          </TouchableHighlight>
        </View>
      </View>

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="w-full absolute bottom-0 bg-white rounded-t-2xl py-6 px-6">
          <View className="flex-row-reverse">
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => setModalVisible(false)}>
              <CrossIcon name="circle-with-cross" size={30} color="black" />
            </TouchableHighlight>
          </View>

          <Text className="text-black text-lg font-bold">
            Set Your Location
          </Text>

          <TextInput
            placeholder="Enter your location"
            className="mt-1 w-full border-[1.5px] rounded-lg border-black text-black pl-5"
            style={{height: 52}}
            placeholderTextColor="black"
          />

          <Text className="text-center mt-4 text-black font-semibold text-base">
            Or
          </Text>

          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => Alert.alert('location button')}>
            <View className="mt-4 w-full bg-[#1D1CA3] border rounded-xl">
              <View className="flex-row gap-2 py-3 items-center max-w-fit mx-auto">
                <LocationIcon2
                  name="location-crosshairs"
                  size={18}
                  color="white"
                />
                <Text className="text-white text-base">
                  Use Current Location
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <Text className="text-black font-semibold mt-4">Recent</Text>

          <View className="flex-row mt-2">
            <Octicons name="location" size={20} color="black" />
            <View className="ml-2">
              <Text className="text-black font-bold" style={{fontSize: 14}}>
                Vijay Nagar
              </Text>
              <Text className="text-black text-base" style={{fontSize: 14}}>
                Vijay Nagar, Indore Madhya Pradesh, Indore
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Header;
