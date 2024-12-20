import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text>Страница не найдена</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default NotFoundScreen;