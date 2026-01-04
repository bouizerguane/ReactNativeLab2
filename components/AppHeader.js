import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First React Native App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E4A59',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default AppHeader;
