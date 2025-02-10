import React, { useState } from "react";
import {  Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity, // Importing TouchableOpacity for custom button
} from "react-native";
import { RadioButton } from "react-native-paper";

export default function ProfileStep1({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    dateOfBirth: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      navigation.navigate("ProfileStep2");
    }
  };

  //  date picker //
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(null)
  const onChangeDate = (event, selectedDate) => {
    setShow(false); // Hide the picker after selection
    if (selectedDate) {
      setDate(selectedDate);
      console.log(date)
      calculateAge(selectedDate);
    }
  };


  const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    
    setAge(age);
    console.log(age)
  };

  //  end of  date picker //
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>Setup your profile</Text>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/profile_icon.png")}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={formData.firstName}
          onChangeText={(text) => setFormData({ ...formData, firstName: text })}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={formData.lastName}
          onChangeText={(text) => setFormData({ ...formData, lastName: text })}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}

        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="male"
            status={formData.gender === "male" ? "checked" : "unchecked"}
            onPress={() => setFormData({ ...formData, gender: "male" })}
          />
          <Text>Male </Text>
          <RadioButton
            value="female"
            status={formData.gender === "female" ? "checked" : "unchecked"}
            onPress={() => setFormData({ ...formData, gender: "female" })}
          />
          <Text>Female </Text>
        </View>

        {/* <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={formData.dateOfBirth}
          type="date"
          onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
        /> */}
{/* new date picker code  */}
        
          <Button title="Pick Date of Birth" onPress={() => setShow(true)} />
          <Text style={styles.selectedDate}>Selected Date: {date.toDateString()}</Text>

          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              maximumDate={new Date()}
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={onChangeDate}
            />
          )}

{age !== null && <Text style={styles.ageText}>Your Age: {age} years</Text>}
{/* end of new date picker code  */}

        {/* <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
        /> */}
        {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#B7E3F5",
  },
  header: {
    alignItems: "center",
    marginBottom: 5,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 5,
  },
  formContainer: {
    backgroundColor: "#E4F6FF",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
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
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },ageText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "blue",
  },
  selectedDate: {
    fontSize: 16,
    marginTop: 10,
  },
});
