import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const NotificationScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Apply Success",
      content: "You have applied for a job at Finolex AMT as an Electrician.",
      timestamp: "10h ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Complete your profile",
      content: "Please verify your profile information to continue using this app.",
      timestamp: "4 June",
      isRead: false,
    },
    {
      id: 3,
      title: "Apply Success",
      content: "You have applied for a job at PIS Pvt Ltd as an Electrician.",
      timestamp: "3 June",
      isRead: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <View style={styles.notificationsList}>
        {notifications.map((notification) => (
          <View
            key={notification.id}
            style={[
              styles.card,
              notification.isRead ? styles.lightCard : styles.purpleCard,
            ]}
          >
            <View style={styles.cardHeader}>
              <View style={styles.cardIndicator} />
              <Text style={styles.cardTitle}>{notification.title}</Text>
            </View>
            <Text style={styles.cardContent}>
              {notification.content}
            </Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardTimestamp}>{notification.timestamp}</Text>
              {!notification.isRead && (
                <TouchableOpacity onPress={() => markAsRead(notification.id)}>
                  <Text style={styles.cardAction}>Mark as read</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navItem}>
          <Ionicons name="home" size={24} color="#787878" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")} style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#0d47a1" />
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")} style={styles.navItem}>
          <Ionicons name="search" size={24} color="#787878" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.navItem}>
          <Ionicons name="person" size={24} color="#787878" />
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
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0d47a1",
  },
  notificationsList: {
    paddingHorizontal: 20,
    paddingBottom: 80, // To avoid overlap with bottom nav
    flex: 1, // Allow this view to take available space
  },
  purpleCard: {
    backgroundColor: "#40189d",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    color: "#fff",
  },
  lightCard: {
    backgroundColor: " #90EE90",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  cardContent: {
    marginTop: 10,
    color: "#ffffff",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardTimestamp: {
    color: "#ffffff",
  },
  cardAction: {
    color: "#ffffff",
    textDecorationLine: "underline",
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
    color: "#787878",
  },
});

export default NotificationScreen;
