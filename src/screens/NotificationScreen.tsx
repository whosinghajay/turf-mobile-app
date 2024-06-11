import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const NotificationScreen = () => {
  return (
    <View className="mt-4 mx-3">
      <Text className="text-black font-bold text-2xl">Notification</Text>
      <ScrollView className="mt-3">
        <View className='flex-row justify-between items-center border-b-2 border-slate-300 pt-2 pb-2'>
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={{width: 70, height: 70}}
                className="rounded-full"
              />
            </View>
            <View>
              <Text className='text-base text-black '>Turf Name</Text>
              <Text className='text-base text-black '>13:09</Text>
            </View>
          </View>
          <View>
            <Text className='text-black text-base font-semibold'>Booking Confirm</Text>
          </View>
        </View>

        {/* remember to delete */}
        <View className='flex-row justify-between items-center border-b-2 border-slate-300 pt-2 pb-2'>
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={{width: 70, height: 70}}
                className="rounded-full"
              />
            </View>
            <View>
              <Text className='text-base text-black '>Turf Name</Text>
              <Text className='text-base text-black '>13:09</Text>
            </View>
          </View>
          <View>
            <Text className='text-black text-base font-semibold'>Booking Confirm</Text>
          </View>
        </View>
        <View className='flex-row justify-between items-center border-b-2 border-slate-300 pt-2 pb-2'>
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={{width: 70, height: 70}}
                className="rounded-full"
              />
            </View>
            <View>
              <Text className='text-base text-black '>Turf Name</Text>
              <Text className='text-base text-black '>13:09</Text>
            </View>
          </View>
          <View>
            <Text className='text-black text-base font-semibold'>Booking Confirm</Text>
          </View>
        </View>
        <View className='flex-row justify-between items-center border-b-2 border-slate-300 pt-2 pb-2'>
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={{width: 70, height: 70}}
                className="rounded-full"
              />
            </View>
            <View>
              <Text className='text-base text-black '>Turf Name</Text>
              <Text className='text-base text-black '>13:09</Text>
            </View>
          </View>
          <View>
            <Text className='text-black text-base font-semibold'>Booking Confirm</Text>
          </View>
        </View>
        <View className='flex-row justify-between items-center border-b-2 border-slate-300 pt-2 pb-2'>
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={{width: 70, height: 70}}
                className="rounded-full"
              />
            </View>
            <View>
              <Text className='text-base text-black '>Turf Name</Text>
              <Text className='text-base text-black '>13:09</Text>
            </View>
          </View>
          <View>
            <Text className='text-black text-base font-semibold'>Booking Confirm</Text>
          </View>
        </View>
        <View className='flex-row justify-between items-center border-b-2 border-slate-300 pt-2 pb-2'>
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={{width: 70, height: 70}}
                className="rounded-full"
              />
            </View>
            <View>
              <Text className='text-base text-black '>Turf Name</Text>
              <Text className='text-base text-black '>13:09</Text>
            </View>
          </View>
          <View>
            <Text className='text-black text-base font-semibold'>Booking Confirm</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
