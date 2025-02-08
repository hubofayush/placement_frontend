import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ProfileStep2 = ({ navigation, route }) => {
  const { name, email } = route.params;
  const [skills, setSkills] = useState("");

  const handleNext = () => {
    navigation.navigate("ProfileStep3", { name, email, skills });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 2: Additional Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Skills"
        value={skills}
        onChangeText={setSkills}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 20 },
  button: { backgroundColor: "#1565c0", padding: 15, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});

export default ProfileStep2;
