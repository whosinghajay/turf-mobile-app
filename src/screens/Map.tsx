import {
  View,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message: 'Cool Photo App needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [currentLocation, setCurrentLocation] = useState<any>(null);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        console.log(latitude, longitude);
      },
      error => Alert.alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const openMaps = () => {
    const {latitude, longitude} = currentLocation;
    if (latitude && longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    } else {
      Alert.alert('Location not available');
    }
  };

  return (
    <View>
      <Text>Get Co-ordinates</Text>
      <View>
        <Text>
          Latitude: {currentLocation ? currentLocation.latitude : 'Loading....'}
        </Text>
        <Text>
          Longitude:{' '}
          {currentLocation ? currentLocation.longitude : 'Loading...'}
        </Text>
      </View>

      {currentLocation ? (
        <TouchableOpacity onPress={openMaps}>
          <View>
            <Text>Open Maps</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={Permission}>
          <View>
            <Text>Get Location</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Map;
