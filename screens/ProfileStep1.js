import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity, // Importing TouchableOpacity for custom button
} from "react-native";
import { RadioButton } from "react-native-paper";

export default function ProfileStep1({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    dateOfBirth: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (formData.age && isNaN(formData.age)) newErrors.age = "Age must be a number.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      navigation.navigate("ProfileStep2");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>Setup your profile</Text>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/profile_icon.png")} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={formData.firstName}
          onChangeText={(text) => setFormData({ ...formData, firstName: text })}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={formData.lastName}
          onChangeText={(text) => setFormData({ ...formData, lastName: text })}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="male"
            status={formData.gender === "male" ? "checked" : "unchecked"}
            onPress={() => setFormData({ ...formData, gender: "male" })}
          />
          <Text>Male </Text>
          <RadioButton
            value="female"
            status={formData.gender === "female" ? "checked" : "unchecked"}
            onPress={() => setFormData({ ...formData, gender: "female" })}
          />
          <Text>Female </Text>
        </View>

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={formData.dateOfBirth}
          onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
        />

        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(text) => setFormData({ ...formData, age: text })}
        />
        {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#B7E3F5",
  },
  header: {
    alignItems: "center",
    marginBottom: 5,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 5,
  },
  formContainer: {
    backgroundColor: "#E4F6FF",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1565c0",
    paddingVertical: 7,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
