import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const JobDetails = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [activeNavItem, setActiveNavItem] = useState("JobDetails"); // Set initial active item

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#e4f6ff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.jobInfo}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>F</Text>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>Electrician</Text>
            <Text style={styles.companyName}>Finolex AMT</Text>
          </View>
        </View>
        <View style={styles.jobTags}>
          <Text style={styles.tag}>Fulltime</Text>
          <Text style={styles.tag}>Hourly</Text>
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Ionicons name="call" size={24} color="#40189d" />
          <Text style={styles.contactText}>Contact us</Text>
        </TouchableOpacity>

        {/* Salary Section */}
        <View style={styles.salarySection}>
          <Ionicons name="cash" size={24} color="#40189d" />
          <View>
            <Text style={styles.salaryTitle}>Salary</Text>
            <Text style={styles.salaryAmount}>Rs. 13,000 - 17,000/monthly</Text>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationSection}>
          <Ionicons name="location-outline" size={24} color="#40189d" />
          <View>
            <Text style={styles.locationTitle}>Location</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
        </View>

        {/* Job Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Job Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Apply Now Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("ApplyOver")}
        >
          <Text style={styles.getStartedText}>APPLY NOW</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Component */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Home");
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="home" size={24} color={activeNavItem === "Home" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Home</Text>
          {activeNavItem === "Home" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Notifications");
            navigation.navigate("Notifications");
          }}
        >
          <Ionicons name="notifications" size={24} color={activeNavItem === "Notifications" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Notification</Text>
          {activeNavItem === "Notifications" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Search");
            navigation.navigate("Search");
          }}
        >
          <Ionicons name="search" size={24} color={activeNavItem === "Search" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Search</Text>
          {activeNavItem === "Search" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Profile");
            navigation.navigate("Profile");
          }}
        >
          <Ionicons name="person" size={24} color={activeNavItem === "Profile" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Profile</Text>
          {activeNavItem === "Profile" && <View style={styles.activeLine} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  content: {
    flex: 1, // Allow content to take up remaining space
    padding: 16,
  },
  jobInfo: {
    marginBottom: 16,
  },
  logoContainer: {
    backgroundColor: "#26a689",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -15,
    left: 16,
  },
  logoText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  jobDetails: {
    marginLeft: 100, // Add margin to avoid overlap
  },
  jobTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  companyName: {
    fontSize: 20,
    color: "#595959",
  },
  jobTags: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#40189d",
    borderRadius: 20,
    padding: 8,
    marginRight: 8,
    color: "#40189d",
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  contactText: {
    marginLeft: 8,
    fontSize: 18,
    color: "#595959",
  },
  salarySection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  salaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  salaryAmount: {
    color: "#595959",
  },
  locationSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    color: "#595959",
  },
  descriptionSection: {
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descriptionText: {
    color: "#595959",
    lineHeight: 24,
  },
  getStartedButton: {
    backgroundColor: "#0d47a1",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    marginVertical: 20, // Add margin for spacing
  },
  getStartedText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#595959",
  },
  activeLine: {
    width: "100%",
    height: 4,
    backgroundColor: "#1565c0",
    marginTop: 5,
  },
});

export default JobDetails;
