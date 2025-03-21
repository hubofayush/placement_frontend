// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import axios from "axios";
// import * as SecureStore from "expo-secure-store";

// const PasswordSetup = ({ navigation, route }) => {
//   const newFormData = route.params?.formData;
//   // console.log(newFormData)
//   const [formData, setFormData] = useState({
//     ...newFormData,
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agreed: false,
//   });

//   console.log(formData);

//   const [errorMessage, setErrorMessage] = useState(""); // State for error messages

//   let firstavatar = formData.profileImage;
//   let finalAvatar = {};
//   if (firstavatar) {
//     const fileName = firstavatar.split("/").pop();
//     const fileType = fileName.split(".").pop();
//     // finalAvatar = {
//     //   uri: firstavatar,
//     //   name: fileName,
//     //   type: `image/${fileType}`,
//     // };

//     finalAvatar.uri = firstavatar;
//     finalAvatar.name = fileName;
//     finalAvatar.type = `image/${fileType}`;
//   }

//   const handleSave = async () => {
//     console.log("clicked");
//     // const { password, confirmPassword } = formData;

//     // // Check if passwords match
//     // if (password !== confirmPassword) {
//     //   setErrorMessage("Passwords do not match.");
//     //   return;
//     // }

//     const formDataToSend = new FormData();

//     formDataToSend.append("fName", formData.firstName);
//     formDataToSend.append("lName", formData.lastName);
//     formDataToSend.append("age", formData.age);
//     formDataToSend.append("phone", formData.mobileNumber);
//     formDataToSend.append("password", confirmPassword);
//     formDataToSend.append("dateOfBirth", formData.dateOfBirth);
//     formDataToSend.append("experience", formData.workExperience);
//     formDataToSend.append("position", formData.jobRole);
//     formDataToSend.append("salary", formData.salaryRange);
//     formDataToSend.append("employed", formData.currentlyWorking);
//     formDataToSend.append("education", formData.education);
//     formDataToSend.append("district", formData.district);
//     formDataToSend.append("division", formData.taluka);
//     formDataToSend.append("pincode", formData.pinCode);
//     formDataToSend.append("gender", formData.gender);

//     // console.log(formDataToSend);
//     if (firstavatar) {
//       formDataToSend.append("avatar", {
//         uri: finalAvatar.uri,
//         name: finalAvatar.name,
//         type: finalAvatar.type,
//       });
//     }
//     console.log("formdata", formDataToSend);

//     try {
//       const response = await axios.post(
//         "https://vayun-backend.onrender.com/api/v1/emp/register",

//         formDataToSend
//       );

//       console.log(response.data);

//       if (response.data.sucess) {
//         Alert.alert("Register Successful", "Welcome back!");
//         // navigation.navigate("Marketplace");
//       } else {
//         Alert.alert(
//           "Login Failed",
//           response.data.message || "Invalid credentials"
//         );
//       }
//     } catch (error) {
//       console.error("Error", error);
//       Alert.alert(
//         "Error",
//         "An error occurred while logging in. Please try again."
//       );
//     }

//     // const formDataToSend = {
//     //   fName: formData.firstName,
//     //   lName: formData.lastName,
//     //   age: formData.age,
//     //   phone: formData.mobileNumber,
//     //   password: confirmPassword,
//     //   dateOfBirth: formData.dateOfBirth,
//     //   experience: formData.workExperience,
//     //   position: formData.jobRole,
//     //   salary: formData.salaryRange,
//     //   employed: formData.currentlyWorking,
//     //   education: formData.education,
//     //   district: formData.district,
//     //   division: formData.taluka,
//     //   pincode: formData.pinCode,
//     //   gender: formData.gender,
//     // };
//     // const formDataToSend = new FormData();

//     // formDataToSend.append("fName", formData.firstName);
//     // formDataToSend.append("lName", formData.lastName);
//     // formDataToSend.append("age", formData.age);
//     // formDataToSend.append("phone", formData.mobileNumber);
//     // formDataToSend.append("password", confirmPassword);
//     // formDataToSend.append("dateOfBirth", formData.dateOfBirth);
//     // formDataToSend.append("experience", formData.workExperience);
//     // formDataToSend.append("position", formData.jobRole);
//     // formDataToSend.append("salary", formData.salaryRange);
//     // formDataToSend.append("employed", formData.currentlyWorking);
//     // formDataToSend.append("education", formData.education);
//     // formDataToSend.append("district", formData.district);
//     // formDataToSend.append("division", formData.taluka);
//     // formDataToSend.append("pincode", formData.pinCode);
//     // formDataToSend.append("gender", formData.gender);

//     // // console.log(formDataToSend);
//     // if (firstavatar) {
//     //   formDataToSend.append("avatar", {
//     //     uri: finalAvatar.uri,
//     //     name: finalAvatar.name,
//     //     type: finalAvatar.type,
//     //   });
//     // }
//     // console.log("formdata", formDataToSend);
//     // try {
//     //   const response = await axios.post(
//     //     "https://vayun-backend.onrender.com/api/v1/emp/register",
//     //     formDataToSend,
//     //     {
//     //       headers: {
//     //         "Content-Type": "multipart/form-data",
//     //       },
//     //     }
//     //   );

//     //   // const responce = await fetch(
//     //   //   `http://192.168.250.206:4000/api/v1/emp/register`,
//     //   //   {
//     //   //     method: "POST",
//     //   //     body: formDataToSend,
//     //   //   }
//     //   // );
//     //   console.log(response.data);
//     //   if (response.data) {
//     //     console.log("object fff");
//     //     const userData = response.data.data;

//     //     // Store data securely
//     //     await SecureStore.setItemAsync("userData", JSON.stringify(userData));

//     //     const StoredData = await SecureStore.getItemAsync("userData");
//     //     // const data = JSON.parse(StoredData);
//     //     if (!StoredData) {
//     //       console.log("error while storing data on EXPO");
//     //     }
//     //     console.log("data", StoredData);
//     //     // console.log(formDataToSend);
//     //     Alert.alert("Success", "User Registered");
//     //     console.log("status", response.status);
//     //     navigation.navigate("AccountSuccess", { StoredData: StoredData }); // Make sure to have this screen in your navigator
//     //   }
//     // } catch (error) {
//     //   console.error(
//     //     "registration error",
//     //     error.responce?.data || error.message
//     //   );
//     //   Alert.alert("Error");
//     // }

//     // If passwords match, proceed to save the account
//     // Here you can implement your API call to save the account

//     // const response = await axios.post(
//     //   "http://192.168.135.206:4000/api/v1/emp/register",
//     //   formDataToSend,
//     //   {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   }
//     // );
//     // Alert.alert("Success", "User Registered");
//     // console.log(response.data);
//     // navigation.navigate("AccountSuccess");

//     // if (!response.data) {
//     //   console.error("Registration error:");
//     //   navigation.navigate("AccountSuccess");
//     //   Alert.alert("Error", "Registration failed.");
//     // }
//     // Redirect to Account Created page
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Ionicons name="arrow-back" size={24} color="black" />
//       </TouchableOpacity>

//       {/* Progress Dots */}
//       <View style={styles.progressDots}>
//         <View style={styles.progressDot} />
//         <View style={styles.progressDot} />
//         <View style={styles.progressDot} />
//         <View style={styles.progressDotActive} />
//       </View>
//       <Text style={styles.title}>Setup Your Password</Text>
//       {/* Main Content */}
//       <View style={styles.cardContainer}>
//         <Text style={styles.enterNumber}>Enter Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           placeholderTextColor="#888"
//           value={formData.email}
//           onChangeText={(value) => setFormData({ ...formData, email: value })}
//         />
//         <Text style={styles.enterNumber}>Create Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder=" Password "
//           placeholderTextColor="#888"
//           secureTextEntry
//           value={formData.password}
//           onChangeText={(value) =>
//             setFormData({ ...formData, password: value })
//           }
//         />
//         <Text style={styles.enterNumber}>Confirm Your Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder=" Password "
//           placeholderTextColor="#888"
//           secureTextEntry
//           value={formData.confirmPassword}
//           onChangeText={(value) =>
//             setFormData({ ...formData, confirmPassword: value })
//           }
//         />

//         {errorMessage ? (
//           <Text style={styles.errorText}>{errorMessage}</Text>
//         ) : null}
//       </View>
//       <View style={styles.checkboxContainer}>
//         <TouchableOpacity
//           style={styles.checkbox}
//           onPress={() => setFormData({ ...formData, agreed: !formData.agreed })}
//         >
//           {formData.agreed && <View style={styles.checkboxChecked} />}
//         </TouchableOpacity>

//         <Text style={styles.checkboxLabel}>
//           I agree to Vayun's{" "}
//           <Text style={styles.link}>terms and conditions b </Text>.
//         </Text>
//       </View>
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveButtonText}>SAVE</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#b7e3f5",
//     padding: 20,
//   },
//   statusBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "transparent",
//   },
//   statusText: {
//     color: "black",
//   },
//   statusDots: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   dot: {
//     height: 5,
//     width: 5,
//     borderRadius: 5 / 2,
//     backgroundColor: "black",
//     marginHorizontal: 2,
//   },
//   progressDots: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 10,
//   },
//   progressDot: {
//     height: 8,
//     width: 8,
//     borderRadius: 8 / 2,
//     backgroundColor: "#595959",
//     marginHorizontal: 2,
//   },
//   progressDotActive: {
//     height: 8,
//     width: 30,
//     borderRadius: 8 / 2,
//     backgroundColor: "#595959",
//     marginHorizontal: 2,
//   },
//   backButton: {
//     padding: 10,
//     backgroundColor: "transparent",
//   },
//   cardContainer: {
//     backgroundColor: "#ffffff",
//     borderRadius: 25,
//     padding: 20,
//     elevation: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   enterNumber: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   input: {
//     backgroundColor: "#ffffff",
//     borderRadius: 25,
//     padding: 15,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#e4f6ff",
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   checkbox: {
//     width: 24,
//     height: 24,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#595959",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   checkboxChecked: {
//     width: 16,
//     height: 16,
//     backgroundColor: "#0d47a1",
//     borderRadius: 3,
//   },
//   checkboxLabel: {
//     fontSize: 16,
//   },
//   link: {
//     color: "#0d47a1",
//     textDecorationLine: "underline",
//   },
//   saveButton: {
//     backgroundColor: "#0d47a1",
//     borderRadius: 25,
//     paddingVertical: 15,
//     alignItems: "center",
//   },
//   saveButtonText: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   errorText: {
//     color: "red",
//     marginBottom: 10,
//     textAlign: "center",
//   },
// });

// export default PasswordSetup;

import React, { useState } from "react";
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
  const newFormData = route.params?.formData || {};
  const [formData, setFormData] = useState({
    ...newFormData,
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    try {
      // Validation
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setErrorMessage("All fields are required");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      if (!formData.agreed) {
        setErrorMessage("Please agree to terms and conditions");
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage("Please enter a valid email");
        return;
      }

      setIsLoading(true);
      setErrorMessage("");

      const formDataToSend = new FormData();

      // Append all form fields
      formDataToSend.append("email", formData.email);
      formDataToSend.append("fName", formData.firstName);
      formDataToSend.append("lName", formData.lastName);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("phone", formData.mobileNumber);
      formDataToSend.append("password", formData.password);
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

      // Handle avatar if it exists
      if (formData.profileImage) {
        const fileName = formData.profileImage.split("/").pop();
        const fileType = fileName.split(".").pop();
        formDataToSend.append("avatar", {
          uri: formData.profileImage,
          name: fileName,
          type: `image/${fileType}`,
        });
      }

      const response = await axios.post(
        "https://vayun-backend.onrender.com/api/v1/emp/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000, // 10 second timeout
        }
      );

      if (response.data.sucess) {
        // Store user data
        await SecureStore.setItemAsync(
          "userData",
          JSON.stringify(response.data.data)
        );

        Alert.alert("Register Successful", "Welcome back!");
        navigation.navigate("Marketplace");
      } else {
        Alert.alert(
          "Registration Failed",
          response.data.message || "Something went wrong"
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message === "timeout of 10000ms exceeded"
          ? "Request timed out. Please check your internet connection."
          : "An error occurred while registering. Please try again.";
      Alert.alert("Error", errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        disabled={isLoading}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.progressDots}>
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDotActive} />
      </View>

      <Text style={styles.title}>Setup Your Password</Text>

      <View style={styles.cardContainer}>
        <Text style={styles.enterNumber}>Enter Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isLoading}
        />

        <Text style={styles.enterNumber}>Create Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
          editable={!isLoading}
        />

        <Text style={styles.enterNumber}>Confirm Your Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(value) =>
            setFormData({ ...formData, confirmPassword: value })
          }
          editable={!isLoading}
        />

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setFormData({ ...formData, agreed: !formData.agreed })}
          disabled={isLoading}
        >
          {formData.agreed && <View style={styles.checkboxChecked} />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          I agree to Vayun's{" "}
          <Text style={styles.link}>terms and conditions</Text>.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.saveButton, isLoading && styles.saveButtonDisabled]}
        onPress={handleSave}
        disabled={isLoading}
      >
        <Text style={styles.saveButtonText}>
          {isLoading ? "REGISTERING..." : "SAVE"}
        </Text>
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
  progressDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  progressDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#595959",
    marginHorizontal: 2,
  },
  progressDotActive: {
    height: 8,
    width: 30,
    borderRadius: 4,
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
  saveButtonDisabled: {
    backgroundColor: "#666",
    opacity: 0.7,
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
