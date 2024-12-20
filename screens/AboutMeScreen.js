import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>О Себе</Text>
      <Text>Привет! Меня зовут Сана.</Text>
      <Text>Я изучаю React Native и Expo.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default AboutMeScreen;