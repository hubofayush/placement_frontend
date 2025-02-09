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
import { ChevronRight } from "react-native-vector-icons/Feather"; // Ensure you have this icon package installed

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
        <JobCard
          logo={require("../assets/placeholder.png")}
          logoBackground="#26a689"
          title="Welder"
          company="Finolex AMT"
          location="Ratnagiri"
          onPress={() => navigation.navigate("JobDetails")}
        />
        <JobCard
          logo={require("../assets/placeholder.png")}
          logoBackground="#f9d5f2"
          title="Mechanic"
          company="PIS Pvt Ltd"
          location="Ratnagiri"
          onPress={() => navigation.navigate("JobDetails")}
        />
        <JobCard
          logo={require("../assets/placeholder.png")}
          logoBackground="#26a689"
          title="Electrician"
          company="Finolex AMT"
          location="Ratnagiri"
          onPress={() => navigation.navigate("JobDetails")}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem label="Home" active onPress={() => navigation.navigate("Home")} />
        <NavItem label="Notification" onPress={() => navigation.navigate("Notification")} />
        <NavItem label="Search" onPress={() => navigation.navigate("Search")} />
        <NavItem label="Profile" onPress={() => navigation.navigate("Profile")} />
      </View>
    </View>
  );
};

const JobCard = ({ logo, logoBackground, title, company, location, onPress }) => {
  return (
    <TouchableOpacity style={styles.jobCard} onPress={onPress}>
      <View style={[styles.logoContainer, { backgroundColor: logoBackground }]}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.companyName}>{company}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <ChevronRight style={styles.chevronIcon} />
    </TouchableOpacity>
  );
};

const NavItem = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Text style={[styles.navText, active && styles.activeNavText]}>{label}</Text>
    </TouchableOpacity>
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
  activeNavText: {
    color: "#0d47a1",
  },
});

export default Marketplace;
