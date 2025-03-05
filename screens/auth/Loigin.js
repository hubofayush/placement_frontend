import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const Login = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // FUNCTIONS //
  // Fetching data from server //
  const fetchdata = async () => {
    try {
      const response = await axios.post('http://192.168.43.189:4000/api/v1/emp/login', {
        
          phone: mobileNumber,
          password: password,
        
      },{
        withCredentials:true
      });
      console.log(response.data.data);
      // Handle successful response here (e.g., navigate to another screen)
      if (response.data.sucess) {
        // Assuming the response has a success property
        Alert.alert("Login Successful", "Welcome back!");
        navigation.navigate("Marketplace"); // Replace with your next screen
      } else {
        Alert.alert("Login Failed", response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error", error);
      Alert.alert("Error", "An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  // End of fetching data from server // 

  const loginUser = async () => {
    setLoading(true);
    if (!mobileNumber || !password) {
      Alert.alert("Error", "Mobile number and password are required");
      setLoading(false);
    } else {
      await fetchdata();
    }
  };

  // END OF FUNCTIONS //

  return (
    <View style={styles.container}>
      <View style={styles.regBack}>
        <View>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>
            Please sign in to your registered account
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#3232"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={loginUser} disabled={loading}>
            <Text style={styles.loginButtonText}>
              {loading ? "Please wait..." : "Login"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>
              Forgot your password?{"     "}
              <Text style={styles.resetLink}> Reset here </Text>
            </Text>
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.hrline}>
            _____________________________________________________
          </Text>
          <Text style={styles.creatacccountfont}>Don't have an account? ...  </Text>
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={() => navigation.navigate("SelectRole")}
          >
            <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 15,
    color: "#000",
    fontFamily: "outfitbold",
  },
  subtitle: {
    fontSize: 20,
    color: "#585858",
    marginBottom: 20,
    marginRight: 20,
    fontWeight: "300",
    fontFamily: "outfit",
  },
  regBack: {
    backgroundColor: "#E4F6FF",
    marginTop: 15,
    height: 700,
    width: 380,
    borderRadius: 25,
    padding: 30,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  input: {
    width: "100%",
    fontStyle: "bold",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    fontSize: 20,
    color: "#333",
    marginBottom: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#A7FFEB",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "#A7FFEB",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
    color: "#333",
  },
  eyeIcon: {
    fontSize: 25,
    marginLeft: 10,
    color: "#888",
  },
  loginButton: {
    backgroundColor: "#1565c0",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  forgotText: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
    margin: "auto",
  },
  resetLink: {
    color: "#1565c0",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  hrline: {
    marginBottom: 30,
    textAlign: "center",
    color: "#91EEF6",
    borderBottomColor: "rgba(0,0,0,0.25)",
    borderBottomWidth: 4,
    opacity: 0.2,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  createAccountButton: {
    backgroundColor: "#90caf9",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  createAccountText: {
    color: "#1565c0",
    fontSize: 20,
    fontWeight: "bold",
  },
  creatacccountfont: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    margin: "auto",
  },
});

export default Login;
