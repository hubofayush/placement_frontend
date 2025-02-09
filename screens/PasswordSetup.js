import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordSetup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const handleSave = () => {
    const { password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // If passwords match, proceed to save the account
    // Here you can implement your API call to save the account
    console.log("Account created with email:", formData.email);
    
    // Redirect to Account Created page
    navigation.navigate("AccountSuccess"); // Make sure to have this screen in your navigator
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      
      {/* Progress Dots */}
      <View style={styles.progressDots}>
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDotActive} />
      </View>
      <Text style={styles.title}>Setup Your Password</Text>
      {/* Main Content */}
      <View style={styles.cardContainer}>

        <Text style={styles.enterNumber}>Enter Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
        />
        <Text style={styles.enterNumber}>Create Password</Text>
        <TextInput
          style={styles.input}
          placeholder=" Password "
          placeholderTextColor="#888"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => setFormData({ ...formData, password: value })}
        />
         <Text style={styles.enterNumber}>Confirm Your Password</Text>
        <TextInput
          style={styles.input}
          placeholder=" Password "
          placeholderTextColor="#888"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) => setFormData({ ...formData, confirmPassword: value })}
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}



        
      </View>
      <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setFormData({ ...formData, agreed: !formData.agreed })}
          >
            {formData.agreed && <View style={styles.checkboxChecked} />}
          </TouchableOpacity>
         

      <Text style={styles.checkboxLabel}>
            I agree to Vayun's{" "}
            <Text style={styles.link}>terms 
                and conditions b </Text>.
       </Text>
       </View>
       <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#b7e3f5",
    padding: 20,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
  statusText: {
    color: "black",
  },
  statusDots: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5 / 2,
    backgroundColor: "black",
    marginHorizontal: 2,
  },
  progressDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  progressDot: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#595959",
    marginHorizontal: 2,
  },
  progressDotActive: {
    height: 8,
    width: 30,
    borderRadius: 8 / 2,
    backgroundColor: "#595959",
    marginHorizontal: 2,
  },
  backButton: {
    padding: 10,
    backgroundColor: "transparent",
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 20,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  enterNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e4f6ff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#595959",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    width: 16,
    height: 16,
    backgroundColor: "#0d47a1",
    borderRadius: 3,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  link: {
    color: "#0d47a1",
    textDecorationLine: "underline",
  },
  saveButton: {
    backgroundColor: "#0d47a1",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default PasswordSetup;
