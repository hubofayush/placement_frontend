import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setCompanyInfo(null); // Reset company info
    try {
      const response = await axios.get("http://192.168.250.1:4000/api/v1/emp/");
      if (response.data.statusCode === 200) {
        const jobs = response.data.data;
        const filteredJobs = jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredJobs.length > 0) {
          // Derive company info from the first matched job
          const firstCompany = filteredJobs[0].companyName;
          const jobsFromSameCompany = jobs.filter(
            (job) =>
              job.companyName.toLowerCase() === firstCompany.toLowerCase()
          );
          const uniqueLocations = [
            ...new Set(jobsFromSameCompany.map((job) => job.location)),
          ];
          setCompanyInfo({
            name: firstCompany,
            location: uniqueLocations.join(", "),
            numberOfActive: jobsFromSameCompany.length,
          });
        }

        setSearchResults(filteredJobs);
      } else {
        setSearchResults([]);
        setCompanyInfo(null);
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobCardClick = (job) => {
    console.log("Navigating to Job ID:", job._id);
    navigation.navigate("JobDetails", { job });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Jobs</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Enter job title or company..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : (
        <>
          {companyInfo && (
            <View style={styles.companyCard}>
              <Text style={styles.companyHeader}>{companyInfo.name}</Text>
              <Text style={styles.companyDetail}>
                Location: {companyInfo.location}
              </Text>
              <Text style={styles.companyDetail}>
                Active Job Openings: {companyInfo.numberOfActive}
              </Text>
            </View>
          )}

          {searchResults.length > 0 && (
            <Text style={styles.jobApplicationHeading}>Job Application</Text>
          )}

          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.jobCard}
                onPress={() => handleJobCardClick(item)}
              >
                <View style={styles.logoContainer}>
                  <Image
                    source={require("../assets/placeholder.png")}
                    style={styles.logo}
                  />
                </View>
                <View style={styles.jobInfo}>
                  <Text style={styles.jobTitle}>{item.title}</Text>
                  <Text style={styles.companyName}>{item.companyName}</Text>
                  <Text style={styles.location}>
                    {item.location} ({item.openings} openings)
                  </Text>
                </View>
                <Ionicons name="chevron-forward" style={styles.chevronIcon} />
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={styles.noResultsText}>No matching jobs found</Text>
            }
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  searchButton: {
    backgroundColor: "#0d47a1",
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#595959",
  },
  companyCard: {
    backgroundColor: "#fff", // same as jobCard
    padding: 15,
    borderRadius: 15, // matching jobCard's rounded corners
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  companyHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000", // changed from #e65100 to black
    marginBottom: 5,
  },

  companyDetail: {
    fontSize: 14,
    color: "#5d4037",
  },
  jobApplicationHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
  },
  jobCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#f9d5f2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
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
    fontSize: 20,
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#595959",
    marginTop: 20,
  },
});

export default SearchScreen;
