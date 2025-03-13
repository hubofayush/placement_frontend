import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const PasswordSetup = ({ navigation, route }) => {
  const newFormData = route.params?.formData;
  // console.log(newFormData)
  const [formData, setFormData] = useState({
    ...newFormData,
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  let firstavatar = formData.profileImage;
  let finalAvatar = {};
  if (firstavatar) {
    const fileName = firstavatar.split("/").pop();
    const fileType = fileName.split(".").pop();
    // finalAvatar = {
    //   uri: firstavatar,
    //   name: fileName,
    //   type: `image/${fileType}`,
    // };

    finalAvatar.uri = firstavatar;
    finalAvatar.name = fileName;
    finalAvatar.type = `image/${fileType}`;
  }

  const handleSave = async () => {
    console.log("clicked");
    const { password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // const formDataToSend = {
    //   fName: formData.firstName,
    //   lName: formData.lastName,
    //   age: formData.age,
    //   phone: formData.mobileNumber,
    //   password: confirmPassword,
    //   dateOfBirth: formData.dateOfBirth,
    //   experience: formData.workExperience,
    //   position: formData.jobRole,
    //   salary: formData.salaryRange,
    //   employed: formData.currentlyWorking,
    //   education: formData.education,
    //   district: formData.district,
    //   division: formData.taluka,
    //   pincode: formData.pinCode,
    //   gender: formData.gender,
    // };
    const formDataToSend = new FormData();

    formDataToSend.append("fName", formData.firstName);
    formDataToSend.append("lName", formData.lastName);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("phone", formData.mobileNumber);
    formDataToSend.append("password", confirmPassword);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("experience", formData.workExperience);
    formDataToSend.append("position", formData.jobRole);
    formDataToSend.append("salary", formData.salaryRange);
    formDataToSend.append("employed", formData.currentlyWorking);
    formDataToSend.append("education", formData.education);
    formDataToSend.append("district", formData.district);
    formDataToSend.append("division", formData.taluka);
    formDataToSend.append("pincode", formData.pinCode);
    formDataToSend.append("gender", formData.gender);

    // console.log(formDataToSend);
    if (firstavatar) {
      formDataToSend.append("avatar", {
        uri: finalAvatar.uri,
        name: finalAvatar.name,
        type: finalAvatar.type,
      });
    }
    console.log(formDataToSend);
    try {
      const response = await axios.post(
        "http://192.168.78.206:4000/api/v1/emp/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        const userData = response.data.data;

        // Store data securely
        await SecureStore.setItemAsync("userData", JSON.stringify(userData));
      }
      // console.log(formDataToSend);
      Alert.alert("Success", "User Registered");
      console.log(response.data);
      console.log("status", response.status);
      navigation.navigate("AccountSuccess"); // Make sure to have this screen in your navigator
      console.log("Account created with email:");
    } catch (error) {
      console.error(
        "registration error",
        error.responce?.data || error.message
      );
      Alert.alert("Error");
    }

    // If passwords match, proceed to save the account
    // Here you can implement your API call to save the account

    // const response = await axios.post(
    //   "http://192.168.135.206:4000/api/v1/emp/register",
    //   formDataToSend,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    // Alert.alert("Success", "User Registered");
    // console.log(response.data);
    // navigation.navigate("AccountSuccess");

    // if (!response.data) {
    //   console.error("Registration error:");
    //   navigation.navigate("AccountSuccess");
    //   Alert.alert("Error", "Registration failed.");
    // }
    // Redirect to Account Created page
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
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
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
        />
        <Text style={styles.enterNumber}>Confirm Your Password</Text>
        <TextInput
          style={styles.input}
          placeholder=" Password "
          placeholderTextColor="#888"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) =>
            setFormData({ ...formData, confirmPassword: value })
          }
        />

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
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
          <Text style={styles.link}>terms and conditions b </Text>.
        </Text>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
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
