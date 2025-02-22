import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout Page</Text>
      <Text>This is the Logout page.</Text>
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

export default LogoutScreen;
