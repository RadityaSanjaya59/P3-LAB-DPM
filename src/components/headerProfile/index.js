import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderProfile = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Teknik Informatika</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#6200ea',
    height: 100, 
    justifyContent: 'flex-end', 
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default HeaderProfile;
