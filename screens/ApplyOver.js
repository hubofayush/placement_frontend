import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ApplyOver = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for Job</Text>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate("ApplyWithProfileFrame")}
      >
        <Text style={styles.applyButtonText}>Apply with Vayun Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate("ApplyWithResumeFrame")}
      >
        <Text style={styles.applyButtonText}>Upload Your Resume</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#B7E3F5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "poppinsmedium",
  },
  applyButton: {
    backgroundColor: "#1565c0",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "poppinssemibold",
  },
});

export default ApplyOver;
