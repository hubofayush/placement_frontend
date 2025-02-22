
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const Frame = ({ onClose, navigation }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true} // Always visible when called from ProfileScreen
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.verticalNav}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              onClose();
              navigation.navigate("UpdateScreen");
            }}
          >
            <Ionicons name="pencil" size={24} color="#ffffff" />
            <Text style={styles.navText}>UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              onClose();
              navigation.navigate("SettingsScreen");
            }}
          >
            <Ionicons name="settings" size={24} color="#ffffff" />
            <Text style={styles.navText}>SETTINGS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => {
              onClose();
              navigation.navigate("LogoutScreen");
            }}
          >
            <Ionicons name="log-out" size={24} color="#ffffff" />
            <Text style={styles.navText}>LOGOUT </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  verticalNav: {
    backgroundColor: "#0d47a1",
    width: 250,
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 5,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: "#0d47a1",
  },
  navText: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Frame;
