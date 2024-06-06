import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import FavouriteIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import { default as NotificationIcon, default as SettingIcon } from 'react-native-vector-icons/Ionicons';
import FavouriteScreen from '../screens/FavouriteScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import UserProfileScreen from '../screens/UserProfileScreen';


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
              <Entypo name="home" size={27} color="white" />
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
              <FavouriteIcon name="hearto" size={26} color="white" />
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
              {/* <Image
                source={require('../assests/icons/notificationIcon.png')}
                style={{width: 22, height: 22.01}}
              /> */}
              <NotificationIcon name="notifications-outline" size={27} color="white" />
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
              <SettingIcon name="settings-outline" size={27} color="white" />
              <Text className="text-white font-semibold text-xs">Setting</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center pt-1">
              <ProfileIcon name="user-o" size={27} color="white" />
              <Text className="text-white font-semibold text-xs">Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
