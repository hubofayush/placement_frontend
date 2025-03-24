//

// SettingsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

const SettingsScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChangePassword = async () => {
    if (!password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const accessToken = await SecureStore.getItemAsync("AccessToken");
      const response = await fetch(
        "http://192.168.250.1:4000/api/v1/emp/updatePassword",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            // Add Authorization header if required
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ password }),
          // credentials: "include", // required if you're using cookies for auth
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Password changed successfully!");
        setPassword("");
        setConfirmPassword("");
      } else {
        Alert.alert("Error", data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <View style={styles.cardContainer}>
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePassword} style={styles.iconButton}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#585b5d"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm New Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={toggleConfirmPassword}
            style={styles.iconButton}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#585b5d"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && { backgroundColor: "#9ec4ff" }]}
          onPress={handleChangePassword}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B7E3F5",
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 25,
    color: "black",
    fontFamily: "poppinsmedium",
  },
  cardContainer: {
    backgroundColor: "#E4F6FF",
    padding: 20,
    borderRadius: 25,
    width: "100%",
    maxWidth: 400,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.2,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#e4f6ff",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#0d47a1",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "poppinssemibold",
  },
});

export default SettingsScreen;
