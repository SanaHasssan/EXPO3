import React, { useState } from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import LanguageCard from './LanguageCard';

const languages = [
  {
    title: 'JavaScript',
    experience: '2 years',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  },
  {
    title: 'Python',
    experience: '3 years',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
  },
  {
    title: 'Java',
    experience: '1 year',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
  },
];

const ProgrammingLanguagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false); 


  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
    
      console.log('Data refreshed!');
      setRefreshing(false); 
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <LanguageCard title={item.title} experience={item.experience} logo={item.logo} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} 
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});

export default ProgrammingLanguagesScreen;