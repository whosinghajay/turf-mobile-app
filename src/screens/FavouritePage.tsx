import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { default as LeftArrowIcon } from 'react-native-vector-icons/AntDesign';

const FavouritePage = () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <View className="flex-row justify-between mt-4 mx-4">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            underlayColor={'#EFEFEF'}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">
            Favourite
          </Text>
        </View>
      </View>

      <View className="mx-auto my-auto">
        <Image
          source={require('../assests/images/emptylistImageFavourite.png')}
          style={{width: 211, height: 200}}
        />
      </View>
    </>
  );
};

export default FavouritePage;
