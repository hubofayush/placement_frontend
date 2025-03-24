import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import Frame from "./Frame";

const ProfileScreen = ({ navigation }) => {
  const [activeNavItem, setActiveNavItem] = useState("Profile");
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUserData = await SecureStore.getItemAsync("userData");
        const storedAccessToken = await SecureStore.getItemAsync("AccessToken");
        console.log("storedUserData:", storedUserData);
        console.log(storedAccessToken);
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }

        if (storedAccessToken) {
          setAccessToken(storedAccessToken);
        }
      } catch (error) {
        console.error("Failed to load data from SecureStore", error);
        Alert.alert("Error", "Failed to load profile data.");
      }
    };

    loadUserData();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Account</Text>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.waveBackground} />
      </View>

      <View style={styles.profileContent}>
        {/* <View style={styles.avatarContainer}>
          {userData?.employee?.[0]?.avatar ? (
            <Image
              source={{ uri: userData.employee[0].avatar }}
              style={styles.avatar}
            />
          ) : (
            <Ionicons
              name="person"
              size={80}
              color="#0d47a1"
              style={styles.avatar}
            />
          )}
        </View>
 */}
        <Text style={styles.name}>
          {userData?.employee?.[0]
            ? `${userData.employee[0].fName} ${userData.employee[0].lName}`
            : "Loading..."}
        </Text>

        <Text style={styles.subtitle}>
          {userData?.employee?.[0]?.jobRole || "  Fresher  "}
        </Text>

        {/* Contact Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="call" size={24} color="#0d47a1" />
            <Text>{userData?.employee?.[0]?.phone || "N/A"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="book-outline" size={24} color="#0d47a1" />
            <Text>{userData?.employee?.[0]?.education || "Unknown"}</Text>
          </TouchableOpacity>
        </View>

        {/* Action Navigation */}
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
            onPress={() => navigation.navigate("SelectRole")}
          >
            <Text style={{ color: "#0d47a1" }}>Logout </Text>
          </TouchableOpacity>
        </View>

        {/* Jobs Applied Card */}
        <TouchableOpacity
          style={styles.jobsAppliedCard}
          onPress={() => navigation.navigate("AppliedJobs")}
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

        {/* Illustration Placeholder */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
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
    textAlign: "center",
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
