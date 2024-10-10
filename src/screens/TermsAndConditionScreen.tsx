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

const TermsAndCondition = () => {
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
          <Text className="text-black text-[18px] font-semibold">
            Terms And Condition
          </Text>
        </View>
      </View>

      {/* Terms and Condition Data */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.content}>
          Welcome to{' '}
          <Text style={{fontWeight: 'bold', color: 'red'}}>Crease Crown</Text>.
          By accessing or using our turf booking app, you agree to comply with
          and be bound by these Terms and Conditions. If you do not agree with
          any part of these terms, please do not use our app.
        </Text>

        <Text style={styles.subtitle}>1. Use of the App</Text>
        <Text style={styles.content}>
          You agree to use the app only for lawful purposes and in a manner that
          does not infringe the rights of, restrict or inhibit anyone else's use
          of the app. Prohibited behavior includes, but is not limited to,
          harassment, threatening behavior, and violation of privacy.
        </Text>

        <Text style={styles.subtitle}>2. Booking and Payment</Text>
        <Text style={styles.content}>
          All bookings made through our app are subject to availability. You
          agree to provide accurate payment information and to pay all
          applicable fees. All transactions are processed securely.
        </Text>

        <Text style={styles.subtitle}>3. Cancellation Policy</Text>
        <Text style={styles.content}>
          Cancellations must be made at least [X hours/days] in advance to
          receive a full refund. Late cancellations may incur a fee.
        </Text>

        <Text style={styles.subtitle}>4. User Responsibilities</Text>
        <Text style={styles.content}>
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your device. You
          agree to accept responsibility for all activities that occur under
          your account.
        </Text>

        <Text style={styles.subtitle}>5. Limitation of Liability</Text>
        <Text style={styles.content}>
          To the fullest extent permitted by law, Crease Crown shall not be
          liable for any direct, indirect, incidental, special, consequential,
          or punitive damages arising out of or related to your use of the app.
        </Text>

        <Text style={styles.subtitle}>6. Changes to Terms</Text>
        <Text style={styles.content}>
          We reserve the right to modify these Terms and Conditions at any time.
          Any changes will be effective immediately upon posting in the app.
          Your continued use of the app following the posting of changes
          constitutes your acceptance of such changes.
        </Text>

        <Text style={styles.subtitle}>7. Governing Law</Text>
        <Text style={styles.content}>
          These Terms and Conditions are governed by the laws of [Your
          Country/State]. Any disputes arising from these terms will be resolved
          in the courts of [Your Jurisdiction].
        </Text>

        <Text style={styles.subtitle}>Contact Us</Text>
        <Text style={styles.content}>
          If you have any questions about these Terms and Conditions, please
          contact us at{' '}
          <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
            creasecrown@somemail.com
          </Text>
          .
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

export default TermsAndCondition;
