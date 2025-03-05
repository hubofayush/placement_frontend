import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const CompanyMarketplace = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Blue Wave Background */}
      <View style={styles.waveBackground} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>  Account</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>F</Text>
          </View>
        </View>
        <Text style={styles.profileName}>Finolex Industry </Text>
        <View style={styles.locationContainer}>
          <Ionicons name="pin" size={16} color="#0d47a1" />
          <Text style={styles.locationText}>Ratnagiri </Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Announce a Job Vacancy Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Announce a Job Vacancy</Text>
          <View style={styles.cardBackground}>
            <Image
              source={require("../assets/We_are_hiring.png")}
              style={styles.cardImage}
            />
          </View>
        </View>

        {/* Vacancies Announced Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vacancies Announced</Text>
          <View style={styles.cardBackgroundLight}>
            <Image
              source={require("../assets/Jobs.png")} // Replace with your image
              style={styles.cardImage}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={24} color="#0d47a1" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#7f7979" />
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#7f7979" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={24} color="#7f7979" />
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
  waveBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#0d47a1",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  header: {
    backgroundColor: "#0d47a1",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center", // Center the header title
    flex: 1,
    marginTop: 40, // Allow the title to take available space
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
    
  },
  avatarContainer: {
    marginBottom: 0,
  },
  avatar: {
    backgroundColor: "#26a689",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#a7ffeb",
    fontSize: 36,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#0d47a1",
    
  },
  content: {
    flex: 1,
    padding:16,
    gap: 14,
    
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 16, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
  },
  cardBackground: {
    height: 100,
    backgroundColor: "linear-gradient(to right, #ff7e5f, #feb47b)", // Example gradient
    justifyContent: "center",
    alignItems: "center",
  },
  cardBackgroundLight: {
    height: 100,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e8e8e8",
    backgroundColor: "white",
  },
  navText: {
    fontSize: 12,
    color: "#7f7979",
  },
});

export default CompanyMarketplace;
