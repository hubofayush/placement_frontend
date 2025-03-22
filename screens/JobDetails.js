//

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Button } from "react-native-paper";

const JobDetails = ({ navigation, route }) => {
  const { job } = route.params; // Initial job data from Marketplace
  const [jobDetails, setJobDetails] = useState(null); // State for fetched job data
  const [loading, setLoading] = useState(true); // Loading state for API call

  // Fetch additional job details using job._id
  useEffect(() => {
    const fetchJobDetails = async () => {
      const accessToken = await SecureStore.getItemAsync("AccessToken");
      try {
        const response = await axios.get(
          `http://192.168.1.11:4000/api/v1/emp/job/${job._id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("Fetched Job Details Response:", response.data); // Log the API response
        setJobDetails(response.data); // Store the fetched data
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
  }, [job._id]); // Dependency on job._id to refetch if it changes

  const apply = async () => {
    navigation.navigate("ApplyWithResumeFrame", { job });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.companyName}>{job.companyName}</Text>
      </View>

      <View style={styles.detailsContainer}>
        {loading ? (
          <Text style={styles.loadingText}>Loading additional details...</Text>
        ) : jobDetails ? (
          <>
            {/* Display initial job data or update with fetched data */}
            <Text style={styles.label}>Title:</Text>
            <Text style={styles.value}>{job.title}</Text>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{job.location}</Text>
            <Text style={styles.label}>Salary Range:</Text>
            <Text style={styles.value}>{job.salaryRange}</Text>
            <Text style={styles.label}>Qualiication:</Text>
            <Text style={styles.value}>{job.qualification}</Text>

            <Text style={styles.label}>Openings:</Text>
            <Text style={styles.value}>{job.openings}</Text>
            <Text style={styles.label}>Instructions:</Text>
            <Text style={styles.value}>{job.instructions}</Text>
            <Text style={styles.label}>Job Type:</Text>
            <Text style={styles.value}>{job.jobType}</Text>
            <Text style={styles.label}>close Date:</Text>
            <Text style={styles.value}>{job.closeDate}</Text>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{job.contactInfo}</Text>

            {/* Example: Display fetched data if it differs */}
            {jobDetails.data && (
              <>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>
                  {jobDetails.data.description || job.description}
                </Text>

                <Text style={styles.label}>Salary Range:</Text>
                <Text style={styles.value}>
                  {jobDetails.data.salaryRange || job.salaryRange}
                </Text>

                <Button onPress={apply}>Apply Now</Button>
              </>
            )}
          </>
        ) : (
          <Text style={styles.errorText}>Failed to load job details</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    padding: 20,
  },
  header: {
    marginBottom: 20,
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
  detailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#595959",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: "#595959",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default JobDetails;
