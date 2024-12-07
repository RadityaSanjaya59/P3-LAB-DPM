import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderProfile from '../../components/headerProfile';
import NavBarProfile from '../../components/navBarProfile';
import LifeCycleComponent from '../../components/lifeCycle';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <LifeCycleComponent />
      <NavBarProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfilePage;
