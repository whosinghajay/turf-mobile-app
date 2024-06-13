import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React from 'react';
import {default as ShareIcon} from 'react-native-vector-icons/FontAwesome';

const UserProfileScreen = () => {
  return (
    <>
      {/* header */}
      <View className="bg-[#1D1CA3] px-4 pt-4 rounded-b-[30px]">
        <Text className="text-white font-semibold">My Profile</Text>
        <View className="mx-auto mt-10 mb-8">
          <Image
            source={require('../assests/images/profileImage.png')}
            style={{width: 92.82, height: 92.82}}
          />
          <View className='absolute top-[72px] left-[69px] bg-white rounded-full p-[2px]'>
            <ShareIcon name="share-square-o" size={14} color="black" />
          </View>
        </View>
      </View>

      {/* info section */}
      <View className="mx-auto mt-6">

        {/* enter your name wala section */}
        <View className="mb-4">
          <Text className="text-black text-base font-semibold mb-1">
            Enter Your Full Name
          </Text>
          <TextInput
            placeholder="Enter Your Full Name"
            className="border-[1px] rounded-lg border-black text-black pl-5"
            style={{width: 310, height: 50}}
            placeholderTextColor="black"
          />
        </View>

        {/* enter your location wala section */}
        <View>
          <Text className="text-black text-base font-semibold mb-1">
            Enter Your Location
          </Text>
          <TextInput
            placeholder="Enter Your Location"
            className="border-[1px] rounded-lg border-black text-black pl-5"
            style={{width: 310, height: 50}}
            placeholderTextColor="black"
          />
        </View>

        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => Alert.alert('You clicked on SAVE button')}>
          <View className="bg-[#1D1CA3] mt-6 rounded-xl">
            <Text className="text-white text-center py-3 text-base">Save</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default UserProfileScreen;
