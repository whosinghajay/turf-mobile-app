import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
  Alert,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {default as RightArrowIcon} from 'react-native-vector-icons/MaterialIcons';
import {default as MoreIcon} from 'react-native-vector-icons/Feather';
import {useGetTurfQuery} from '../redux/api/turfAPI';
import {Turf} from '../types/types';
import {API_SERVER} from '../../envVar';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {default as EditIcon} from 'react-native-vector-icons/Entypo';
import {default as DeleteIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';

interface UserInfoType {
  _id: string;
  phoneNumber: number;
  gender: string;
  fullName: string;
  location: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const TurfHomeScreen = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [turfList, setTurfList] = useState<Turf[]>([]);
  const [userBookedTurf, setUserBookedTurf] = useState();

  useEffect(() => {
    const userData = async () => {
      const data = await AsyncStorage.getItem('my-data');
      if (data) {
        setUserInfo(JSON.parse(data));
      }
    };
    userData();
  }, []);

  const {isLoading, isError, isSuccess, data, error, refetch} =
    useGetTurfQuery();

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
    }
    if (isError) {
      console.error('Error fetching turf data: ', error);
    }
    if (isSuccess && data) {
      const userTurfs = data.turf.filter(turf => turf.turfId === userInfo?._id);
      setTurfList(userTurfs);
    }
  }, [isLoading, isError, isSuccess, data, error, userInfo]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const renderItem = ({item}: {item: Turf}) => {
    return (
      <TouchableHighlight underlayColor="#fff" onPress={() => {}}>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={{uri: `${API_SERVER}/${item.image}`}}
            style={{
              width: 304,
              height: 172.86,
              borderRadius: 12,
            }}
            className="max-w-full mx-auto"
          />

          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 1)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 12,
            }}>
            {/* This LinearGradient covers the entire image */}
          </LinearGradient>

          <View className="absolute bottom-3 left-4 gap-[3px] right-4">
            <Text className="text-white font-semibold" style={{fontSize: 24}}>
              {item.turfName}
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 14}}>
                {item.turfLocation}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <View className="flex-row gap-2">
                <Image
                  source={require('../assests/icons/starIcon.png')}
                  style={{width: 81, height: 19}}
                />
                <Text className="text-yellow-300">4.0</Text>
              </View>
              <View className="flex-row gap-1 items-center">
                <CommentIcon name="message-square" size={15} color="white" />
                <Text className="text-white">441 Comment</Text>
              </View>
            </View>
          </View>
          <View className="absolute right-4 top-3 gap-2">
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => Alert.alert('Edit')}>
              <EditIcon name="edit" size={20} color="white" />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => Alert.alert('Delete')}>
              <DeleteIcon name="delete" size={20} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      {/* header */}
      <StatusBar backgroundColor="#1D1CA3" />
      <View className="bg-[#1D1CA3] pt-5 pb-4 pl-5 rounded-b-3xl flex-row">
        <View className="mt-4 mb-4 flex-row">
          <Image
            source={require('../assests/images/profileImage.png')}
            style={{width: 92.82, height: 92.82}}
          />
          <View>
            <Text className="text-white text-xl mt-3 ml-4">
              Hey🖐, {userInfo?.fullName}
            </Text>

            <Text className="text-white text-sm mt-1 ml-4">
              {userInfo?.phoneNumber} | {userInfo?.location}
            </Text>

            <TouchableHighlight
              onPress={() => Alert.alert("You're viewing this Profile")}
              underlayColor={'transparent'}>
              <View className="flex-row items-center mt-1">
                <Text className="text-white text-xs ml-4 font-light">
                  View Profile
                </Text>
                <RightArrowIcon
                  name="arrow-forward-ios"
                  size={10}
                  color="white"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View className="absolute right-5 top-11">
          <TouchableHighlight
            onPress={() => Alert.alert("You're viewing this Profile")}
            underlayColor={'transparent'}>
            <View className="flex-row items-center mt-1">
              <MoreIcon name="more-vertical" size={28} color="white" />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      {/* body section */}
      <View className="mx-3 mt-1">
        <Text className="text-base font-medium mx-2">
          Here's the list of turves created
        </Text>

        <View>
          <FlatList
            data={turfList}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            contentContainerStyle={{paddingBottom: 20}}
            horizontal={true}
          />
        </View>

        <View className="border-[0.5px] border-gray-500 w-[70%] self-center"></View>
      </View>

      {/* turf booked by user section */}
      <View className="mx-3 mt-5">
        <Text className="text-base font-medium mx-2">
          List of users booked turf
        </Text>

        <View>
          {/* <FlatList
            data={turfList}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            contentContainerStyle={{paddingBottom: 20}}
            horizontal={true}
          /> */}
        </View>

        <View className="border-[0.5px] border-gray-500 w-[70%] self-center"></View>
      </View>
    </View>
  );
};

export default TurfHomeScreen;
