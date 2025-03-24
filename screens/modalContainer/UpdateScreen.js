import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as SecureStore from "expo-secure-store";

const UpdateScreen = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const token = await SecureStore.getItemAsync("AccessToken");

      const response = await fetch(
        "http://192.168.250.1:4000/api/v1/emp/getUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser(data?.data);
        setName(data?.data?.fName);
        setLastName(data?.data?.lName);
      } else {
        Alert.alert("Error", data?.message || "Failed to fetch user data.");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    if (!name || !lastName) {
      Alert.alert("Error", "First name and last name are required.");
      return;
    }

    try {
      setUpdating(true);
      const token = await SecureStore.getItemAsync("AccessToken");

      const response = await fetch(
        "http://192.168.250.1:4000/api/v1/emp/updateUser",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, lastName }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Profile updated successfully!");
        setUser(data?.data);
        setName(data?.data?.fName);
        setLastName(data?.data?.lName);
      } else {
        Alert.alert("Error", data?.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong.");
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0d47a1" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Update Profile</Text>

      <View style={styles.formCard}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.readOnlyText}>{user?.phone}</Text>

        <Text style={styles.label}>Age</Text>
        <Text style={styles.readOnlyText}>{user?.age}</Text>

        <Text style={styles.label}>Date of Birth</Text>
        <Text style={styles.readOnlyText}>
          {new Date(user?.dateOfBirth).toLocaleDateString()}
        </Text>

        <Text style={styles.label}>Education</Text>
        <Text style={styles.readOnlyText}>{user?.education}</Text>

        <Text style={styles.label}>Experience</Text>
        <Text style={styles.readOnlyText}>{user?.experienceYears}</Text>

        <TouchableOpacity
          style={[styles.button, updating && { backgroundColor: "#9ec4ff" }]}
          onPress={handleUpdateProfile}
          disabled={updating}
        >
          {updating ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>UPDATE PROFILE</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B7E3F5",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#B7E3F5",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    color: "#000",
    fontFamily: "poppinsmedium",
  },
  formCard: {
    backgroundColor: "#E4F6FF",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    color: "#000",
  },
  readOnlyText: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#0d47a1",
    paddingVertical: 14,
    marginTop: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "poppinssemibold",
  },
});

export default UpdateScreen;
