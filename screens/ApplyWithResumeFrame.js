// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// //   Alert,
// //   Modal,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import * as DocumentPicker from "expo-document-picker";
// // import axios from "axios";
// // import * as SecureStore from "expo-secure-store";
// // const ApplyWithResumeFrame = ({ navigation, route }) => {
// //   const [resumeFile, setResumeFile] = useState(null);
// //   const [coverLetter, setCoverLetter] = useState("");
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [application, setApplication] = useState(null);
// //   const { job } = route.params;

// //   // const handleResumeUpload = async () => {
// //   //   const result = await DocumentPicker.getDocumentAsync({
// //   //     type: "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// //   //   });

// //   //   if (result.type === "success") {
// //   //     setResumeFile(result);
// //   //   } else {
// //   //     Alert.alert("Error", "Failed to upload resume.");
// //   //   }
// //   // };

// //   const handleResumeUpload = async () => {
// //     try {
// //       const result = await DocumentPicker.getDocumentAsync({
// //         type: [
// //           "application/pdf",
// //           "application/msword",
// //           "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// //         ],
// //       });

// //       console.log("Picked file result:", result);

// //       if (result.assets && result.assets.length > 0) {
// //         const file = result.assets[0];
// //         setResumeFile(file);
// //       } else {
// //         Alert.alert("Error", "No file selected.");
// //       }
// //     } catch (error) {
// //       console.error("DocumentPicker Error:", error);
// //       Alert.alert("Error", "An error occurred while picking the file.");
// //     }
// //   };

// //   const handleSubmit = async () => {
// //     const accessToken = await SecureStore.getItemAsync("AccessToken");
// //     // Handle form submission here
// //     console.log({ resumeFile, coverLetter });

// //     try {
// //       console.log("object");
// //       const response = await axios.post(
// //         `http://192.168.1.11:4000/api/v1/emp/job/${job._id}`,
// //         {
// //           bid: coverLetter,
// //           pdfFile: {
// //             uri: resumeFile.uri,
// //             name: resumeFile.name,
// //             type: resumeFile.mimeType,
// //           },
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         }
// //       );
// //       console.log("Fetched Job Details Response:", response.data); // Log the API response
// //       setApplication(response.data);
// //       console.log(application); // Store the fetched data
// //       setModalVisible(true); // Show the confirmation modal
// //     } catch (error) {
// //       console.error("Error fetching job details:", error);
// //       if (error.response) {
// //         console.error("Error response:", error.response.data);
// //       }
// //     }

// //     // Redirect to JobDetails after 1 second
// //     // setTimeout(() => {
// //     //   setModalVisible(false);
// //     //   navigation.navigate("JobDetails"); // Navigate to JobDetails page
// //     // }, 1000);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Resume</Text>
// //       <TouchableOpacity
// //         style={styles.uploadButton}
// //         onPress={handleResumeUpload}
// //       >
// //         <Ionicons name="cloud-upload-outline" size={24} color="white" />
// //         <Text style={styles.uploadButtonText}>
// //           {resumeFile ? resumeFile.name : "Upload Resume"}
// //         </Text>
// //       </TouchableOpacity>

// //       <Text style={styles.title}>Cover Letter</Text>
// //       <TextInput
// //         style={styles.textarea}
// //         placeholder="Write briefly about your motivation for this job"
// //         value={coverLetter}
// //         onChangeText={setCoverLetter}
// //         multiline
// //         numberOfLines={6}
// //       />

// //       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
// //         <Text style={styles.submitButtonText}>APPLY JOB</Text>
// //       </TouchableOpacity>

// //       {/* Confirmation Modal */}
// //       <Modal
// //         transparent={true}
// //         animationType="fade"
// //         visible={modalVisible}
// //         onRequestClose={() => setModalVisible(false)}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContainer}>
// //             <TouchableOpacity
// //               style={styles.closeButton}
// //               onPress={() => setModalVisible(false)}
// //             >
// //               <Ionicons name="close" size={24} color="#A0AEC0" />
// //               <Text style={styles.srOnly}>Close</Text>
// //             </TouchableOpacity>
// //             <View style={styles.successIconContainer}>
// //               <Ionicons name="checkmark-circle" size={64} color="#0D47A1" />
// //             </View>
// //             <Text style={styles.modalTitle}>
// //               Your application has been submitted!
// //             </Text>
// //             <Text style={styles.modalMessage}>
// //               Your application has been submitted, and we will review it as soon
// //               as possible.
// //             </Text>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#E4F6FF",
// //     padding: 20,
// //     justifyContent: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#000",
// //     marginBottom: 10,
// //   },
// //   uploadButton: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "#0D47A1",
// //     padding: 15,
// //     borderRadius: 25,
// //     marginBottom: 20,
// //   },
// //   uploadButtonText: {
// //     color: "white",
// //     fontSize: 18,
// //     marginLeft: 10,
// //   },
// //   textarea: {
// //     minHeight: 100,
// //     backgroundColor: "white",
// //     borderRadius: 15,
// //     padding: 15,
// //     marginBottom: 20,
// //     borderWidth: 1,
// //     borderColor: "#ddd",
// //   },
// //   submitButton: {
// //     backgroundColor: "#0D47A1",
// //     padding: 15,
// //     borderRadius: 25,
// //     alignItems: "center",
// //   },
// //   submitButtonText: {
// //     color: "white",
// //     fontSize: 18,
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   modalContainer: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 20,
// //     padding: 20,
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOpacity: 0.1,
// //     shadowRadius: 10,
// //     elevation: 5,
// //   },
// //   closeButton: {
// //     position: "absolute",
// //     right: 10,
// //     top: 10,
// //   },
// //   srOnly: {
// //     position: "absolute",
// //     width: 1,
// //     height: 1,
// //     margin: -1,
// //     padding: 0,
// //     overflow: "hidden",
// //     clip: "rect(0, 0, 0, 0)",
// //     border: 0,
// //   },
// //   successIconContainer: {
// //     marginBottom: 16,
// //   },
// //   modalTitle: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#1D1B20",
// //     marginBottom: 8,
// //   },
// //   modalMessage: {
// //     fontSize: 16,
// //     color: "#1D1B20",
// //     textAlign: "center",
// //   },
// // });

// // export default ApplyWithResumeFrame;

// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// //   Alert,
// //   Modal,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import * as DocumentPicker from "expo-document-picker";
// // import * as FileSystem from "expo-file-system"; // Import for Base64 conversion
// // import axios from "axios";
// // import * as SecureStore from "expo-secure-store";

// // const ApplyWithResumeFrame = ({ navigation, route }) => {
// //   const [resumeFile, setResumeFile] = useState(null);
// //   const [coverLetter, setCoverLetter] = useState("");
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [application, setApplication] = useState(null);
// //   const { job } = route.params;

// //   const handleResumeUpload = async () => {
// //     try {
// //       const result = await DocumentPicker.getDocumentAsync({
// //         type: [
// //           "application/pdf",
// //           "application/msword",
// //           "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// //         ],
// //       });

// //       console.log("Picked file result:", result);

// //       if (result.assets && result.assets.length > 0) {
// //         const file = result.assets[0];
// //         setResumeFile(file);
// //       } else {
// //         Alert.alert("Error", "No file selected.");
// //       }
// //     } catch (error) {
// //       console.error("DocumentPicker Error:", error);
// //       Alert.alert("Error", "An error occurred while picking the file.");
// //     }
// //   };

// //   const handleSubmit = async () => {
// //     if (!resumeFile) {
// //       Alert.alert("Error", "Please upload a resume before submitting.");
// //       return;
// //     }

// //     const accessToken = await SecureStore.getItemAsync("AccessToken"); // Consistent key
// //     if (!accessToken) {
// //       Alert.alert("Error", "No access token found. Please log in again.");
// //       return;
// //     }

// //     try {
// //       // Read the file and convert to Base64
// //       const fileContent = await FileSystem.readAsStringAsync(resumeFile.uri, {
// //         encoding: FileSystem.EncodingType.Base64,
// //       });

// //       const payload = {
// //         bid: coverLetter, // Cover letter
// //         pdfFile: fileContent, // Base64-encoded file content
// //         fileName: resumeFile.name, // Optional: send file name separately
// //         fileType: resumeFile.mimeType, // Optional: send mime type
// //       };

// //       console.log("Submitting application for job ID:", job._id);
// //       console.log("Payload preview:", {
// //         bid: payload.bid,
// //         fileName: payload.fileName,
// //         fileType: payload.fileType,
// //         pdfFile: payload.pdfFile.substring(0, 100) + "...", // Log partial Base64 for brevity
// //       });

// //       const response = await axios.post(
// //         `http://192.168.1.11:4000/api/v1/emp/job/${job._id}`,
// //         payload,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //             "Content-Type": "application/json", // Use JSON since we're sending Base64
// //           },
// //         }
// //       );

// //       console.log("Application Submission Response:", response.data);
// //       setApplication(response.data);
// //       setModalVisible(true);

// //       // Navigate back to JobDetails after a delay
// //       setTimeout(() => {
// //         setModalVisible(false);
// //         navigation.navigate("JobDetails", { job });
// //       }, 2000);
// //     } catch (error) {
// //       console.error("Error submitting application:", error);
// //       if (error.response) {
// //         console.error("Error response:", error.response.data);
// //         Alert.alert(
// //           "Error",
// //           error.response.data.message || "Submission failed."
// //         );
// //       } else if (error.request) {
// //         Alert.alert("Error", "No response from server. Check your connection.");
// //       } else {
// //         Alert.alert("Error", "An error occurred during submission.");
// //       }
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Resume</Text>
// //       <TouchableOpacity
// //         style={styles.uploadButton}
// //         onPress={handleResumeUpload}
// //       >
// //         <Ionicons name="cloud-upload-outline" size={24} color="white" />
// //         <Text style={styles.uploadButtonText}>
// //           {resumeFile ? resumeFile.name : "Upload Resume"}
// //         </Text>
// //       </TouchableOpacity>

// //       <Text style={styles.title}>Cover Letter</Text>
// //       <TextInput
// //         style={styles.textarea}
// //         placeholder="Write briefly about your motivation for this job"
// //         value={coverLetter}
// //         onChangeText={setCoverLetter}
// //         multiline
// //         numberOfLines={6}
// //       />

// //       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
// //         <Text style={styles.submitButtonText}>APPLY JOB</Text>
// //       </TouchableOpacity>

// //       {/* Confirmation Modal */}
// //       <Modal
// //         transparent={true}
// //         animationType="fade"
// //         visible={modalVisible}
// //         onRequestClose={() => setModalVisible(false)}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContainer}>
// //             <TouchableOpacity
// //               style={styles.closeButton}
// //               onPress={() => setModalVisible(false)}
// //             >
// //               <Ionicons name="close" size={24} color="#A0AEC0" />
// //               <Text style={styles.srOnly}>Close</Text>
// //             </TouchableOpacity>
// //             <View style={styles.successIconContainer}>
// //               <Ionicons name="checkmark-circle" size={64} color="#0D47A1" />
// //             </View>
// //             <Text style={styles.modalTitle}>
// //               Your application has been submitted!
// //             </Text>
// //             <Text style={styles.modalMessage}>
// //               Your application has been submitted, and we will review it as soon
// //               as possible.
// //             </Text>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#E4F6FF",
// //     padding: 20,
// //     justifyContent: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#000",
// //     marginBottom: 10,
// //   },
// //   uploadButton: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "#0D47A1",
// //     padding: 15,
// //     borderRadius: 25,
// //     marginBottom: 20,
// //   },
// //   uploadButtonText: {
// //     color: "white",
// //     fontSize: 18,
// //     marginLeft: 10,
// //   },
// //   textarea: {
// //     minHeight: 100,
// //     backgroundColor: "white",
// //     borderRadius: 15,
// //     padding: 15,
// //     marginBottom: 20,
// //     borderWidth: 1,
// //     borderColor: "#ddd",
// //   },
// //   submitButton: {
// //     backgroundColor: "#0D47A1",
// //     padding: 15,
// //     borderRadius: 25,
// //     alignItems: "center",
// //   },
// //   submitButtonText: {
// //     color: "white",
// //     fontSize: 18,
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   modalContainer: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 20,
// //     padding: 20,
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOpacity: 0.1,
// //     shadowRadius: 10,
// //     elevation: 5,
// //   },
// //   closeButton: {
// //     position: "absolute",
// //     right: 10,
// //     top: 10,
// //   },
// //   srOnly: {
// //     position: "absolute",
// //     width: 1,
// //     height: 1,
// //     margin: -1,
// //     padding: 0,
// //     overflow: "hidden",
// //     clip: "rect(0, 0, 0, 0)",
// //     border: 0,
// //   },
// //   successIconContainer: {
// //     marginBottom: 16,
// //   },
// //   modalTitle: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#1D1B20",
// //     marginBottom: 8,
// //   },
// //   modalMessage: {
// //     fontSize: 16,
// //     color: "#1D1B20",
// //     textAlign: "center",
// //   },
// // });

// // export default ApplyWithResumeFrame;
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   Modal,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import * as DocumentPicker from "expo-document-picker";
// import axios from "axios";
// import * as SecureStore from "expo-secure-store";

// const ApplyWithResumeFrame = ({ navigation, route }) => {
//   const [resumeFile, setResumeFile] = useState(null);
//   const [coverLetter, setCoverLetter] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [application, setApplication] = useState(null);
//   const { job } = route.params;

//   const handleResumeUpload = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: [
//           "application/pdf",
//           "application/msword",
//           "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//         ],
//       });

//       console.log("Picked file result:", result);

//       if (result.assets && result.assets.length > 0) {
//         const file = result.assets[0];
//         setResumeFile(file);
//       } else {
//         Alert.alert("Error", "No file selected.");
//       }
//     } catch (error) {
//       console.error("DocumentPicker Error:", error);
//       Alert.alert("Error", "An error occurred while picking the file.");
//     }
//   };

//   const handleSubmit = async () => {
//     if (!resumeFile) {
//       Alert.alert("Error", "Please upload a resume before submitting.");
//       return;
//     }

//     const accessToken = await SecureStore.getItemAsync("AccessToken");
//     if (!accessToken) {
//       Alert.alert("Error", "No access token found. Please log in again.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("bid", coverLetter); // Cover letter
//     formData.append("pdfFile", {
//       uri: resumeFile.uri,
//       name: resumeFile.name,
//       type: resumeFile.mimeType,
//     });

//     try {
//       console.log("Submitting application for job ID:", job._id);
//       console.log("FormData fields:", {
//         bid: coverLetter,
//         pdfFile: {
//           uri: resumeFile.uri,
//           name: resumeFile.name,
//           type: resumeFile.mimeType,
//         },
//       });

//       const response = await axios.post(
//         `http://192.168.1.11:4000/api/v1/emp/job/${job._id}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Application Submission Response:", response.data);
//       setApplication(response.data);
//       setModalVisible(true);

//       setTimeout(() => {
//         setModalVisible(false);
//         navigation.navigate("JobDetails", { job });
//       }, 2000);
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       if (error.response) {
//         console.error("Error response:", error.response.data);
//         Alert.alert(
//           "Error",
//           error.response.data.message || "Submission failed."
//         );
//         if (error.response.status === 413) {
//           Alert.alert(
//             "Error",
//             "File size too large. Please upload a smaller file."
//           );
//         }
//       } else if (error.request) {
//         Alert.alert("Error", "No response from server. Check your connection.");
//       } else {
//         Alert.alert("Error", "An error occurred during submission.");
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Resume</Text>
//       <TouchableOpacity
//         style={styles.uploadButton}
//         onPress={handleResumeUpload}
//       >
//         <Ionicons name="cloud-upload-outline" size={24} color="white" />
//         <Text style={styles.uploadButtonText}>
//           {resumeFile ? resumeFile.name : "Upload Resume"}
//         </Text>
//       </TouchableOpacity>

//       <Text style={styles.title}>Cover Letter</Text>
//       <TextInput
//         style={styles.textarea}
//         placeholder="Write briefly about your motivation for this job"
//         value={coverLetter}
//         onChangeText={setCoverLetter}
//         multiline
//         numberOfLines={6}
//       />

//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>APPLY JOB</Text>
//       </TouchableOpacity>

//       {/* Confirmation Modal */}
//       <Modal
//         transparent={true}
//         animationType="fade"
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Ionicons name="close" size={24} color="#A0AEC0" />
//               <Text style={styles.srOnly}>Close</Text>
//             </TouchableOpacity>
//             <View style={styles.successIconContainer}>
//               <Ionicons name="checkmark-circle" size={64} color="#0D47A1" />
//             </View>
//             <Text style={styles.modalTitle}>
//               Your application has been submitted!
//             </Text>
//             <Text style={styles.modalMessage}>
//               Your application has been submitted, and we will review it as soon
//               as possible.
//             </Text>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E4F6FF",
//     padding: 20,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 10,
//   },
//   uploadButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#0D47A1",
//     padding: 15,
//     borderRadius: 25,
//     marginBottom: 20,
//   },
//   uploadButtonText: {
//     color: "white",
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   textarea: {
//     minHeight: 100,
//     backgroundColor: "white",
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   submitButton: {
//     backgroundColor: "#0D47A1",
//     padding: 15,
//     borderRadius: 25,
//     alignItems: "center",
//   },
//   submitButtonText: {
//     color: "white",
//     fontSize: 18,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContainer: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 20,
//     padding: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   closeButton: {
//     position: "absolute",
//     right: 10,
//     top: 10,
//   },
//   srOnly: {
//     position: "absolute",
//     width: 1,
//     height: 1,
//     margin: -1,
//     padding: 0,
//     overflow: "hidden",
//     clip: "rect(0, 0, 0, 0)",
//     border: 0,
//   },
//   successIconContainer: {
//     marginBottom: 16,
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#1D1B20",
//     marginBottom: 8,
//   },
//   modalMessage: {
//     fontSize: 16,
//     color: "#1D1B20",
//     textAlign: "center",
//   },
// });

// export default ApplyWithResumeFrame;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const ApplyForJob = ({ route }) => {
  const [bid, setBid] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const { job } = route.params; // jobId passed via navigation

  // Handle PDF file upload
  const handlePdfUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setPdfFile(file);
      } else {
        Alert.alert("Error", "No file selected.");
      }
    } catch (error) {
      console.error("DocumentPicker Error:", error);
      Alert.alert("Error", "An error occurred while picking the file.");
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log(job._id);
    // Validate inputs
    if (!bid) {
      Alert.alert("Error", "Please enter a bid.");
      return;
    }
    if (!pdfFile) {
      Alert.alert("Error", "Please upload a PDF file.");
      return;
    }

    // Retrieve access token from SecureStore
    const accessToken = await SecureStore.getItemAsync("AccessToken");
    if (!accessToken) {
      Alert.alert("Error", "No access token found. Please log in again.");
      return;
    }

    // Prepare FormData for multipart/form-data request
    const formData = new FormData();
    formData.append("bid", bid);
    formData.append("pdfFile", {
      data: pdfFile.uri,
      name: pdfFile.name || "resume.pdf", // Fallback name if not provided
      contentType: pdfFile.mimeType || "application/pdf",
    });

    try {
      const response = await axios.post(
        `http://192.168.1.11:4000/api/v1/emp/job/${job._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.sucess) {
        Alert.alert("Success", "Application submitted successfully!");
        setBid(""); // Reset form
        setPdfFile(null);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      if (error.response) {
        Alert.alert(
          "Error",
          error.response.data.message || "Submission failed."
        );
      } else {
        Alert.alert("Error", "An error occurred during submission.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for Job</Text>

      <Text style={styles.label}>Bid</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your bid"
        value={bid}
        onChangeText={setBid}
      />

      <Text style={styles.label}>Upload PDF</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handlePdfUpload}>
        <Ionicons name="cloud-upload-outline" size={24} color="white" />
        <Text style={styles.uploadButtonText}>
          {pdfFile ? pdfFile.name : "Upload PDF"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Application</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
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
});

export default ApplyForJob;
