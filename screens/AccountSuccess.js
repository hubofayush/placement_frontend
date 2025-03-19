import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

const AccountSuccess = ({ navigation }) => {
  const [data, setdata] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  //
  const getUserData = async () => {
    const storedData = await SecureStore.getItemAsync("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      console.log("Retrieved Secure Data:", userData);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const storedData = await SecureStore.getItemAsync("userData");
      if (storedData) {
        const userData = JSON.parse(storedData);
        setdata(userData);
        console.log("Retrieved Secure Data:", userData);
      }
    };
    getUserData();
  }, []);
  console.log(data);

  const handleSave = () => {
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    console.log("Account created with email:", formData.email);
    navigation.navigate("Marketplace");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Blue Wave Background */}
      <View style={styles.waveBackground} />

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Ionicons name="person-circle" size={80} color="#000000" />
        </View>
        <Text style={styles.title}>{data[0].fName}</Text>
        <Text style={styles.location}>Ratnagiri </Text>

        {/* Success Message */}
        <View style={styles.successMessageContainer}>
          <View style={styles.checkmarkContainer}>
            <Ionicons name="checkmark-circle" size={64} color="white" />
          </View>
          <Text style={styles.successTitle}>Account created!</Text>
          <Text style={styles.successText}>
            You can now respond to jobs using your account as a portfolio.
          </Text>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleSave}
          >
            <Text style={styles.getStartedText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Home Indicator */}
      <View style={styles.bottomIndicator} />
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
  waveBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#0d47a1",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  profileContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  location: {
    color: "#7f7979",
    marginBottom: 20,
  },
  successMessageContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  checkmarkContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#0d47a1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  successText: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: "#0d47a1",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  getStartedText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomIndicator: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 100,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});

export default AccountSuccess;
