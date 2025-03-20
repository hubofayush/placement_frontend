import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For back arrow icon
import { Picker } from "@react-native-picker/picker"; // Import Picker

export default function ProfileStep3({ navigation, route }) {
  const [pinCode, setPinCode] = useState(["", "", "", "", "", ""]); // For 6-digit pin code
  const [district, setDistrict] = useState("RATNAGIRI"); // Default placeholder
  const [taluka, setTaluka] = useState(""); // State for selected taluka

  const otpInputs = Array(6)
    .fill()
    .map(() => useRef(null)); // Create refs for each input field
  const newFormData = route.params?.formData;
  const formData = {
    ...newFormData,
    pinCode: pinCode.join(""),
    district,
    taluka,
  };

  const handleSubmit = () => {
    // Combine the pin code into a single string
    console.log("Form submitted:", formData);
    // Navigate to the next step or screen
    navigation.navigate("PasswordSetup", { formData: formData }); // Pass the combined data
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleOtpChange = (value, index) => {
    const newPinCode = [...pinCode];
    newPinCode[index] = value;

    // If input is filled, move to the next one
    if (value && index < 5) {
      otpInputs[index + 1].current.focus();
    }

    // Set the OTP state
    setPinCode(newPinCode);
  };

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      pinCode[index] === "" &&
      index > 0
    ) {
      // Move focus to the previous input when backspace is pressed
      otpInputs[index - 1].current.focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.dotContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      <Text style={styles.title}>Location Entry</Text>

      <View style={styles.formContainer}>
        <View style={styles.pinContainer}>
          <Text style={styles.label}>Pin Code </Text>
          <View style={styles.pinInputContainer}>
            {[...Array(6)].map((_, index) => (
              <TextInput
                key={index}
                style={styles.pinInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pinCode[index]}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={otpInputs[index]}
              />
            ))}
          </View>
        </View>

        <Text style={styles.label}>District</Text>
        <TextInput
          style={styles.input}
          placeholder="SINDHUDURG"
          value={district}
          onChangeText={setDistrict}
        />

        <Text style={styles.label}>Taluka</Text>
        <Picker
          selectedValue={taluka}
          style={styles.picker}
          onValueChange={(itemValue) => setTaluka(itemValue)}
        >
          <Picker.Item label="Select Taluka" value="" />
          <Picker.Item label="Mandangad" value="Mandangad" />
          <Picker.Item label="Dapoli" value="Dapoli" />
          <Picker.Item label="Khed" value="Khed" />
          <Picker.Item label="Chiplun" value="Chiplun" />
          <Picker.Item label="Guhagar" value="Guhagar" />
          <Picker.Item label="Sangameshwar" value="Sangameshwar" />
          <Picker.Item label="Ratnagiri" value="Ratnagiri" />
          <Picker.Item label="Lanja" value="Lanja" />
          <Picker.Item label="Rajapur" value="Rajapur" />
        </Picker>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR </Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity style={styles.currentLocationButton}>
          <Text style={styles.currentLocationText}>Current Location </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>NEXT </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#e4f6ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#0d47a1",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#273b4a",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#273b4a",
  },
  pinContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  pinInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },
  pinInput: {
    width: 40,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  orLine: {
    height: 1,
    flex: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#273b4a",
  },
  currentLocationButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#0d47a1",
  },
  currentLocationText: {
    color: "#0d47a1",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1565c0",
    paddingVertical: 7,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
  },
});
