import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FavouriteIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <Header />
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
    </>
  );
};

export default HomeScreen;
