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
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import TabNavigation from './src/navigators/TabNavigation';
import ProfileScreen from './src/screens/ProfileScreen';
import TurfInformation from './src/screens/TurfInformation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
