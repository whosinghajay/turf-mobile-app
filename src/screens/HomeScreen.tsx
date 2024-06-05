import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View className="border-2">
          <ImageBackground
            source={require('../assests/backgroundImage/bgImage.png')}
            resizeMode="cover">
            <Text className="h-[100px]">Hello</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
