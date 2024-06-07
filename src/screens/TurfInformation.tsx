import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, Text, TouchableHighlight, View } from 'react-native';
import { default as CheckIcon, default as FavouriteIcon, default as LeftArrowIcon, default as ShareIcon } from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Octicons';

const TurfInformation = () => {
  const navigation = useNavigation<any>();

  return (
    <View className="mx-4 mt-4">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            underlayColor={'#EFEFEF'}
            onPress={() => navigation.navigate('Home')}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">B3 Turf</Text>
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

      {/* Services section */}
      <View className="border-[2.5px] mt-3 px-3 py-2 border-slate-300 rounded-xl">
        <Text className="text-base font-semibold text-black mb-2">
          Services
        </Text>
        <View className="gap-8 flex-row">
          <View className="flex-col justify-between">
            <View className="flex-row gap-[6px] items-center mb-1">
              <CheckIcon name="checkcircle" size={15} color="#09AB10" />
              <Text className="text-black text-base">Parking</Text>
            </View>
            <View className="flex-row gap-[6px] items-center">
              <CheckIcon name="checkcircle" size={15} color="#09AB10" />
              <Text className="text-black text-base">Washroom</Text>
            </View>
          </View>
          <View className="flex-col justify-between">
            <View className="flex-row gap-[6px] items-center">
              <CheckIcon name="checkcircle" size={15} color="#09AB10" />
              <Text className="text-black text-base">Cafeteria</Text>
            </View>
            <View className="flex-row gap-[6px] items-center">
              <CheckIcon name="checkcircle" size={15} color="#09AB10" />
              <Text className="text-black text-base">
                Locker & Dressing room
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* court section */}
      <View className="border-[2.5px] mt-3 px-3 py-2 border-slate-300 rounded-xl">
        <Text className="text-base font-semibold text-black mb-2">Court</Text>

        <View className="flex-row flex-wrap">
          {/* remember to remove h-[128px] */}
          <TouchableHighlight
            onPress={() => Alert.alert('You clicked on one of the court')}
            className='rounded-full m-1'
            underlayColor={"#DCDCDC"}>
            <View className="border-[1.5px] border-slate-500 rounded-full w-[106px] h-[36px] items-center justify-center">
              <Text className="text-black text-md">Court 1</Text>
            </View>
          </TouchableHighlight>

          {/* remove to delete below TouchableHighlight */}
          <TouchableHighlight
            onPress={() => Alert.alert('You clicked on one of the court')}
            className='rounded-full m-1'
            underlayColor={"#DCDCDC"}>
            <View className="border-[1.5px] border-slate-500 rounded-full w-[106px] h-[36px] items-center justify-center">
              <Text className="text-black text-md">Court 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('You clicked on one of the court')}
            className='rounded-full m-1'
            underlayColor={"#DCDCDC"}>
            <View className="border-[1.5px] border-slate-500 rounded-full w-[106px] h-[36px] items-center justify-center">
              <Text className="text-black text-md">Court 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('You clicked on one of the court')}
            className='rounded-full m-1'
            underlayColor={"#DCDCDC"}>
            <View className="border-[1.5px] border-slate-500 rounded-full w-[106px] h-[36px] items-center justify-center">
              <Text className="text-black text-md">Court 1</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      {/* location section */}
      <View className="border-[2.5px] mt-3 px-3 py-2 border-slate-300 rounded-xl flex-row justify-between">
        <View className="w-[70%]">
          <Text className="text-base font-semibold text-black mb-2">
            Location
          </Text>

          <View>
            <View className="flex-row gap-1 items-start">
              <LocationIcon name="location" size={20} color="black" />
              <Text className="text-black text-sm">
                Yeshwant Plaza, Terrace Station Road, behind TI Next Mall,
                Indore,
              </Text>
            </View>
          </View>
        </View>
        <View className="pt-1">
          <Image
            source={require('../assests/images/mapImageSmall.png')}
            style={{width: 76, height: 76}}
            className="border rounded-xl"
          />
        </View>
      </View>

      {/* button section */}
      <TouchableHighlight
        underlayColor="#4141eb"
        className="bg-[#1D1CA3] mt-3 rounded-xl"
        onPress={() => navigation.navigate('BookCourt')}>
        <Text className="text-lg text-center text-white py-3">Next</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TurfInformation;
