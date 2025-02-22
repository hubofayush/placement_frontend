import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Frame from './Frame';

const ProfileScreen = ({ navigation }) => {
  const [activeNavItem, setActiveNavItem] = useState("Profile");
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Account</Text>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.waveBackground} />
      </View>

      {/* Profile Content */}
      <View style={styles.profileContent}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={80} color="#0d47a1" style={styles.avatar} />
        </View>
        <Text style={styles.name}>Pundalik Desai</Text>
        <Text style={styles.subtitle}>Electrician </Text>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="call" size={24} color="#0d47a1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="location" size={24} color="#0d47a1" />
          </TouchableOpacity>
        </View>

        {/* Button Container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("UpdateScreen")}
          >
            <Text style={{ color: "#0d47a1" }}>Update Profile </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <Text style={{ color: "#0d47a1" }}>Settings </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("LogoutScreen")}
          >
            <Text style={{ color: "#0d47a1" }}>Logout </Text>
          </TouchableOpacity>
        </View> 

        {/* Jobs Applied Card */}
        <TouchableOpacity
          style={styles.jobsAppliedCard}
          onPress={() => navigation.navigate("AppliedJobs")} // Navigate to AppliedJobs
        >
          <View style={styles.jobsAppliedContent}>
            <Text style={styles.jobsCount}>2</Text>
            <View style={styles.starsContainer}>
              {[...Array(2)].map((_, i) => (
                <Ionicons key={i} name="star" size={16} color="#fff" />
              ))}
            </View>
          </View>
          <Text style={styles.jobsAppliedText}>Jobs Applied </Text>
        </TouchableOpacity>

        {/* Illustration */}
        <Image
          source={{ uri: "data:image/jpeg;base64,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"}}
          style={styles.illustration}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Home");
            navigation.navigate("Marketplace");
          }}
        >
          <Ionicons name="home" size={24} color={activeNavItem === "Home" ? "#0d47a1" : "#595959"} />
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
          <Ionicons name="notifications" size={24} color={activeNavItem === "Notification" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Notification</Text>
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

      {/* Menu Frame */}
      {isMenuVisible && <Frame onClose={toggleMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#0d47a1",
    padding: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  menuButton: {
    padding: 10,
  },
  profileContent: {
    alignItems: "center",
    marginTop: -40,
  },
  avatarContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    color: "#333",
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 10,
    elevation: 3,
  },
  jobsAppliedCard: {
    backgroundColor: "#0d47a1",
    width: "90%",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  jobsAppliedContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobsCount: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,
  },
  starsContainer: {
    flexDirection: "row",
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
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
    fontSize: 12,
  },
  activeLine: {
    height: 2,
    width: "100%",
    backgroundColor: "#0d47a1",
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    marginTop: -7,
  },
});

export default ProfileScreen;
