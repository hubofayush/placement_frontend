import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const ApplyWithResumeFrame = ({ navigation }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // const handleResumeUpload = async () => {
  //   const result = await DocumentPicker.getDocumentAsync({
  //     type: "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  //   });

  //   if (result.type === "success") {
  //     setResumeFile(result);
  //   } else {
  //     Alert.alert("Error", "Failed to upload resume.");
  //   }
  // };

  const handleResumeUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
      });

      console.log("Picked file result:", result);

      if (result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setResumeFile(file);
      } else {
        Alert.alert("Error", "No file selected.");
      }
    } catch (error) {
      console.error("DocumentPicker Error:", error);
      Alert.alert("Error", "An error occurred while picking the file.");
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ resumeFile, coverLetter });
    setModalVisible(true); // Show the confirmation modal

    // Redirect to JobDetails after 1 second
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate("JobDetails"); // Navigate to JobDetails page
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resume</Text>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={handleResumeUpload}
      >
        <Ionicons name="cloud-upload-outline" size={24} color="white" />
        <Text style={styles.uploadButtonText}>
          {resumeFile ? resumeFile.name : "Upload Resume"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cover Letter</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Write briefly about your motivation for this job"
        value={coverLetter}
        onChangeText={setCoverLetter}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>APPLY JOB</Text>
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
            <Text style={styles.modalTitle}>
              Your application has been submitted!
            </Text>
            <Text style={styles.modalMessage}>
              Your application has been submitted, and we will review it as soon
              as possible.
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
    backgroundColor: "#E4F6FF",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D47A1",
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  textarea: {
    minHeight: 100,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  submitButton: {
    backgroundColor: "#0D47A1",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
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

export default ApplyWithResumeFrame;
