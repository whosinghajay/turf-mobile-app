import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {
  default as CheckIcon,
  default as FavouriteIcon,
  default as LeftArrowIcon,
  default as ShareIcon,
} from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/Octicons';
import {API_SERVER} from '../../envVar';
import {useAppSelector} from '../redux/hooks';

const TurfInformation = () => {
  const [selectedCourt, setSelectedCourt] = useState(null);

  const navigation = useNavigation<any>();
  const userData = useAppSelector(state => state.turf);
  const newServiceArray = userData.turf.services;

  const isDisabled = !selectedCourt;

  const courts: string[] = [];

  for (let i = 0; i < userData.turf.courtNumbers; i++) {
    courts.push(`Court ${i + 1}`);
  }

  const handleCourtClick = (court: any) => {
    setSelectedCourt(court);
  };

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
          <Text className="text-black text-[18px] font-semibold">
            {userData.turf.turfName}
          </Text>
        </View>
        <View className="flex-row gap-3 items-center">
          <TouchableHighlight>
            <ShareIcon name="sharealt" size={23} color="black" />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => navigation.navigate('Favourite')}>
            <FavouriteIcon name="hearto" size={23} color="black" />
          </TouchableHighlight>
        </View>
      </View>

      {/* turf image */}
      <View className="max-w-fit mx-auto mt-[20px] drop-shadow-md">
        <Image
          source={{uri: `${API_SERVER}/${userData.turf.image}`}}
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
              <CheckIcon
                name="checkcircle"
                size={15}
                color={
                  newServiceArray.includes('Parking') ? '#09AB10' : '#FF0000'
                }
              />
              <Text className="text-black text-base">Parking</Text>
            </View>
            <View className="flex-row gap-[6px] items-center">
              <CheckIcon
                name="checkcircle"
                size={15}
                color={
                  newServiceArray.includes('Washroom') ? '#09AB10' : '#FF0000'
                }
              />
              <Text className="text-black text-base">Washroom</Text>
            </View>
          </View>
          <View className="flex-col justify-between">
            <View className="flex-row gap-[6px] items-center">
              <CheckIcon
                name="checkcircle"
                size={15}
                color={
                  newServiceArray.includes('Cafeteria') ? '#09AB10' : '#FF0000'
                }
              />
              <Text className="text-black text-base">Cafeteria</Text>
            </View>
            <View className="flex-row gap-[6px] items-center">
              <CheckIcon
                name="checkcircle"
                size={15}
                color={
                  newServiceArray.includes('Locker & Dressing Room')
                    ? '#09AB10'
                    : '#FF0000'
                }
              />
              <Text className="text-black text-base">
                Locker & Dressing Room
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* court section */}
      <View className="border-[2.5px] mt-3 px-3 py-2 border-slate-300 rounded-xl">
        <Text className="text-base font-semibold text-black mb-2">Court</Text>
        <View className="flex-row flex-wrap">
          {courts.map((court, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => handleCourtClick(court)}
              className="rounded-full m-1"
              underlayColor={'#DCDCDC'}
              style={{
                backgroundColor:
                  selectedCourt === court ? 'green' : 'transparent',
              }}>
              <View className="border-[1.5px] border-slate-500 rounded-full w-[106px] h-[36px] items-center justify-center">
                <Text
                  className="text-black text-md"
                  style={{
                    color: selectedCourt === court ? 'white' : 'black',
                  }}>
                  {court}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
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
                {userData.turf.turfLocation}
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
        className="mt-3 rounded-xl"
        style={{
          backgroundColor: isDisabled ? '#A9A9A9' : '#1D1CA3',
        }}
        disabled={isDisabled}
        onPress={() =>
          navigation.navigate('BookCourt', {court: selectedCourt})
        }>
        <Text className="text-lg text-center text-white py-3">Next</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TurfInformation;
