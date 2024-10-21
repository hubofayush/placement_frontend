import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

const OtpVerification = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // For 6-digit OTP
  const [mobileNumber, setMobileNumber] = useState("");
  const [data, setData] = useState({
    mobile: "",
    otp: "",
  });
  // Create refs for each input field
  const otpInputs = Array(6)
    .fill()
    .map(() => useRef(null));

  // Update OTP input fields
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // If input is filled, move to the next one
    if (value && index < 5) {
      otpInputs[index + 1].current.focus();
    }

    // Set the OTP state
    setOtp(newOtp);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      // Move focus to the previous input when backspace is pressed
      otpInputs[index - 1].current.focus();
    }
  };

  // Check if all OTP fields are filled
  const isOtpFilled = otp.every((digit) => digit !== "");

  // Validate phone number (10 digits in this case)
  const isPhoneNumberValid = mobileNumber.length === 10;

  // handling functions //

  const sendOTPFunction = async () => {
    // try {
    //   // const responce = await axios
    //   //   .post("http://127.0.0.1:4000/api/v1/emp/otp", {
    //   //     mob: mobileNumber,
    //   //   })
    //   //   .then((respoce) => {
    //   //     console.log(respoce);
    //   //   })
    //   //   .catch((error) => {
    //   //     console.log(error);
    //   //   });
    //   // console.log(responce);
    //   // console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    // let mob = {
    //   mobile: mobileNumber,
    // };

    // fetch("http://127.0.0.1:4000/api/v1/emp/otp", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     mobile: mobileNumber,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    try {
      await axios
        .post("http://192.168.43.189:4000/api/v1/emp/otp", {
          mobile: mobileNumber,
        })
        .then((responce) => {
          console.log(responce.data);
          const { otp, mobile } = responce.data.data;

          setData({
            otp: otp,
            mobile: mobile,
          });
          setMobileNumber(mobile);
          console.log("saved otp", { mobileNumber, data });
        })
        .catch((err) => {
          console.error(err);
        });

      // if (responce.status == 200) {
      //   console.log(responce.data.data);
      //   let temp = {
      //     otp: responce.data.data.otp,
      //     mobile: mobileNumber,
      //   };
      //   setData(temp);
      // } else {
      //   console.log("error");
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = () => {
    let enteredotp = otp.join("");
    console.log(data);
    if (enteredotp === data.otp) {
      console.log("verified");
      navigation.navigate("Login");
    } else {
      console.log("error");
    }
  };

  // end of handling functions //

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Verification</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.enterNumber}>Enter Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          maxLength={10}
        />

        <TouchableOpacity
          style={[
            styles.sendOtpButton,
            { backgroundColor: isPhoneNumberValid ? "#1565c0" : "#ddd" },
          ]}
          onPress={() => {
            if (isPhoneNumberValid) {
              sendOTPFunction();
            }
          }}
        >
          <Text style={styles.sendOtpText}>SEND OTP</Text>
        </TouchableOpacity>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={otpInputs[index]}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.verifyButton,
            {
              backgroundColor:
                isOtpFilled && isPhoneNumberValid ? "#1565c0" : "#ddd",
            },
          ]}
          onPress={() => {
            if (isOtpFilled && isPhoneNumberValid) {
              verifyOTP();
            }
          }}
        >
          <Text style={styles.verifyText}>VERIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B7E3F5",
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 25,
    color: "black",
    fontFamily: "poppinsmedium",
  },
  cardContainer: {
    backgroundColor: "#E4F6FF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    borderRadius: 25,
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  enterNumber: {
    fontFamily: "poppins",
    fontSize: 22,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },
  otpInput: {
    width: 40,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  verifyButton: {
    backgroundColor: "#1565c0",
    paddingVertical: 5,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: "center",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    marginBottom: 10,
  },
  verifyText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "poppinssemibold",
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: 300,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#A7FFEB",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
  },
  sendOtpButton: {
    backgroundColor: "#1565c0",
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    marginBottom: 50,
  },
  sendOtpText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "poppinssemibold",
  },
});

export default OtpVerification;
