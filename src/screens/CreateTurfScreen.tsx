import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import LeftArrowIcon from 'react-native-vector-icons/AntDesign';
import {useCreateTurfMutation} from '../redux/api/turfAPI';
import {PermissionsAndroid} from 'react-native';

interface User {
  _id: string;
  phoneNumber: number;
  gender: string;
  fullName: string;
  location: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const MULTI_SELECT_OPTIONS = [
  {label: 'Parking', value: 'Parking'},
  {label: 'Washroom', value: 'Washroom'},
  {label: 'Cafeteria', value: 'Cafeteria'},
  {label: 'Locker & Dressing Room', value: 'Locker & Dressing Room'},
];

const CreateTurfScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [turfDataEntries, setTurfDataEntries] = useState({
    turfName: '',
    turfLocation: '',
    services: [''],
    courtNumbers: 0,
    price: 0,
    typeOfCourt: '',
    image: '',
    turfId: '',
  });
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation<any>();

  const [createTurf] = useCreateTurfMutation();

  useEffect(() => {
    const getUser = async () => {
      const jsonValue = await AsyncStorage.getItem('my-data');
      const data: User = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      setTurfDataEntries(prevEntries => ({
        ...prevEntries,
        image: selectedImage,
      }));
    }
  }, [selectedImage]);

  useEffect(() => {
    if (selectedServices.length > 0) {
      setTurfDataEntries(prevEntries => ({
        ...prevEntries,
        services: selectedServices,
      }));
    }
  }, [selectedServices]);

  // Permission Request Function

  // const requestGalleryPermission = async () => {
  //   try {
  //     if (Platform.OS === 'android') {
  //       const apiLevel = Platform.Version; // Android API Level as a number

  //       let permission;

  //       if (apiLevel >= 33) {
  //         // For Android 13 and above
  //         permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
  //       } else {
  //         // For Android 12 and below
  //         permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
  //       }

  //       // Check if permission is already granted
  //       const hasPermission = await PermissionsAndroid.check(permission);
  //       if (!hasPermission) {
  //         const result = await PermissionsAndroid.request(permission);

  //         if (result === PermissionsAndroid.RESULTS.GRANTED) {
  //           return true;
  //         } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
  //           Alert.alert(
  //             'Permission Denied',
  //             'Please enable gallery access in settings.',
  //             [
  //               { text: 'Cancel', style: 'cancel' },
  //               { text: 'Open Settings', onPress: () => Linking.openSettings() },
  //             ],
  //           );
  //           return false;
  //         }
  //         return false;
  //       }
  //       return true;
  //     } else {
  //       // iOS Permission Handling (unchanged)
  //       const status = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
  //       console.log('iOS PHOTO_LIBRARY permission status:', status);

  //       if (status === RESULTS.DENIED) {
  //         const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
  //         console.log('iOS permission request result:', result);
  //         return result === RESULTS.GRANTED || result === RESULTS.LIMITED;
  //       }
  //       if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
  //         return true;
  //       }
  //       if (status === RESULTS.BLOCKED) {
  //         Alert.alert(
  //           'Permission Blocked',
  //           'Please enable photo library access in settings.',
  //           [
  //             { text: 'Cancel', style: 'cancel' },
  //             { text: 'Open Settings', onPress: () => Linking.openSettings() },
  //           ],
  //         );
  //         return false;
  //       }
  //       return false;
  //     }
  //   } catch (error) {
  //     console.warn('Permission error:', error);
  //     return false;
  //   }
  // };

  const selectImage = async () => {
    // const hasPermission = await requestGalleryPermission();
    // if (!hasPermission) {
    //   Alert.alert(
    //     'Permission Denied',
    //     'Cannot access gallery without permission.',
    //   );
    //   return;
    // }

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setSelectedImage(response.assets[0].uri || null);
        }
      },
    );
  };

  const deselectImage = () => {
    setSelectedImage(null);
  };

  const renderForm = () => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Turf</Text>

        {/* Turf Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Turf Name</Text>
          <TextInput
            placeholder="Enter turf name here"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.textInput}
            onChangeText={e =>
              setTurfDataEntries({
                ...turfDataEntries,
                turfName: e,
              })
            }
          />
        </View>

        {/* Turf Location */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            placeholder="Enter turf location here"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.textInput}
            onChangeText={e =>
              setTurfDataEntries({
                ...turfDataEntries,
                turfLocation: e,
              })
            }
          />
        </View>

        {/* Image Selection */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Image</Text>
          <TouchableOpacity style={styles.button} onPress={selectImage}>
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>
          {selectedImage && (
            <View style={styles.imageContainer}>
              <Image
                source={{uri: selectedImage}}
                style={styles.imagePreview}
              />
              <TouchableOpacity
                style={styles.crossButton}
                onPress={deselectImage}>
                <Text style={styles.crossButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.separator} />
        </View>

        {/* Number of Courts */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Courts</Text>
          <TextInput
            placeholder="Enter number of courts here"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={e =>
              setTurfDataEntries({
                ...turfDataEntries,
                courtNumbers: Number(e),
              })
            }
          />
        </View>

        {/* Court Type */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Court Type</Text>
          <TextInput
            placeholder="Enter court's type here"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.textInput}
            onChangeText={e =>
              setTurfDataEntries({
                ...turfDataEntries,
                typeOfCourt: e,
              })
            }
          />
        </View>

        {/* Services */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Services</Text>
          <DropDownPicker
            multiple={true}
            open={open}
            value={selectedServices}
            items={MULTI_SELECT_OPTIONS}
            setOpen={setOpen}
            setValue={setSelectedServices}
            setItems={() => {}}
            placeholder="Select Services"
            dropDownContainerStyle={styles.dropDownContainer}
            style={styles.dropDown}
            placeholderStyle={styles.dropDownPlaceholder}
          />
          <View style={styles.separator} />
        </View>

        {/* Price */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            placeholder="Enter hourly price here"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={e =>
              setTurfDataEntries({
                ...turfDataEntries,
                price: Number(e),
                turfId: userData?._id!,
              })
            }
          />
        </View>

        {/* Create Button */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={createTurfHandler}
          disabled={isSubmitting}>
          <Text style={styles.createButtonText}>
            {isSubmitting ? 'Creating...' : 'Create'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  // FormData
  const formData = new FormData();
  formData.append('turfName', turfDataEntries.turfName);
  formData.append('turfLocation', turfDataEntries.turfLocation);
  formData.append('services', JSON.stringify(turfDataEntries.services)); // Ensure services are sent as a JSON string
  formData.append('courtNumbers', turfDataEntries.courtNumbers.toString());
  formData.append('price', turfDataEntries.price.toString());
  formData.append('typeOfCourt', turfDataEntries.typeOfCourt);
  formData.append('turfId', turfDataEntries.turfId);

  if (selectedImage) {
    formData.append('image', {
      uri: selectedImage,
      type: 'image/jpeg',
      name: 'turf_image.jpg',
    });
  }

  const createTurfHandler = async () => {
    if (
      !turfDataEntries.turfName.trim() ||
      !turfDataEntries.turfLocation.trim() ||
      turfDataEntries.services.length === 0 ||
      turfDataEntries.courtNumbers <= 0 ||
      turfDataEntries.price <= 0 ||
      !turfDataEntries.typeOfCourt.trim() ||
      !selectedImage
    ) {
      Alert.alert(
        'Validation Error',
        'Please fill out all required fields correctly.',
      );
      return;
    }

    setIsSubmitting(true);
    try {
      await createTurf(formData).unwrap();
      setConfirmationMessage('Turf created successfully!');
      setTimeout(() => {
        setConfirmationMessage(null);
        setIsSubmitting(false);
        navigation.navigate('TurfHome');
      }, 5000);
    } catch (error) {
      console.error(error, 'yeyey');
      setConfirmationMessage('Error Posting Turf! Try Again');
      setTimeout(() => {
        setConfirmationMessage(null);
        setIsSubmitting(false);
      }, 5000);
    }
  };

  const renderConfirmationMessage = () => {
    if (confirmationMessage?.includes('Turf created successfully!')) {
      return (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>{confirmationMessage}</Text>
        </View>
      );
    } else if (confirmationMessage?.includes('Error Posting Turf')) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{confirmationMessage}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <ImageBackground
        source={require('../assests/images/turfCreateBGimage.png')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          {/* Header */}
          <View className="flex-row justify-between mt-4 mx-4">
            <View className="flex-row gap-2 items-center">
              <TouchableHighlight
                onPress={() => {
                  if (userData?.role === 'user') {
                    navigation.navigate('Home');
                  } else if (userData?.role === 'turfPoster') {
                    navigation.navigate('TurfHome');
                  }
                }}
                underlayColor="transparent">
                <LeftArrowIcon name="arrowleft" size={23} color="#fff" />
              </TouchableHighlight>
              <Text className="text-white text-[18px] font-semibold">
                Create
              </Text>
            </View>
          </View>
        </View>

        {/* Scrollable Form */}
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          {renderForm()}
        </ScrollView>

        {/* Confirmation Message */}
        {renderConfirmationMessage()}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default CreateTurfScreen;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    // Adjust as needed
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40, // Extra padding at the bottom
  },
  formContainer: {
    // Optional: Additional styling
  },
  title: {
    color: 'white',
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
    marginTop: 10,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    borderColor: '#1f2937',
    borderWidth: 1,
  },
  crossButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropDownContainer: {
    backgroundColor: 'white',
  },
  dropDown: {
    backgroundColor: '#E5E4E2',
  },
  dropDownPlaceholder: {
    color: 'black',
    fontWeight: '700',
    fontSize: 14,
  },
  separator: {
    height: 1.04,
    backgroundColor: 'white',
    marginTop: 10,
  },
  createButton: {
    backgroundColor: '#2F855A', // Green-800 equivalent
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  confirmationContainer: {
    marginTop: 10,
    padding: 8,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  confirmationText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  errorContainer: {
    marginTop: 10,
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
