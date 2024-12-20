import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageCard = ({ title, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.experience}>Опыт: {experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: '#888',
  },
});

export default LanguageCard;