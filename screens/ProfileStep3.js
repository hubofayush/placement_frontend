import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileStep3 = ({ navigation, route }) => {
  const { name, email, skills } = route.params;

  const handleFinish = () => {
    // Handle the final submission of the profile
    console.log("Profile Completed:", { name, email, skills });
    navigation.navigate("Login"); // Navigate to Login or another screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 3: Review Your Information</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Skills: {skills}</Text>
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: "#1565c0", padding: 15, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});

export default ProfileStep3;
