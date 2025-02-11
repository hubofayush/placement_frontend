import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Filter = ({ jobs, setFilteredJobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");

  const handleFilter = () => {
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = jobType ? job.type.toLowerCase() === jobType.toLowerCase() : true;
      return matchesTitle && matchesType;
    });
    setFilteredJobs(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Jobs</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by job title"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <TextInput
        style={styles.input}
        placeholder="Job Type (e.g., full-time, part-time)"
        value={jobType}
        onChangeText={setJobType}
      />

      <TouchableOpacity style={styles.button} onPress={handleFilter}>
        <Text style={styles.buttonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E4F6FF",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1565c0",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Filter;
