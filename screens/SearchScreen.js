import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]); // Sample results array
  const [activeNavItem, setActiveNavItem] = useState("Search");
  // Sample data for demonstration
  const sampleData = [
    { id: '1', title: 'Software Engineer', company: 'Tech Corp' },
    { id: '2', title: 'Product Manager', company: 'Business Inc.' },
    { id: '3', title: 'Graphic Designer', company: 'Creative Studio' },
  ];

  const handleSearch = () => {
    // Implement search logic here
    const filteredResults = sampleData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultCard}
      onPress={() => navigation.navigate("JobDetails", { jobId: item.id })}
    >
      <Text style={styles.resultTitle}>{item.title}</Text>
      <Text style={styles.resultCompany}>{item.company}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search Jobs</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for jobs..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" size={24} color="#1565c0" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={results}
        renderItem={renderResultItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.resultsList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveNavItem("Home");
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
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    elevation: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  resultsList: {
    paddingBottom: 20,
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  resultCompany: {
    color: "#33363f",
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

export default SearchScreen;
