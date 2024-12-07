import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LifeCycleComponent = () => {
  useEffect(() => {
    console.log('Component Mounted');
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text> Dimas Raditya Sanjaya</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default LifeCycleComponent;
