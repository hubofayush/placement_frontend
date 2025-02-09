import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Picker } from '@react-native-picker/picker'; // For dropdowns
import { Switch } from "react-native-paper"; // For toggle switch
import { Ionicons } from "@expo/vector-icons"; // For back arrow icon

export default function ProfileStep2({ navigation }) {
  const [formData, setFormData] = useState({
    education: "",
    workExperience: "",
    jobRole: "",
    salaryRange: "",
    currentlyWorking: false,
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Navigate to the next step or screen
    navigation.navigate("ProfileStep3"); // Adjust the navigation as needed
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.dotContainer}>
          
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
      </View>

      <Text style={styles.title}>Profile Step 2</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Education</Text>
        <Picker
          selectedValue={formData.education}
          style={styles.picker}
          onValueChange={(itemValue) => setFormData({ ...formData, education: itemValue })}
        >
          <Picker.Item label="Select education" value="" />
          <Picker.Item label="SSC" value="SSC" />
          <Picker.Item label="HSC" value="HSC" />
          <Picker.Item label="ITI" value="ITI" />
          <Picker.Item label="Diploma" value="Diploma" />
          <Picker.Item label="Bachelor's Degree" value="bachelors" />
          <Picker.Item label="Master's Degree" value="masters" />
          
        </Picker>

        <Text style={styles.label}>Work Experience</Text>
        <Picker
          selectedValue={formData.workExperience}
          style={styles.picker}
          onValueChange={(itemValue) => setFormData({ ...formData, workExperience: itemValue })}
        >
          <Picker.Item label="Select experience" value="" />
          <Picker.Item label="Freshers" value="0" />
          <Picker.Item label="Less than 1 year" value="0-1" />
          <Picker.Item label="0-2 years" value="0-2" />
          <Picker.Item label="2-5 years" value="2-5" />
          <Picker.Item label="5+ years" value="5+" />
        </Picker>

        <Text style={styles.label}>Current/Last Job Role</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your job role"
          value={formData.jobRole}
          onChangeText={(text) => setFormData({ ...formData, jobRole: text })}
        />

        <Text style={styles.label}>Salary Range</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your salary range"
          value={formData.salaryRange}
          onChangeText={(text) => setFormData({ ...formData, salaryRange: text })}
        />

        <View style={styles.toggleContainer}>
          <Text style={styles.label}>I am currently working here</Text>
          <Switch
            value={formData.currentlyWorking}
            onValueChange={() => setFormData({ ...formData, currentlyWorking: !formData.currentlyWorking })}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
             <Text style={styles.buttonText}>NEXT </Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#1565c0",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#273b4a",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#273b4a",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
  },
});
