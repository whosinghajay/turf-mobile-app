import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {default as EditIcon} from 'react-native-vector-icons/Entypo';
import CommentIcon, {
  default as MoreIcon,
} from 'react-native-vector-icons/Feather';
import {default as DeleteIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as RightArrowIcon} from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useGetBookingQuery} from '../redux/api/bookingAPI';
import {useGetTurfQuery} from '../redux/api/turfAPI';
import {useGetUsersQuery} from '../redux/api/userAPI';
import {Booking, Turf, User} from '../types/types';
import {BarChart} from 'react-native-gifted-charts';
import {API_SERVER} from '../../envVar';

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

const TurfHomeScreen = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [turfList, setTurfList] = useState<Turf[]>([]);
  const [userBookedTurf, setUserBookedTurf] = useState<Booking[]>([]);
  const [allUser, setAllUser] = useState<User[]>([]);
  const [userarray, setuserarray] = useState<any>([]);
  const [modalVis, setModalVis] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    const userData = async () => {
      const data = await AsyncStorage.getItem('my-data');
      if (data) {
        setUserInfo(JSON.parse(data));
      }
    };
    userData();
  }, []);

  const {isLoading, isError, isSuccess, data, error, refetch} =
    useGetTurfQuery();

  const {
    isLoading: isBookingLoading,
    isError: isBookingError,
    isSuccess: isBookingSuccess,
    data: bookingData,
    error: bookingError,
    refetch: refetchBookings,
  } = useGetBookingQuery();

  const {
    isLoading: isUserLoading,
    isError: isUserError,
    isSuccess: isUserSuccess,
    data: userData,
    error: userError,
    // refetch: refetchUsers,
  } = useGetUsersQuery();

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
    }
    if (isError) {
      console.error('Error fetching turf data: ', error);
    }
    if (isSuccess && data) {
      const userTurfs = data.turf.filter(turf => turf.turfId === userInfo?._id);
      setTurfList(userTurfs);
    }
  }, [isLoading, isError, isSuccess, data, error, userInfo]);

  useEffect(() => {
    if (isUserLoading) {
      console.log('Loading...');
    }
    if (isUserError) {
      console.error('Error fetching turf data: ', userError);
    }
    if (isUserSuccess && userData) {
      setAllUser(userData.user);
    }
  }, [isUserLoading, isUserError, isUserSuccess, userData, userError]);

  useEffect(() => {
    if (isBookingLoading) {
      console.log('Loading...');
    }
    if (isBookingError) {
      console.error('Error fetching turf data: ', isBookingError);
    }
    if (isBookingSuccess && bookingData) {
      const userTurfsIds = turfList.map(turf => turf._id);
      const users = bookingData.bookings.filter(booking =>
        userTurfsIds.includes(booking.turfInfo.turfId),
      );
      setUserBookedTurf(users);
    }
  }, [
    isBookingLoading,
    isBookingError,
    isBookingSuccess,
    bookingData,
    bookingError,
    turfList,
  ]);

  useFocusEffect(
    useCallback(() => {
      refetch();
      refetchBookings();
    }, []),
  );

  useEffect(() => {
    const userArray = () => {
      const userid = userBookedTurf.map(c => c.userId);
      let turff: any = [];

      for (let i = 0; i < userid.length; i++) {
        const foundUser = allUser.filter(c => c._id === userid[i]);
        turff = [...turff, ...foundUser];
      }
      setuserarray(turff);
    };
    userArray();
  }, [userBookedTurf, allUser, setuserarray]);

  const renderItem = ({item}: {item: Turf}) => {
    return (
      <TouchableHighlight underlayColor="#fff" onPress={() => {}}>
        <View className="mx-2 mt-[12px] relative">
          <Image
            source={{uri: `${API_SERVER}/${item.image}`}}
            style={{
              width: 304,
              height: 172.86,
              borderRadius: 12,
            }}
            className="max-w-full mx-auto"
          />

          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 1)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 12,
            }}>
            {/* This LinearGradient covers the entire image */}
          </LinearGradient>

          <View className="absolute bottom-3 left-4 gap-[3px] right-4">
            <Text className="text-white font-semibold" style={{fontSize: 24}}>
              {item.turfName}
            </Text>
            <View className="flex-row items-center">
              <Icon name="location-pin" size={14} color="white" />
              <Text className="text-white ml-1" style={{fontSize: 14}}>
                {item.turfLocation}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <View className="flex-row gap-2">
                <Image
                  source={require('../assests/icons/starIcon.png')}
                  style={{width: 81, height: 19}}
                />
                <Text className="text-yellow-300">4.0</Text>
              </View>
              <View className="flex-row gap-1 items-center">
                <CommentIcon name="message-square" size={15} color="white" />
                <Text className="text-white">441 Comment</Text>
              </View>
            </View>
          </View>
          <View className="absolute right-4 top-3 gap-2">
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => Alert.alert('Edit')}>
              <EditIcon name="edit" size={20} color="white" />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => Alert.alert('Delete')}>
              <DeleteIcon name="delete" size={20} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const renderUser = ({item}: {item: User}) => {
    const book = bookingData?.bookings.find(c => c.userId === item._id);

    return (
      <View className="bg-white rounded-lg shadow-lg p-4 mt-3 mx-3">
        <View className="flex-row justify-between">
          <View className="">
            <Text className="text-gray-600 font-semibold mb-2">User</Text>
            <Text className="text-gray-600 font-semibold mb-2">Phone no.</Text>
            <Text className="text-gray-600 font-semibold mb-2">Turf</Text>
            <Text className="text-gray-600 font-semibold">Slot</Text>
          </View>
          <View className="ml-4">
            <Text className="text-black font-bold mb-2">{item.fullName}</Text>
            <Text className="text-black font-bold mb-2">
              {item.phoneNumber}
            </Text>
            <Text className="text-black font-bold mb-2">
              {book?.turfInfo.turfName}
            </Text>
            <Text className="text-black font-bold">
              {book?.turfInfo.slot.map(c => c.date)[0]} /{' '}
              {book?.turfInfo.slot.map(c => c.time).join(', ')}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];

  return (
    <ScrollView>
      {/* header */}
      <StatusBar backgroundColor="#1D1CA3" />
      <View className="bg-[#1D1CA3] pt-5 pb-4 pl-5 rounded-b-3xl flex-row">
        <View className="mt-4 mb-4 flex-row">
          <Image
            source={require('../assests/images/profileImage.png')}
            style={{width: 92.82, height: 92.82}}
          />
          <View>
            <Text className="text-white text-xl mt-3 ml-4">
              Hey🖐, {userInfo?.fullName}
            </Text>

            <Text className="text-white text-sm mt-1 ml-4">
              {userInfo?.phoneNumber} | {userInfo?.location}
            </Text>

            <TouchableHighlight
              onPress={() => navigation.navigate('UserProfile')}
              underlayColor={'transparent'}>
              <View className="flex-row items-center mt-1">
                <Text className="text-white text-xs ml-4 font-light">
                  View Profile
                </Text>
                <RightArrowIcon
                  name="arrow-forward-ios"
                  size={10}
                  color="white"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View className="absolute right-5 top-11">
          <TouchableHighlight
            onPress={() => setModalVis(true)}
            underlayColor={'transparent'}>
            <View className="flex-row items-center mt-1">
              <MoreIcon name="more-vertical" size={28} color="white" />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      {/* body section - list of turves created*/}
      <View className="mx-3 mt-1">
        <Text className="text-base font-medium mx-2">
          Here's the list of turves created
        </Text>

        <View>
          <FlatList
            data={turfList}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            contentContainerStyle={{paddingBottom: 20}}
            horizontal={true}
          />
        </View>

        <View className="border-[0.5px] border-gray-500 w-[70%] self-center"></View>
      </View>

      {/* turf booked by user section */}
      <View className="mx-3 mt-5">
        <Text className="text-base font-medium mx-2">
          List of users booked turf
        </Text>

        <View>
          <FlatList
            data={userarray.reverse()}
            renderItem={renderUser}
            keyExtractor={item => item._id.toString()}
            contentContainerStyle={{paddingBottom: 20}}
            horizontal={true}
          />
        </View>

        <View className="border-[0.5px] border-gray-500 w-[70%] self-center"></View>
      </View>

      {/* booking chart section */}
      <View className="mx-3 mt-5">
        <Text className="text-base font-medium mx-2 mb-3">Booking Chart</Text>

        <View>
          <BarChart
            barWidth={22}
            noOfSections={3}
            barBorderRadius={4}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>

        <View className="border-[0.5px] border-gray-500 w-[70%] self-center my-5"></View>
      </View>

      {/* modal for more button */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVis}
        onRequestClose={() => setModalVis(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVis(false)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Text style={styles.title}>Need Help?</Text>
                  <Text style={styles.message}>
                    If you encounter any problems or need assistance, feel free
                    to contact the admin of this application.
                  </Text>

                  <View style={styles.contactInfo}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.infoText}>John Doe</Text>
                  </View>

                  <View style={styles.contactInfo}>
                    <Text style={styles.label}>Phone:</Text>
                    <Text style={styles.infoText}>+1234567890</Text>
                  </View>

                  <View style={styles.contactInfo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.infoText}>admin@turfbooking.com</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVis(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

export default TurfHomeScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5, // Shadow effect
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
