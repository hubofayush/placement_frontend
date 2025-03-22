import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const Login = ({ navigation, route }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { phone } = route.params || {};
    if (phone) {
      setMobileNumber(phone);
    }
  }, [route.params]);

  const fetchdata = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.11:4000/api/v1/emp/login",
        {
          phone: mobileNumber,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data.data);

      if (response.data.sucess) {
        Alert.alert("Login Successful", "Welcome back!");
        try {
          const marketPlaceData = await axios.get(
            "http://192.168.1.11:4000/api/v1/emp/"
          );

          // if sucess
          // 1 userdata store krycha
          // 2 accessToken store krycha
          // marketr place share krycha marketplace mnj navigate krycha
          // console.log(JSON.parse(marketPlaceData.data[0].data));
          navigation.navigate("Marketplace");
        } catch (error) {
          console.log("marketplace api not working ", error);
        }
      } else {
        Alert.alert(
          "Login Failed",
          response.data.message || "Invalid credentials"
        );
      }
    } catch (error) {
      console.error("Error", error);
      Alert.alert(
        "Error",
        "An error occurred while logging in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async () => {
    setLoading(true);
    if (!mobileNumber || !password) {
      Alert.alert("Error", "Mobile number and password are required");
      setLoading(false);
    } else {
      await fetchdata();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.regBack}>
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

        <TouchableOpacity
          style={styles.loginButton}
          onPress={loginUser}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? "Please wait..." : "Login"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>
            Forgot your password?
            <Text style={styles.resetLink}> Reset here </Text>
          </Text>
        </TouchableOpacity>

        <Text numberOfLines={1} style={styles.hrline}>
          _____________________________________________________
        </Text>

        <Text style={styles.creatacccountfont}>Don't have an account? ...</Text>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("SelectRole")}
        >
          <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
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
  loginButton: {
    backgroundColor: "#1565c0",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  resetLink: {
    color: "#1565c0",
    fontWeight: "bold",
  },
  hrline: {
    textAlign: "center",
    color: "#aaa",
    marginVertical: 15,
  },
  creatacccountfont: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  createAccountButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1565c0",
    alignItems: "center",
  },
  createAccountText: {
    color: "#1565c0",
    fontWeight: "bold",
  },
});

export default Login;
