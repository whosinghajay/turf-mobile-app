import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1D1CA3',
          height: 78.86,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <Image
                source={require('../assests/icons/footerHome.png')}
                style={{width: 22, height: 22.01}}
              />
              <Text className="text-white font-semibold text-xs">Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <Image
                source={require('../assests/icons/favoriteIcon.png')}
                style={{width: 22, height: 22.01}}
              />
              <Text className="text-white font-semibold text-xs">
                Favourite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <Image
                source={require('../assests/icons/notificationIcon.png')}
                style={{width: 22, height: 22.01}}
              />
              <Text className="text-white font-semibold text-xs">
                Notification
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <Image
                source={require('../assests/icons/settingIcon.png')}
                style={{width: 22, height: 22.01}}
              />
              <Text className="text-white font-semibold text-xs">Setting</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <Image
                source={require('../assests/icons/profileIcon.png')}
                style={{width: 22, height: 22.01}}
              />
              <Text className="text-white font-semibold text-xs">Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
