//basic code  for profilestep1.js start//

// // import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

// const ProfileStep1 = ({ navigation, route }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleNext = () => {
//     navigation.navigate("ProfileStep2", { name, email });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step 1: Basic Information</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleNext}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 20 },
//   button: { backgroundColor: "#1565c0", padding: 15, alignItems: "center" },
//   buttonText: { color: "#fff", fontSize: 18 },
// });

// export default ProfileStep1;


//basic code  for profilestep1.js end//




//apk disign code -:

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Button, // Importing the built-in Button component
} from "react-native";
import { RadioButton } from "react-native-paper"; // You can use react-native-paper for radio buttons

export default function ProfileStep1({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    dateOfBirth: "",
    age: "",
  });

  const [errors, setErrors] = useState({}); // State for form errors

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
      // Proceed with form submission
      console.log("Form submitted:", formData);
      // Navigate to the next step or screen
      navigation.navigate("NextStep"); // Adjust the navigation as needed
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
          <Text>Male</Text>
          <RadioButton
            value="female"
            status={formData.gender === "female" ? "checked" : "unchecked"}
            onPress={() => setFormData({ ...formData, gender: "female" })}
          />
          <Text>Female</Text>
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

      <Button 
        title="NEXT"
        onPress={handleSubmit}
        color="#0d47a1" // Set button color
      />
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
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius:100,
  },
  title: {
    fontSize: 45,
    fontFamily: "RacingSansOne_Regular",
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
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
 

});
