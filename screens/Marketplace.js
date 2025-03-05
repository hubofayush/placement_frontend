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
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const Marketplace = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState("Jobs");
  const [activeNavItem, setActiveNavItem] = useState("Home");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[styles.segmentButton, activeSegment === "Jobs" && styles.activeSegment]}
            onPress={() => setActiveSegment("Jobs")}
          >
            <Text style={styles.segmentText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segmentButton, activeSegment === "Companies" && styles.activeSegment]}
            onPress={() => {
              setActiveSegment("Companies");
              navigation.navigate("CompanyDetails"); // Navigate to CompanyDetails
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
        <TouchableOpacity
          style={styles.jobCard}
          onPress={() => navigation.navigate("JobDetails")} // Navigate to JobDetails
        >
          <View style={[styles.logoContainer, { backgroundColor: "#26a689" }]}>
            <Image
              source={require("../assets/placeholder.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Welder</Text>
            <Text style={styles.companyName}>Gadre Marine</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
          <Ionicons name="chevron-forward" style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.jobCard}
          onPress={() => navigation.navigate("JobDetails")} // Navigate to JobDetails
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
          <Ionicons name="chevron-forward" style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.jobCard}
          onPress={() => navigation.navigate("JobDetails")} // Navigate to JobDetails
        >
          <View style={[styles.logoContainer, { backgroundColor: "#26a689" }]}>
            <Image
              source={require("../assets/placeholder.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Electrician</Text>
            <Text style={styles.companyName}>Finolex Industry</Text>
            <Text style={styles.location}>Ratnagiri</Text>
          </View>
          <Ionicons name="chevron-forward" style={styles.chevronIcon} />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Marketplace");
            navigation.navigate("Marketplace");
          }}
        >
          <Ionicons name="home" size={24} color={activeNavItem === "Home" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Home </Text>
          {activeNavItem === "Home" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Notification");
            navigation.navigate("NotificationScreen");
          }}
        >
          <Ionicons name="notifications" size={24} color={activeNavItem === "Notification" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Notification </Text>
          {activeNavItem === "Notification" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Search");
            navigation.navigate("SearchScreen");
          }}
        >
          <Ionicons name="search" size={24} color={activeNavItem === "Search" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Search </Text>
          {activeNavItem === "Search" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Profile");
            navigation.navigate("ProfileScreen");
          }}
        >
          <Ionicons name="person" size={24} color={activeNavItem === "Profile" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Profile </Text>
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

export default Marketplace;
