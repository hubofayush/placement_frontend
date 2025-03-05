import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const CompanySetup1 = ({ navigation }) => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (companyName && email) {
      // Handle submission logic here
      console.log("Company Name:", companyName);
      console.log("Email:", email);
      // Navigate to the next screen or make an API call
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Navigation */}
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.indicator}>
          <View style={styles.activeIndicator} />
          <View style={styles.inactiveIndicator} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Setup your profile</Text>

        {/* Profile Image Placeholder */}
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Ionicons name="add" size={32} color="white" />
          </View>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Company Name</Text>
            <TextInput
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="Enter company name"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity 
            style={styles.addLocationButton} 
            onPress={() => navigation.navigate("CompanySetup2")} // Navigate to CompanySetup2
          >
            <Text style={styles.addLocationText}>Add Location</Text>
          </TouchableOpacity>

          {/* Submit Button
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Bottom Indicator */}
      <View style={styles.bottomIndicator}>
        <View style={styles.indicatorBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b7e3f5",
    padding: 16,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#222222",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the indicators
    flex: 1, // Allow it to take available space
  },
  activeIndicator: {
    width: 32,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#585b5d",
    marginRight: 4,
  },
  inactiveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#a19e9e",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 16,
  },
  profileImageContainer: {
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#0d47a1",
    marginBottom: 32,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#0d47a1",
    justifyContent: "center",
    alignItems: "center",
  },
  formCard: {
    width: "100%",
    backgroundColor: "#e4f6ff",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: "#222222",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
  },
  addLocationButton: {
    backgroundColor: "#0d47a1",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  addLocationText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#0d47a1",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 16,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomIndicator: {
    justifyContent: "center",
    alignItems: "center", // Center the bottom indicator
    marginBottom: 16,
  },
  indicatorBar: {
    width: 64,
    height: 4,
    backgroundColor: "#585b5d",
    borderRadius: 2,
  },
});

export default CompanySetup1;
