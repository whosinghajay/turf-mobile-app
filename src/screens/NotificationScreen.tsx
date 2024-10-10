import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

const NotificationScreen = () => {
  const notifications = [
    { id: 1, name: 'Turf Name', time: '13:09', status: 'Booking Confirm' },
    { id: 2, name: 'Turf Name', time: '14:15', status: 'Booking Confirm' },
    { id: 3, name: 'Turf Name', time: '15:30', status: 'Booking Confirm' },
    { id: 4, name: 'Turf Name', time: '16:45', status: 'Booking Confirm' },
    { id: 5, name: 'Turf Name', time: '17:00', status: 'Booking Confirm' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView style={styles.scrollContainer}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationCard}>
            <View style={styles.notificationContent}>
              <Image
                source={require('../assests/backgroundImage/bgImage.png')}
                style={styles.image}
              />
              <View>
                <Text style={styles.turfName}>{notification.name}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </View>
            <Text style={styles.status}>{notification.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  turfName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationTime: {
    fontSize: 14,
    color: '#777',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#28a745',
  },
});

export default NotificationScreen;

