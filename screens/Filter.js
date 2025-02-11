import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const experienceOptions = ["Fresher", "Less than 1 year", "1 - 3 years", "3 - 5 years", "5+ years"];

const Filter = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("Select experience");

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        <View style={styles.segmentedControl}>
          <TouchableOpacity onPress={() => setActiveTab("jobs")} style={[styles.tab, activeTab === "jobs" && styles.activeTab]}>
            <Text style={styles.tabText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("companies")} style={[styles.tab, activeTab === "companies" && styles.activeTab]}>
            <Text style={styles.tabText}>Companies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="funnel" size={24} color="#0d47a1" />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[styles.segmentButton, activeTab === "Jobs" && styles.activeTab]}
            onPress={() => setActiveTab("Jobs")}
          >
            <Text style={styles.segmentText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segmentButton, activeTab === "Companies" && styles.activeTab]}
            onPress={() =>setActiveTab("Companies")}
          >
            <Text style={styles.segmentText}>Companies</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filter")}
        >
         
          <Text style={styles.filterText}>Filters</Text>
          <Ionicons name="funnel" size={24} color="#fff" />
        
        </TouchableOpacity>
      </View>


      {/* Search Section */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Search By Job Title</Text>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#595959" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="job title or company name"
          />
        </View>

        {/* Work Experience Dropdown */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.experienceTitle}>Work Experience</Text>
          <TouchableOpacity onPress={() => setIsDropdownOpen(!isDropdownOpen)} style={styles.dropdownButton}>
            <Text style={styles.dropdownText}>{selectedExperience}</Text>
            <Ionicons name={isDropdownOpen ? "chevron-up" : "chevron-down"} size={20} color="#595959" />
          </TouchableOpacity>
          {isDropdownOpen && (
            <FlatList
              data={experienceOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  setSelectedExperience(item);
                  setIsDropdownOpen(false);
                }} style={styles.dropdownItem}>
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#0d47a1" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#595959" />
          <Text style={styles.navLabel}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#595959" />
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#595959" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#e4f6ff',
  //   justifyContent: 'space-between', // Ensure space is distributed
  // },
  // header: {
  //   padding: 20,
  // },
  // headerTitle: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: "#0d47a1",
  //   marginBottom: 10,
  // },
  // segmentedControl: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   borderWidth: 2,
  //   borderColor: "blue",
  //   borderRadius: 20,
  //   overflow: "hidden",
  //   marginTop: 10,
  //   marginBottom: 10,
  // },
  // tab: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 20,
  //   backgroundColor: '#fff',
  // },
  // activeTab: {
  //   backgroundColor: '#0d47a1',
  // },
  // tabText: {
  //   color: '#33363f',
  // },
  // filterButton: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 10,
  // },


  container: {
    flex: 1,
    backgroundColor: "#e4f6ff",
    justifyContent: 'space-between',
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
  activeTab: {
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
  searchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  searchTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  dropdownContainer: {
    marginTop: 20,
  },
  experienceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  dropdownText: {
    color: '#595959',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownItemText: {
    color: '#595959',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#595959',
  },
});

export default Filter;
