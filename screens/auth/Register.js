import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Register = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
            placeholder="mobile number"
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
                name={showPassword  ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>
              Forgot your password?{"     "}
              <Text style={styles.resetLink}>Reset here</Text>
            </Text>
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.hrline}>
            _____________________________________________________
          </Text>
          <Text style={styles.creatacccountfont}>Dont have account? ... </Text>
          <TouchableOpacity style={styles.createAccountButton}>
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
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  subtitle: {
    fontSize: 20,
    color: "#585858",
    marginBottom: 20,
    marginRight: 20,
    fontWeight: "300",
  },
  regBack: {
    backgroundColor: "#E4F6FF",
    marginTop: 15,
    height: 700,
    width: 380,
    borderRadius: 25,
    padding: 30,
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },

    // justifyContent: "center",
  },
  input: {
    width: "100%",
    fontStyle: "bold",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    fontSize: 20,
    color: "#333",
    marginBottom: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#A7FFEB",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "#A7FFEB",
    sshadowColor: "rgba(0, 0, 0, 1)",
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
    sshadowColor: "rgba(0, 0, 0, 1)",
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
    textAlign: "center",
    color: "#323232",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.9,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 10, height: 100 },
    marginBottom: 30,
  },
  createAccountButton: {
    backgroundColor: "#90caf9",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    sshadowColor: "rgba(0, 0, 0, 1)",
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
// export default Register;
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";

// const Register = () => {
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>
//       <Text style={styles.subtitle}>
//         Please sign in to your registered account
//       </Text>

//       {/* Mobile Number Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="mobile number"
//         placeholderTextColor="#888"
//         keyboardType="phone-pad"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//       />

//       {/* Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.passwordInput}
//           placeholder="Password"
//           placeholderTextColor="#888"
//           secureTextEntry={!showPassword}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//           <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Login Button */}
//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>LOGIN</Text>
//       </TouchableOpacity>

//       {/* Forgot Password */}
//       <TouchableOpacity>
//         <Text style={styles.forgotText}>
//           Forgot your password? <Text style={styles.resetLink}>Reset here</Text>
//         </Text>
//       </TouchableOpacity>

//       {/* Create Account Button */}
//       <TouchableOpacity style={styles.createAccountButton}>
//         <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#E4F6FF",
//     padding: 20,
//     height: 200,
//     width: 350,
//     borderRadius: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 25,
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 25,
//     marginBottom: 15,
//     width: "100%",
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   passwordInput: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333",
//   },
//   eyeIcon: {
//     fontSize: 20,
//     marginLeft: 10,
//     color: "#888",
//   },
//   loginButton: {
//     backgroundColor: "#1565c0",
//     paddingVertical: 15,
//     paddingHorizontal: 50,
//     borderRadius: 25,
//     width: "100%",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   forgotText: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 30,
//   },
//   resetLink: {
//     color: "#1565c0",
//     fontWeight: "bold",
//   },
//   createAccountButton: {
//     backgroundColor: "#90caf9",
//     paddingVertical: 15,
//     paddingHorizontal: 50,
//     borderRadius: 25,
//     width: "100%",
//     alignItems: "center",
//   },
//   createAccountText: {
//     color: "#1565c0",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

export default Register;
