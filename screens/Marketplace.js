import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const Marketplace = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState("Jobs");
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [jobs, setJobs] = useState([]); // State for job data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch job data on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.11:4000/api/v1/emp/"
        );

        // console.log("Marketplace data:", response.data);
        if (response.data.statusCode === 200) {
          setJobs(response.data.data); // Store the job array
        } else {
          console.error("Failed to fetch jobs:", response.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        if (error.response) {
          console.error("Error response:", error.response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleJobCardClick = (job) => {
    console.log("Selected Job Details:", job._id);
    navigation.navigate("JobDetails", { job }); // Pass the whole job object
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeSegment === "Jobs" && styles.activeSegment,
            ]}
            onPress={() => setActiveSegment("Jobs")}
          >
            <Text style={styles.segmentText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeSegment === "Companies" && styles.activeSegment,
            ]}
            onPress={() => {
              setActiveSegment("Companies");
              navigation.navigate("CompanyDetails");
            }}
          >
            <Text style={styles.segmentText}>Companies</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filter")}
        >
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Job Listings */}
      <ScrollView style={styles.jobList}>
        {loading ? (
          <Text style={styles.loadingText}>Loading jobs...</Text>
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <TouchableOpacity
              key={job._id} // Unique key for each job card
              style={styles.jobCard}
              onPress={() => handleJobCardClick(job)} // Use handler for click
            >
              <View
                style={[styles.logoContainer, { backgroundColor: "#f9d5f2" }]}
              >
                <Image
                  source={require("../assets/placeholder.png")}
                  style={styles.logo}
                />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.companyName}>{job.companyName}</Text>
                <Text style={styles.location}>
                  {job.location} ({job.openings} openings)
                </Text>
              </View>
              <Ionicons name="chevron-forward" style={styles.chevronIcon} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noJobsText}>No jobs available</Text>
        )}
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
            setActiveNavItem("Notification");
            navigation.navigate("NotificationScreen");
          }}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={activeNavItem === "Notification" ? "#0d47a1" : "#595959"}
          />
          <Text style={styles.navText}>Notification</Text>
          {activeNavItem === "Notification" && (
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
    padding: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
  },
  segmentedControl: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 10,
  },
  segmentButton: {
    padding: 15,
    borderRadius: 0,
    backgroundColor: "#fff",
    flex: 1,
  },
  activeSegment: {
    backgroundColor: "#0d47a1",
  },
  segmentText: {
    color: "#33363f",
    textAlign: "center",
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#1565c0",
    borderRadius: 25,
    marginLeft: 10,
  },
  filterText: {
    color: "#fff",
    fontSize: 16,
  },
  jobList: {
    paddingHorizontal: 20,
  },
  jobCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  companyName: {
    color: "#33363f",
  },
  location: {
    color: "#7f7979",
  },
  chevronIcon: {
    color: "#898a8d",
    fontSize: 24,
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
    textAlign: "center",
    fontSize: 16,
    color: "#595959",
    marginTop: 20,
  },
  noJobsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#595959",
    marginTop: 20,
  },
});

export default Marketplace;
