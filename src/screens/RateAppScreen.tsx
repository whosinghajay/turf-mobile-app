import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { default as LeftArrowIcon } from 'react-native-vector-icons/AntDesign';

const RateApp = () => {
  const navigation = useNavigation<any>();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log(`Rating: ${rating}, Feedback: ${feedback}`);
    setRating(0);
    setFeedback('');
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'#EFEFEF'}>
          <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
        </TouchableHighlight>
        <Text style={styles.headerTitle}>Rate Our App</Text>
      </View>

      {/* Rating Form */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>We Value Your Feedback!</Text>
        
        <Text style={styles.subtitle}>Please rate your experience:</Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableHighlight
              key={star}
              onPress={() => setRating(star)}
              underlayColor="#EFEFEF"
              style={styles.star}
            >
              <Text style={[styles.starText, star <= rating && styles.activeStar]}>
                {star <= rating ? '★' : '☆'}
              </Text>
            </TouchableHighlight>
          ))}
        </View>

        <Text style={styles.subtitle}>Additional Feedback:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Write your feedback here..."
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={4}
          textAlignVertical="top" 
        />
        
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  star: {
    padding: 5,
  },
  starText: {
    fontSize: 40,
    color: '#ccc',
  },
  activeStar: {
    color: '#28a745',
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RateApp;
