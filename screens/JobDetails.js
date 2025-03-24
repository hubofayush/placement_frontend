import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const JobDetails = ({ navigation, route }) => {
  const { job } = route.params; // Initial job data from Marketplace
  const [jobDetails, setJobDetails] = useState(null); // State for fetched job data
  const [loading, setLoading] = useState(true); // Loading state for API call
  const [activeNavItem, setActiveNavItem] = useState("Home"); // For bottom navigation

  // Fetch additional job details using job._id
  useEffect(() => {
    const fetchJobDetails = async () => {
      const accessToken = await SecureStore.getItemAsync("AccessToken");
      try {
        const response = await axios.get(
          `http://192.168.250.1:4000/api/v1/emp/job/${job._id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("Fetched Job Details Response:", response.data);
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
        if (error.response) {
          console.error("Error response:", error.response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [job._id]);

  const apply = () => {
    navigation.navigate("ApplyWithResumeFrame", { job });
  };

  // Use fetched job details if available, else use initial job
  const displayJob = jobDetails?.data || job;

  // Array for additional details
  const additionalDetails = [
    { label: "Qualification", value: displayJob.qualification },
    { label: "Openings", value: displayJob.openings },
    { label: "Instructions", value: displayJob.instructions },
    { label: "Close Date", value: displayJob.closeDate },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e4f6ff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.detailsContainer}>
          {loading ? (
            <Text style={styles.loadingText}>
              Loading additional details...
            </Text>
          ) : (
            <>
              {/* Job Info */}
              <View style={styles.jobInfo}>
                <View style={styles.logoContainer}>
                  <Text style={styles.logoText}>
                    {displayJob.companyName
                      ? displayJob.companyName[0].toUpperCase()
                      : "J"}
                  </Text>
                </View>
                <View style={styles.jobDetails}>
                  <Text style={styles.jobTitle}>{displayJob.title}</Text>
                  <Text style={styles.companyName}>
                    {displayJob.companyName}
                  </Text>
                </View>
              </View>

              {/* Job Tags */}
              <View style={styles.jobTags}>
                <Text style={styles.tag}>{displayJob.jobType} </Text>
                {/* Add more tags if available in jobDetails */}
              </View>

              {/* Contact Button */}
              {displayJob.contactInfo && (
                <TouchableOpacity style={styles.contactButton}>
                  <Ionicons name="call" size={24} color="#40189d" />
                  <Text style={styles.contactText}>
                    {displayJob.contactInfo}
                  </Text>
                </TouchableOpacity>
              )}

              {/* Salary Section */}
              <View style={styles.salarySection}>
                <Ionicons name="cash" size={24} color="#40189d" />
                <View>
                  <Text style={styles.salaryTitle}>Salary</Text>
                  <Text style={styles.salaryAmount}>
                    {displayJob.salaryRange}
                  </Text>
                </View>
              </View>

              {/* Location Section */}
              <View style={styles.locationSection}>
                <Ionicons name="location-outline" size={24} color="#40189d" />
                <View>
                  <Text style={styles.locationTitle}>Location</Text>
                  <Text style={styles.location}>{displayJob.location}</Text>
                </View>
              </View>

              {/* Description Section */}
              <View style={styles.descriptionSection}>
                <Text style={styles.descriptionTitle}>Job Description</Text>
                <Text style={styles.descriptionText}>
                  {displayJob.description}
                </Text>
              </View>

              {/* Additional Details */}
              <View style={styles.additionalDetails}>
                <Text style={styles.additionalTitle}>Additional Details</Text>
                {additionalDetails.map((detail, index) => (
                  <View
                    key={index}
                    style={[
                      styles.detailRow,
                      index === additionalDetails.length - 1 && {
                        borderBottomWidth: 0,
                      },
                    ]}
                  >
                    <Text style={styles.label}>{detail.label}:</Text>
                    <Text style={styles.value}>{detail.value}</Text>
                  </View>
                ))}
              </View>

              {/* Apply Now Button */}
              <TouchableOpacity style={styles.getStartedButton} onPress={apply}>
                <Text style={styles.getStartedText}>APPLY NOW</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Home");
            navigation.navigate("Marketplace");
          }}
        >
          <Ionicons
            name="home"
            size={24}
            color={activeNavItem === "Home" ? "#0d47a1" : "#595959"}
          />
          <Text style={styles.navText}>Home</Text>
          {activeNavItem === "Home" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Notifications");
            navigation.navigate("NotificationScreen");
          }}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={activeNavItem === "Notifications" ? "#0d47a1" : "#595959"}
          />
          <Text style={styles.navText}>Notification</Text>
          {activeNavItem === "Notifications" && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Search");
            navigation.navigate("SearchScreen");
          }}
        >
          <Ionicons
            name="search"
            size={24}
            color={activeNavItem === "Search" ? "#0d47a1" : "#595959"}
          />
          <Text style={styles.navText}>Search</Text>
          {activeNavItem === "Search" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Profile");
            navigation.navigate("ProfileScreen");
          }}
        >
          <Ionicons
            name="person"
            size={24}
            color={activeNavItem === "Profile" ? "#0d47a1" : "#595959"}
          />
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
    flex: 1,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  jobInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logoContainer: {
    backgroundColor: "#26a689",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  logoText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0d47a1",
  },
  companyName: {
    fontSize: 20,
    color: "#33363f",
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
  additionalDetails: {
    marginTop: 16,
    marginBottom: 16,
  },
  additionalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontWeight: "bold",
    color: "#40189d",
    marginRight: 5,
  },
  value: {
    color: "#595959",
    flex: 1,
  },
  getStartedButton: {
    backgroundColor: "#0d47a1",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    marginVertical: 20,
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
  loadingText: {
    fontSize: 16,
    color: "#595959",
    textAlign: "center",
  },
});

export default JobDetails;
