import {useNavigation} from '@react-navigation/native';
import {default as React, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  default as AntDesign,
  default as FavouriteIcon,
} from 'react-native-vector-icons/AntDesign';
import CrossIcon from 'react-native-vector-icons/Entypo';
import CommentIcon from 'react-native-vector-icons/Feather';
import LocationIcon2 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import Header from '../components/Header';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <View className='h-full'>
      {/* header */}
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
            className="mr-7">
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

      {/* dim background */}
      {modalVisible && (
        <View className="absolute top-0 bottom-0 right-0 left-0 z-[1]" style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}></View>
      )}

      {/* <Header /> */}

      {/* rest of the body */}
      <ScrollView className="">
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => navigation.navigate('TurfInformation')}>
          <View className="mx-2 mt-[12px] relative">
            <Image
              source={require('../assests/backgroundImage/bgImage.png')}
              style={{
                width: 394,
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
                B3 Turf
              </Text>
              <View className="flex-row items-center">
                <Icon name="location-pin" size={14} color="white" />
                <Text className="text-white ml-1" style={{fontSize: 14}}>
                  Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
            <View className="absolute right-5 top-3">
              <FavouriteIcon name="hearto" size={20} color="white" />
            </View>
          </View>
        </TouchableHighlight>

        {/* can delete from after fetching data */}
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={require('../assests/backgroundImage/bgImage.png')}
            style={{
              width: 394,
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
          <View className="absolute bottom-3 left-4 gap-[3px]">
            <Text className="text-white font-semibold" style={{fontSize: 22}}>
              B3 Turf
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 13}}>
                Swadesh Bhawan, behind Shreemaya Hotel LIG Square
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
          <View className="absolute right-5 top-3">
            <FavouriteIcon name="hearto" size={20} color="white" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
