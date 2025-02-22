import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CompanyDetails = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Company Details</Text>
      </View>

      {/* Banner Image */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: "data:image/jpeg;base64,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" }} 
          style={styles.bannerImage}
        />
      </View>

      {/* Company Info */}
      <View style={styles.infoContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>F</Text>
        </View>
        <View style={styles.companyDetails}>
          <Text style={styles.companyName}>Finolex FAMT.</Text>
          <Text style={styles.companyLocation}>Ratnagiri</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={24} color="#ff912c" />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>

        {/* Contact Details */}
        <View style={styles.contactContainer}>
          <ContactDetail icon="call" label="Telephone" value="+91_94567654234 " />
          <ContactDetail icon="mail" label="Email" value="finolexamt@mail.com" />
          <ContactDetail icon="globe" label="Website" value="finolexamt.org " />
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <BottomNavButton icon="home" label="Home " />
        <BottomNavButton icon="notifications" label="Notification" />
        <BottomNavButton icon="search" label="Search " />
        <BottomNavButton icon="person" label="Profile " />
      </View>
    </View>
  );
};

const ContactDetail = ({ icon, label, value }) => (
  <View style={styles.contactDetail}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={24} color="#0d47a1" />
    </View>
    <View style={styles.contactText}>
      <Text style={styles.contactLabel}>{label}</Text>
      <Text style={styles.contactValue}>{value}</Text>
    </View>
  </View>
);

const BottomNavButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.bottomNavButton}>
    <Ionicons name={icon} size={24} />
    <Text style={styles.bottomNavLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    justifyContent: "space-between", // Ensures the bottom nav stays at the bottom
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
  bannerContainer: {
    width: "100%",
    height: 200,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#e4f6ff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -40,
  },
  logoContainer: {
    backgroundColor: "#26a689",
    width: 70,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
   // top: 30,
    left: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  logoText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  companyDetails: {
    marginTop: 40,
    marginLeft: 100,
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  companyLocation: {
    color: "#595959",
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 4,
  },
  contactContainer: {
    marginTop: 20,
  },
  contactDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0d47a1",
    justifyContent: "center",
    alignItems: "center",
  },
  contactText: {
    marginLeft: 16,
  },
  contactLabel: {
    color: "#7f7979",
    fontSize: 16,
  },
  contactValue: {
    color: "black",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  bottomNavButton: {
    alignItems: "center",
  },
  bottomNavLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default CompanyDetails;
