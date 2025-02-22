import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const VerticalNav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Update pressed")} // Add your navigation or functionality here
      >
        <Ionicons name="pencil" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>UPDATE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Settings pressed")} // Add your navigation or functionality here
      >
        <Ionicons name="settings" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>SETTINGS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Logout pressed")} // Add your navigation or functionality here
      >
        <Ionicons name="log-out" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    padding: 20,
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0d47a1",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default VerticalNav;
