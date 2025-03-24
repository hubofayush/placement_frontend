import React, { useState, useEffect } from "react";
import {
  View,
  Text,
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
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs on mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://192.168.250.1:4000/api/v1/emp/"
        );
        if (response.data.statusCode === 200) {
          setJobs(response.data.data);
        } else {
          console.error("Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Fetch companies on mount
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          "http://192.168.250.1:4000/api/v1/emp/company"
        );
        if (response.data.statusCode === 200) {
          setCompanies(response.data.data);
        } else {
          console.error("Failed to fetch companies");
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  const handleJobCardClick = (job) => {
    navigation.navigate("JobDetails", { job });
  };

  const handleCompanyPress = async (companyId) => {
    try {
      const response = await axios.get(
        `http://192.168.250.1:4000/api/v1/emp/search/company/${companyId}`
      );
      if (response.data.statusCode === 200) {
        const companyData = response.data.data[0];
        navigation.navigate("CompanyDetails", { company: companyData });
      } else {
        console.error("Company not found");
      }
    } catch (error) {
      console.error("Error fetching company:", error);
    }
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
            <Text
              style={[
                styles.segmentText,
                activeSegment === "Jobs" && { color: "#fff" },
              ]}
            >
              Jobs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              activeSegment === "Companies" && styles.activeSegment,
            ]}
            onPress={() => setActiveSegment("Companies")}
          >
            <Text
              style={[
                styles.segmentText,
                activeSegment === "Companies" && { color: "#fff" },
              ]}
            >
              Companies
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Listings */}
      <ScrollView style={styles.jobList}>
        {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : activeSegment === "Jobs" ? (
          jobs.length > 0 ? (
            jobs.map((job) => (
              <TouchableOpacity
                key={job._id}
                style={styles.jobCard}
                onPress={() => handleJobCardClick(job)}
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
          )
        ) : companies.length > 0 ? (
          companies.map((company) => (
            <TouchableOpacity
              key={company._id}
              style={styles.jobCard}
              onPress={() => handleCompanyPress(company._id)}
            >
              <View
                style={[styles.logoContainer, { backgroundColor: "#d9f9f2" }]}
              >
                <Image
                  source={require("../assets/placeholder.png")}
                  style={styles.logo}
                />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{company.name}</Text>
                <Text style={styles.location}>{company.location}</Text>
              </View>
              <Ionicons name="chevron-forward" style={styles.chevronIcon} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noJobsText}>No companies available</Text>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {["Home", "Notification", "Search", "Profile"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.navItem}
            onPress={() => {
              setActiveNavItem(item);
              navigation.navigate(
                item === "Home"
                  ? "Marketplace"
                  : item === "Notification"
                  ? "NotificationScreen"
                  : item === "Search"
                  ? "SearchScreen"
                  : "ProfileScreen"
              );
            }}
          >
            <Ionicons
              name={
                item === "Home"
                  ? "home"
                  : item === "Notification"
                  ? "notifications"
                  : item === "Search"
                  ? "search"
                  : "person"
              }
              size={24}
              color={activeNavItem === item ? "#0d47a1" : "#595959"}
            />
            <Text style={styles.navText}>{item}</Text>
            {activeNavItem === item && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
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
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 20,
    overflow: "hidden",
  },
  segmentButton: {
    padding: 15,
    backgroundColor: "#fff",
    flex: 1,
  },
  activeSegment: {
    backgroundColor: "#0d47a1",
  },
  segmentText: {
    color: "#33363f",
    textAlign: "center",
    fontWeight: "600",
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
    marginBottom: 20,
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
    fontSize: 20,
    color: "#999",
  },
  noJobsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#999",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 3,
    color: "#595959",
  },
  activeLine: {
    marginTop: 3,
    height: 2,
    backgroundColor: "#0d47a1",
    width: "100%",
  },
});

export default Marketplace;
