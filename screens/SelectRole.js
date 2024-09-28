import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const SelectRole = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={require("../assets/logo_dark.png")} />
      <Text style={styles.title}>VAYUN</Text>

      <Text numberOfLines={1} style={styles.hrline}>
        _____________________________________________________
      </Text>

      <Text
        style={{
          fontFamily: "poppins",
          fontSize: 30,
          marginEnd: "auto",
          marginLeft: 25,
          color: "black",
        }}
      >
        Continue as
      </Text>

      <View style={styles.bgView}>
        <TouchableOpacity style={styles.selctionBg}>
          <Image
            style={styles.icons}
            source={require("../assets/job-seeker.png")}
          ></Image>
          <View>
            <Text style={styles.cardTitle}>JOB SEEKER</Text>
            <Text style={styles.cardSubtitle}>
              Finding a job here never been easier than before
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.selctionBg}>
          <Image
            style={styles.icons}
            source={require("../assets/companyLogo.png")}
          ></Image>
          <View>
            <Text style={styles.cardTitle}>COMPANY</Text>
            <Text style={styles.cardSubtitle}>
              Let's recruit your great candidate faster here
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#B7E3F5",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    resizeMode: "contain",
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  title: {
    fontSize: 45,
    fontFamily: "RacingSansOne_Regular",
  },
  hrline: {
    textAlign: "center",
    color: "#91EEF6",
    borderBottomColor: "rgba(0,0,0,0.25)",
    borderBottomWidth: 4,
    opacity: 0.2,
    marginBottom: 50,
  },
  bgView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  selctionBg: {
    backgroundColor: "#EFFFFB",
    display: "flex",
    flexDirection: "row",
    width: "auto",
    sshadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 2,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    padding: 20,
    margin: 25,
    borderRadius: 25,
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  icons: {
    resizeMode: "contain",
    height: 60,
    width: 60,
    marginRight: 25,
  },
  cardTitle: {
    fontFamily: "poppinssemibold",
    fontSize: 20,
    color: "#0D47A1",
  },
  cardSubtitle: {
    fontFamily: "poppins",
    fontSize: 18,
    maxWidth: 250,
  },
});

export default SelectRole;
