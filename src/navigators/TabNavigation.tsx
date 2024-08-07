import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  default as BookingIcon,
  default as ProfileIcon,
} from 'react-native-vector-icons/FontAwesome';
import HomeIcon, {
  default as NotificationIcon,
  default as SettingIcon,
} from 'react-native-vector-icons/Ionicons';
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateTurfScreen from '../screens/CreateTurfScreen';

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

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  useEffect(() => {
    const userData = async () => {
      const data = await AsyncStorage.getItem('my-data');
      if (data) {
        setUserInfo(JSON.parse(data));
      }
    };
    userData();
  }, []);

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
              <HomeIcon
                name={focused ? 'home' : 'home-outline'}
                size={27}
                color="white"
              />
              <Text className="text-white font-semibold text-xs">Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <BookingIcon
                name={focused ? 'calendar' : 'calendar-o'}
                size={26}
                color="white"
              />
              <Text className="text-white font-semibold text-xs">Booking</Text>
            </View>
          ),
        }}
      />
      {userInfo?.role === 'user' ? (
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View className="gap-1 items-center">
                <NotificationIcon
                  name={focused ? 'notifications' : 'notifications-outline'}
                  size={27}
                  color="white"
                />
                <Text className="text-white font-semibold text-xs">
                  Notification
                </Text>
              </View>
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="createTurfButton"
          component={CreateTurfScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View className="gap-1 items-center">
                <PlusIcon
                  name={focused ? 'plus-circle' : 'plus-circle-outline'}
                  size={27}
                  color="white"
                />
                <Text className="text-white font-semibold text-xs">Create</Text>
              </View>
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="gap-1 items-center">
              <SettingIcon
                name={focused ? 'settings' : 'settings-outline'}
                size={27}
                color="white"
              />
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
              <ProfileIcon
                name={focused ? 'user' : 'user-o'}
                size={27}
                color="white"
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
