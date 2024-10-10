import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {default as LeftArrowIcon} from 'react-native-vector-icons/AntDesign';

const PrivacyPolicy = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      {/* header */}
      <View className="flex-row justify-between my-4 mx-4">
        <View className="flex-row gap-2 items-center">
          <TouchableHighlight
            onPress={() => navigation.goBack()}
            underlayColor={'#EFEFEF'}>
            <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
          </TouchableHighlight>
          <Text className="text-black text-[18px] font-semibold">Policies</Text>
        </View>
      </View>

      {/* Policy Data */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.content}>
          At <Text className="font-bold text-red-600">Crease Crown</Text>, we
          are committed to protecting your privacy. This Privacy Policy outlines
          how we collect, use, and safeguard your information when you use our
          turf booking app.
        </Text>

        <Text style={styles.subtitle}>Information We Collect</Text>
        <Text style={styles.content}>
          We may collect the following types of information:
          {'\n'}- Personal Information: This includes your name, email address,
          phone number, and payment information.
          {'\n'}- Usage Data: Information about how you use our app, including
          your booking history and preferences.
          {'\n'}- Location Data: If you allow us, we may collect information
          about your location to help you find nearby turf facilities.
        </Text>

        <Text style={styles.subtitle}>How We Use Your Information</Text>
        <Text style={styles.content}>
          We use your information for the following purposes:
          {'\n'}- To process your bookings and manage your account.
          {'\n'}- To communicate with you about your bookings, promotions, and
          updates.
          {'\n'}- To improve our app and services based on user feedback.
          {'\n'}- To comply with legal obligations.
        </Text>

        <Text style={styles.subtitle}>Data Sharing</Text>
        <Text style={styles.content}>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
          {'\n'}- Service providers who assist us in operating our app and
          delivering services.
          {'\n'}- Law enforcement or regulatory authorities if required by law.
        </Text>

        <Text style={styles.subtitle}>User Rights</Text>
        <Text style={styles.content}>
          You have the right to:
          {'\n'}- Access and update your personal information.
          {'\n'}- Request the deletion of your personal information.
          {'\n'}- Opt-out of marketing communications.
        </Text>

        <Text style={styles.subtitle}>Security</Text>
        <Text style={styles.content}>
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, or misuse. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </Text>

        <Text style={styles.subtitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.content}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy in our app. You are
          advised to review this Privacy Policy periodically for any changes.
        </Text>

        <Text style={styles.subtitle}>Contact Us</Text>
        <Text style={styles.content}>
          If you have any questions about this Privacy Policy, please contact us
          at <Text className="font-bold underline">creasecrown@somemail.com</Text>.
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default PrivacyPolicy;
