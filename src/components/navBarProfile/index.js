import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBarProfile = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>Universitas Islam Riau</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    padding: 15,
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default NavBarProfile;
