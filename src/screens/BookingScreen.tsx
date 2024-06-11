import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  default as CalendarIcon,
  default as LeftArrowIcon,
} from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Octicons';

const FavouriteScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <ScrollView className="mx-4 mt-4">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            underlayColor={'#EFEFEF'}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">Bookings</Text>
        </View>
      </View>

      {/* date and calender section */}
      <View className="flex-row w-full mt-5">
        <View className="border-[1px] border-slate-400 px-6 py-2 rounded-xl bg-[#49B114] mr-6">
          <Text className="text-white text-base font-semibold">All</Text>
        </View>
        <View className="border-[1px] border-slate-400 px-6 py-2 rounded-xl bg-[#e0e0e0] mr-6">
          <Text className="text-black text-base font-semibold">Today</Text>
        </View>
        <View className="flex-row items-center border-[1px] border-slate-400 px-4 py-2 rounded-xl bg-[#e0e0e0]">
          <Text className="text-black mr-1 font-semibold">31st May 2024</Text>
          <CalendarIcon name="calendar" size={20} color="#000000" />
        </View>
      </View>

      {/* Booking id  */}
      <View className="mt-5 border-2 border-slate-300 rounded-xl">
        <View className="flex-row justify-between mx-4 items-center">
          <Text className="font-semibold text-base text-black">
            Booking ID: RJ023NP
          </Text>
          <Text className="text-xs">Tue, 23 May-2024</Text>
        </View>

        <View className="flex-row mx-4 mt-4">
          <Text className="w-[40%] text-black text-lg font-semibold">
            B3 Turf
          </Text>
          <View className="flex-row w-[60%]">
            <View className="mt-[1.5px]">
              <LocationIcon name="location" size={20} color="black" />
            </View>
            <Text className="text-xs ml-2">
              Yeshwant Plaza, Terrace Station Road, behind TI Next Mall, Indore
            </Text>
          </View>
        </View>

        <View className="flex-row mx-4 mt-1">
          <View className="w-[47%]">
            <Text className="text-black text-base pb-1">Contact</Text>
            <Text className="text-black text-base pb-1">Time</Text>
            <Text className="text-black text-base pb-1">3 Slots</Text>
          </View>
          <View>
            <Text className="text-black text-base pb-1">9898989898</Text>
            <Text className="text-black text-base pb-1">02:00PM-04:00PM</Text>
            <Text className="text-black text-base pb-1">Rs 2400.00</Text>
          </View>
        </View>

        <View className="flex-row mx-4 justify-between mt-2 mb-4">
          <TouchableHighlight className="border-[1.8px] px-4 py-2 rounded-xl border-slate-400">
            <Text className="text-black font-semibold text-lg">
              Change Time
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'white'}
            className="border-[1.8px] px-4 py-2 rounded-xl border-slate-400"
            onPress={() => setModalVisible(true)}>
            <Text className="text-black font-semibold text-lg">
              Cancel Booking
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="w-[90%] mx-auto my-auto items-center border-[3px] bg-white border-[#1D1CA3] rounded-2xl py-6 px-6">
          <Text
            className="w-[80%] font-semibold text-black text-center"
            style={{fontSize: 16}}>
            Are you sure you want to cancel the booking?
          </Text>
          <View className="w-[100%] flex-row justify-between mt-6">
            <TouchableHighlight className="border-2 border-[#1D1CA3] w-[45%] py-[6px] rounded-full items-center">
              <Text className="text-black text-lg font-semibold">Confirm</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={() => setModalVisible(false)}
              className="border-2 border-[#1D1CA3] w-[45%] py-[6px] rounded-full items-center">
              <Text className="text-black text-lg font-semibold">Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* remember delete this */}
      <View className="mt-5 border-2 border-slate-300 rounded-xl">
        <View className="flex-row justify-between mx-4 items-center">
          <Text className="font-semibold text-base text-black">
            Booking ID: RJ023NP
          </Text>
          <Text className="text-xs">Tue, 23 May-2024</Text>
        </View>

        <View className="flex-row mx-4 mt-4">
          <Text className="w-[40%] text-black text-lg font-semibold">
            B3 Turf
          </Text>
          <View className="flex-row w-[60%]">
            <View className="mt-[1.5px]">
              <LocationIcon name="location" size={20} color="black" />
            </View>
            <Text className="text-xs ml-2">
              Yeshwant Plaza, Terrace Station Road, behind TI Next Mall, Indore
            </Text>
          </View>
        </View>

        <View className="flex-row mx-4 mt-1">
          <View className="w-[47%]">
            <Text className="text-black text-base pb-1">Contact</Text>
            <Text className="text-black text-base pb-1">Time</Text>
            <Text className="text-black text-base pb-1">3 Slots</Text>
          </View>
          <View>
            <Text className="text-black text-base pb-1">9898989898</Text>
            <Text className="text-black text-base pb-1">02:00PM-04:00PM</Text>
            <Text className="text-black text-base pb-1">Rs 2400.00</Text>
          </View>
        </View>

        <View className="flex-row mx-4 justify-between mt-2 mb-4">
          <TouchableHighlight className="border-[1.8px] px-4 py-2 rounded-xl border-slate-400">
            <Text className="text-black font-semibold text-lg">
              Change Time
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'white'}
            className="border-[1.8px] px-4 py-2 rounded-xl border-slate-400"
            onPress={() => Alert.alert('are you sure to delete this booking')}>
            <Text className="text-black font-semibold text-lg">
              Cancel Booking
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default FavouriteScreen;
