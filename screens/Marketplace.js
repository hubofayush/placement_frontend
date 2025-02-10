import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Import the entire icon set

const Marketplace = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState("Jobs");

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>9:41</Text>
        <View style={styles.networkIcons}>
          {/* Add your network icons here */}
        </View>
      </View>

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
            onPress={() => setActiveSegment("Companies")}
          >
            <Text style={styles.segmentText}>Companies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Job Listings */}
      <ScrollView style={styles.jobList}>
        <TouchableOpacity
          style={styles.jobCard}
          onPress={() => navigation.navigate("JobDetails")}
        >
          <View style={[styles.logoContainer, { backgroundColor: "#26a689" }]}>
            <Image
              source={require("../assets/placeholder.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Welder</Text>
            <Text style={styles.companyName}>Finolex AMT</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.jobCard}
          onPress={() => navigation.navigate("JobDetails")}
        >
          <View style={[styles.logoContainer, { backgroundColor: "#f9d5f2" }]}>
            <Image
              source={require("../assets/placeholder.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Mechanic</Text>
            <Text style={styles.companyName}>PIS Pvt Ltd</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.jobCard}
          onPress={() => navigation.navigate("JobDetails")}
        >
          <View style={[styles.logoContainer, { backgroundColor: "#26a689" }]}>
            <Image
              source={require("../assets/placeholder.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Electrician</Text>
            <Text style={styles.companyName}>Finolex AMT</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Notification")}>
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Search")}>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.navText}>Profile</Text>
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
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#e4f6ff",
  },
  statusText: {
    color: "#000",
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0d47a1",
  },
  segmentedControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  segmentButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  activeSegment: {
    backgroundColor: "#0d47a1",
  },
  segmentText: {
    color: "#33363f",
  },
  filterButton: {
    padding: 10,
  },
  filterText: {
    color: "#0d47a1",
  },
  jobList: {
    paddingHorizontal: 20,
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
});

export default Marketplace;
