import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, Text, TouchableHighlight, View} from 'react-native';
import {
  default as CalendarIcon,
  default as FavouriteIcon,
  default as LeftArrowIcon,
  default as ShareIcon,
} from 'react-native-vector-icons/AntDesign';

const BookCourtPage = () => {
  const navigation = useNavigation<any>();

  return (
    <View className="mx-4 mt-4">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            underlayColor={'#EFEFEF'}
            onPress={() => navigation.navigate('TurfInformation')}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">
            Book Court
          </Text>
        </View>
        <View className="flex-row gap-3 items-center">
          <TouchableHighlight>
            <ShareIcon name="sharealt" size={23} color="black" />
          </TouchableHighlight>
          <TouchableHighlight>
            <FavouriteIcon name="hearto" size={23} color="black" />
          </TouchableHighlight>
        </View>
      </View>

      {/* turf image */}
      <View className="max-w-fit mx-auto mt-[20px] drop-shadow-md">
        <Image
          source={require('../assests/backgroundImage/bgImage.png')}
          style={{
            width: 364,
            height: 172.86,
            borderRadius: 12,
          }}
        />
      </View>

      {/* date and calender section */}
      <View className="flex-row pt-4 gap-2 max-w-fit mx-auto">
        <View className="border-[1px] border-slate-400 px-4 py-1 rounded-xl bg-[#49B114]">
          <Text className="text-white text-base font-semibold">Today</Text>
        </View>
        <View className="border-[1px] border-slate-400 px-4 py-1 rounded-xl bg-[#e0e0e0]">
          <Text className="text-black text-base font-semibold">Tomorrow</Text>
        </View>
        <View className="flex-row items-center border-[1px] border-slate-400 px-3 py-1 rounded-xl bg-[#e0e0e0]">
          <Text className="text-black mr-1 font-semibold">31st May 2024</Text>
          <CalendarIcon name="calendar" size={20} color="#000000" />
        </View>
      </View>

      {/* price per hour wala section */}
      <View className="pt-4 pb-2 mx-2">
        <Text className="text-black text-base font-semibold">
          Price - 1000 hourly
        </Text>
        <View className="pt-3 flex-row flex-wrap gap-3 mx-auto">
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl">
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:11 AM</Text>
            </View>
          </TouchableHighlight>

          {/* remember to delete neche wale */}
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('hello boss')}
            className="border-2 border-slate-300 rounded-xl"
            //   underlayColor={"#979797"}
          >
            <View className="px-2 py-3">
              <Text className="text-xs font-semibold">01:00 AM</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      {/* button section */}
      <TouchableHighlight
        underlayColor="#4141eb"
        className="bg-[#1D1CA3] mt-3 rounded-xl"
        onPress={() => navigation.navigate('BookCourtReciept')}>
        <Text className="text-lg text-center text-white py-3">
          Proceed to Pay ₹1000
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default BookCourtPage;
