import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import TabNavigation from './src/navigators/TabNavigation';
import { store } from './src/redux/store';
import BookCourtPage from './src/screens/BookCourtPage';
import BookCourtRecieptPage from './src/screens/BookCourtRecieptPage';
import FavouritePage from './src/screens/FavouritePage';
import Map from './src/screens/Map';
import OTP from './src/screens/OTPScreen';
import PhoneNumber from './src/screens/PhoneNumber';
import ProfileScreen from './src/screens/ProfileScreen';
import SplashScreen from './src/screens/SplashScreen';
import TurfInformation from './src/screens/TurfInformation';
import PrivacyPolicy from './src/screens/PrivacyPolicyScreen';
import TermsAndCondition from './src/screens/TermsAndConditionScreen';
import RateApp from './src/screens/RateAppScreen';
import LanguageSelection from './src/screens/LanguageSelectScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkAsyncStorage = async () => {
      try {
        const userData = await AsyncStorage.getItem('my-data');

        if (userData) {
          setInitialRoute('Tab');
        } else {
          setInitialRoute('Splash Screen');
        }
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
        setInitialRoute('Splash Screen');
      }
    };

    checkAsyncStorage();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={initialRoute}>
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="Tab"
            component={TabNavigation}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="TurfInformation"
            component={TurfInformation}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="BookCourt"
            component={BookCourtPage}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="BookCourtReciept"
            component={BookCourtRecieptPage}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="Favourite"
            component={FavouritePage}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="PhoneNumber"
            component={PhoneNumber}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="Map"
            component={Map}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="TermsAndCondition"
            component={TermsAndCondition}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="RateApp"
            component={RateApp}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
          <Stack.Screen
            name="LanguageSelection"
            component={LanguageSelection}
            options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
