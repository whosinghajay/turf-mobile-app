import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {useCreateTurfMutation} from '../redux/api/turfAPI';

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
  const [turfDataEntries, setTurfDataEntries] = useState({
    turfName: '',
    turfLocation: '',
    services: [''],
    courtNumbers: 0,
    price: 0,
    typeOfCourt: '',
    image: '',
  });
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(
    null,
  );

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

  const [createTurf] = useCreateTurfMutation();

  const selectImage = () => {
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

  const renderItem = ({item}: {item: any}) => {
    return item;
  };

  const renderForm = () => {
    return (
      <>
        <View className="pt-6 pl-5 pb-6">
          <Text className="text-white text-3xl mb-8 font-bold">
            Create Turf
          </Text>

          {/* name field */}
          <View className="w-80">
            <Text className="text-white text-base">Turf Name</Text>
            <TextInput
              placeholder="Enter turf name here"
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              className="border-b-[1px] text-white border-white p-1 text-base"
              onChangeText={e =>
                setTurfDataEntries({
                  ...turfDataEntries,
                  turfName: e,
                })
              }
            />
          </View>

          {/* location field */}
          <View className="w-80 mt-4">
            <Text className="text-white text-base">Location</Text>
            <TextInput
              placeholder="Enter turf location here"
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              className="border-b-[1px] text-white border-white p-1 text-base"
              onChangeText={e =>
                setTurfDataEntries({
                  ...turfDataEntries,
                  turfLocation: e,
                })
              }
            />
          </View>

          {/* image field */}
          <View className="w-80 mt-4">
            <Text className="text-white text-base">Image</Text>
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
            <View className="h-[1.04px] bg-white mt-3"></View>
          </View>

          {/* court number field */}
          <View className="w-80 mt-4">
            <Text className="text-white text-base">Number of Courts</Text>
            <TextInput
              placeholder="Enter number of courts here"
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              className="border-b-[1px] text-white border-white p-1 text-base"
              keyboardType="numeric"
              onChangeText={e =>
                setTurfDataEntries({
                  ...turfDataEntries,
                  courtNumbers: Number(e),
                })
              }
            />
          </View>

          {/* court type field */}
          <View className="w-80 mt-4">
            <Text className="text-white text-base">Court Type</Text>
            <TextInput
              placeholder="Enter court's type here"
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              className="border-b-[1px] text-white border-white p-1 text-base"
              onChangeText={e =>
                setTurfDataEntries({
                  ...turfDataEntries,
                  typeOfCourt: e,
                })
              }
            />
          </View>

          {/* services field */}
          <View className="w-80 mt-4">
            <Text className="text-white text-base">Services</Text>
            <View className="pt-2">
              <DropDownPicker
                multiple={true}
                open={open}
                value={selectedServices}
                items={MULTI_SELECT_OPTIONS}
                setOpen={setOpen}
                setValue={setSelectedServices}
                setItems={() => {}}
                placeholder="Select Services"
                dropDownContainerStyle={{
                  backgroundColor: 'white',
                }}
                style={{backgroundColor: '#E5E4E2'}}
                placeholderStyle={{
                  color: 'black',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              />
            </View>
            <View className="h-[1.04px] bg-white mt-3"></View>
          </View>

          {/* price field */}
          <View className="w-80 mt-4">
            <Text className="text-white text-base">Price</Text>
            <TextInput
              placeholder="Enter hourly price here"
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              className="border-b-[1px] text-white border-white p-1 text-base"
              keyboardType="numeric"
              onChangeText={e =>
                setTurfDataEntries({
                  ...turfDataEntries,
                  price: Number(e),
                })
              }
            />
          </View>

          {/* create button */}
          <TouchableOpacity onPress={createTurfHandler}>
            <View className="w-80 mt-4 py-2 bg-green-800 rounded-xl">
              <Text className="text-white mx-auto text-lg font-semibold">
                Create
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const formData = new FormData();
  formData.append('turfName', turfDataEntries.turfName);
  formData.append('turfLocation', turfDataEntries.turfLocation);
  formData.append('services', turfDataEntries.services);
  formData.append('courtNumbers', turfDataEntries.courtNumbers.toString());
  formData.append('price', turfDataEntries.price.toString());
  formData.append('typeOfCourt', turfDataEntries.typeOfCourt);

  if (selectedImage) {
    formData.append('image', {
      uri: selectedImage,
      type: 'image/jpeg',
      name: 'turf_image.jpg',
    });
  }

  const createTurfHandler = async () => {
    try {
      await createTurf(formData).unwrap();
      setConfirmationMessage('Turf created successfully!');
      setTimeout(() => {
        setConfirmationMessage(null);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

  const renderConfirmationMessage = () => {
    if (confirmationMessage) {
      return (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>{confirmationMessage}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <ImageBackground
      source={require('../assests/images/turfCreateBGimage.png')}
      resizeMode="cover">
      <View className="h-full">
        <FlatList
          data={[renderForm()]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {renderConfirmationMessage()}
      </View>
    </ImageBackground>
  );
};

export default CreateTurfScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16, // Optional: adds some space above the button
  },
  buttonText: {
    color: 'black', // white
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
  },
  imagePreview: {
    width: 320,
    height: 172.86,
    borderRadius: 8,
    borderColor: '#1f2937',
    borderWidth: 1,
    marginTop: 10,
  },
  crossButton: {
    position: 'absolute',
    top: 16,
    right: 8,
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
  confirmationContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#d4edda',
    borderRadius: 5,
  },
  confirmationText: {
    color: '#155724',
    fontSize: 16,
    textAlign: 'center',
  },
});
