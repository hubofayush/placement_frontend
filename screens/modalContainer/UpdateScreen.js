import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UpdateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Page</Text>
      <Text>This is the Update page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B7E3F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UpdateScreen;
