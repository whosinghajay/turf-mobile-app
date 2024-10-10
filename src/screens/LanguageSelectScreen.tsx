import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { default as LeftArrowIcon } from 'react-native-vector-icons/AntDesign';

// Define a type for the language
interface Language {
  code: string;
  name: string;
}

const LanguageSelection: React.FC = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  const languages: Language[] = [
    { code: 'hi', name: 'Hindi' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'kn', name: 'Kannada' },
    { code: 'ur', name: 'Urdu' },
    { code: 'en', name: 'English' },
    { code: 'bn', name: 'Bengali' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'or', name: 'Odia' },
    { code: 'as', name: 'Assamese' },
    { code: 'bh', name: 'Bhojpuri' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'ks', name: 'Kashmiri' },
    { code: 'sd', name: 'Sindhi' },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    // Add logic to change the app language here
    console.log(`Selected Language: ${language}`);
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <LeftArrowIcon name="arrowleft" size={23} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Language</Text>
      </View>

      {/* Language Options */}
      <ScrollView contentContainerStyle={styles.container}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.code}
            style={[
              styles.languageButton,
              selectedLanguage === language.name && styles.selectedLanguage,
            ]}
            onPress={() => handleLanguageSelect(language.name)}
          >
            <Text style={styles.languageText}>{language.name}</Text>
          </TouchableOpacity>
        ))}
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
  backButton: {
    padding: 10,
  },
  container: {
    padding: 20,
  },
  languageButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
  },
  selectedLanguage: {
    backgroundColor: '#28a745', // Highlight color for selected language
  },
  languageText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
});

export default LanguageSelection;
