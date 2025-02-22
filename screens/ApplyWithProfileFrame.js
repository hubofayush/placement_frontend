import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ApplyWithProfileFrame = ({ navigation }) => {
  const [coverLetter, setCoverLetter] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleApply = () => {
    // Handle the apply action (e.g., submit the cover letter)
    console.log("Applying with cover letter:", coverLetter);
    setModalVisible(true); // Show the confirmation modal

    // Redirect to JobDetails after 5 seconds
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate("JobDetails"); // Navigate to JobDetails page
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle-outline" size={64} color="#A0AEC0" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Pundalik Desai</Text>
          <Text style={styles.profileRole}>Vayun Profile</Text>
        </View>
      </View>

      <Text style={styles.coverLetterTitle}>Cover Letter</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Write briefly about your motivation for this job"
        multiline
        numberOfLines={6}
        value={coverLetter}
        onChangeText={setCoverLetter}
      />

      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyButtonText}>APPLY JOB</Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="#A0AEC0" />
              <Text style={styles.srOnly}>Close</Text>
            </TouchableOpacity>
            <View style={styles.successIconContainer}>
              <Ionicons name="checkmark-circle" size={64} color="#0D47A1" />
            </View>
            <Text style={styles.modalTitle}>Your CV has been sent!</Text>
            <Text style={styles.modalMessage}>
              Your application has been submitted, and we will review it as soon as possible.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B7E3F5",
    padding: 16,
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D1B20",
  },
  profileRole: {
    fontSize: 18,
    color: "#1D1B20",
  },
  coverLetterTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D1B20",
    marginBottom: 8,
  },
  textArea: {
    minHeight: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#A7FFEB",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 24,
  },
  applyButton: {
    backgroundColor: "#0D47A1",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  srOnly: {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    border: 0,
  },
  successIconContainer: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D1B20",
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 16,
    color: "#1D1B20",
    textAlign: "center",
  },
});

export default ApplyWithProfileFrame;
