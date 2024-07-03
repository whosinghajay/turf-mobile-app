// import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
// import React from 'react';
// import Home from './src/pages/Home';
// import Footer from './src/components/Footer';
// import Header from './src/components/Header';
// import Screen1 from './src/components/SplashScreen/Screen1';

// const App = () => {
//   return (
//     // <SafeAreaView style={styles.container}>
//     //   <Header />
//     //   <ScrollView contentContainerStyle={styles.scrollContent}>
//     //     <Home />
//     //   </ScrollView>
//     //   <Footer />
//     // </SafeAreaView>
//     <Screen1/>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 78.86, // Adjust this value according to the height of your footer
//   },
// });

// export default App;
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './src/navigators/TabNavigation';
import BookCourtPage from './src/screens/BookCourtPage';
import BookCourtRecieptPage from './src/screens/BookCourtRecieptPage';
import ProfileScreen from './src/screens/ProfileScreen';
import SplashScreen from './src/screens/SplashScreen';
import TurfInformation from './src/screens/TurfInformation';
import FavouritePage from './src/screens/FavouritePage';
import PhoneNumber from './src/screens/PhoneNumber';
import OTP from './src/screens/OTPScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
        </Stack.Navigator>
      </NavigationContainer>
      <Toast/>
    </Provider>
  );
};

export default App;
