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

const AppliedDetailsJobs = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
      </View>

      {/* Job Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.jobInfo}>
          <Text style={styles.companyName}>Finolex FAMT</Text>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>F</Text>
          </View>
          <Text style={styles.jobTitle}>Electrician</Text>
          <View style={styles.employmentTags}>
            <Text style={styles.tag}>Fulltime </Text>
            <Text style={styles.tag}>Hourly </Text>
          </View>
        </View>

        {/* Salary Section */}
        <View style={styles.salaryContainer}>
          <Ionicons name="cash" size={24} color="#40189d" />
          <View>
            <Text style={styles.label}>Salary </Text>
            <Text style={styles.salary}>Rs. 13,000 - 17,000/monthly</Text>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={24} color="#40189d" />
          <View>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
        </View>

        {/* Job Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Job Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Applied Button */}
        <TouchableOpacity style={styles.appliedButton}>
          <Text style={styles.appliedButtonText}>APPLIED!</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="notifications" size={24} />
          <Text style={styles.navLabel}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="search" size={24} />
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person" size={24} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    justifyContent: "space-between", // Ensures the bottom nav stays at the bottom
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  detailsContainer: {
    padding: 20,
    flex: 1, // Allows the details container to take up available space
  },
  jobInfo: {
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: "500",
  },
  jobTitle: {
    fontSize: 30,
    fontWeight: "600",
  },
  employmentTags: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#0d47a1",
    color: "#0d47a1",
    padding: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  logoContainer: {
    backgroundColor: "#26a689",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  salaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    color: "#595959",
    fontSize: 14,
  },
  salary: {
    fontWeight: "500",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  location: {
    fontWeight: "500",
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  descriptionText: {
    color: "#595959",
  },
  appliedButton: {
    backgroundColor: "#e4f6ff",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  appliedButtonText: {
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
  },
  navButton: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
  },
});

export default AppliedDetailsJobs;
