// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ScrollView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const AppliedJobs = ({ navigation }) => {
//   const [jobs] = useState([
//     {
//       id: 1,
//       company: "Finolex FAMT",
//       position: "Electrician",
//       appliedDate: "Oct 03, 2024",
//       logoColor: "#26a689",
//       logoInitial: "F",
//     },
//     {
//       id: 2,
//       company: "PIS Pvt Ltd",
//       position: "Electrician",
//       appliedDate: "Oct 03, 2024",
//       logoColor: "#f9d5f2",
//       logoInitial: "P",
//     },
//   ]);

//   const [activeNavItem, setActiveNavItem] = useState("AppliedJobs");

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Applied Jobs</Text>
//       </View>

//       {/* Applied Jobs Count */}
//       <View style={styles.appliedCount}>
//         <Text style={styles.appliedText}>
//           You have applied for <Text style={styles.appliedCountHighlight}>2</Text> jobs
//         </Text>
//       </View>

//       {/* Job Cards */}
//       <ScrollView style={styles.jobCardsContainer}>
//         {jobs.map((job) => (
//           <View key={job.id} style={styles.jobCard}>
//             <View style={[styles.logoContainer, { backgroundColor: job.logoColor }]}>
//               <Text style={styles.logoText}>{job.logoInitial}</Text>
//             </View>
//             <View>
//               <Text style={styles.companyName}>{job.company}</Text>
//               <Text style={styles.position}>{job.position}</Text>
//               <Text style={styles.appliedDate}>Applied: {job.appliedDate}</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.detailsButton}
//               onPress={() => navigation.navigate("AppliedDetailsJobs", { jobId: job.id })}
//             >
//               <Text style={styles.detailsText}>Details</Text>
//               <Ionicons name="chevron-forward" size={16} color="#0d47a1" />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => {
//             setActiveNavItem("Home");
//             navigation.navigate("Home");
//           }}
//         >
//           <Ionicons name="home-outline" size={24} color={activeNavItem === "Home" ? "#0d47a1" : "#595959"} />
//           <Text style={styles.navText}>Home</Text>
//           {activeNavItem === "Home" && <View style={styles.activeLine} />}
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => {
//             setActiveNavItem("Notification");
//             navigation.navigate("NotificationScreen");
//           }}
//         >
//           <Ionicons name="notifications-outline" size={24} color={activeNavItem === "Notification" ? "#0d47a1" : "#595959"} />
//           <Text style={styles.navText}>Notification</Text>
//           {activeNavItem === "Notification" && <View style={styles.activeLine} />}
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => {
//             setActiveNavItem("Search");
//             navigation.navigate("SearchScreen");
//           }}
//         >
//           <Ionicons name="search-outline" size={24} color={activeNavItem === "Search" ? "#0d47a1" : "#595959"} />
//           <Text style={styles.navText}>Search</Text>
//           {activeNavItem === "Search" && <View style={styles.activeLine} />}
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => {
//             setActiveNavItem("Profile");
//             navigation.navigate("ProfileScreen");
//           }}
//         >
//           <Ionicons name="person-outline" size={24} color={activeNavItem === "Profile" ? "#0d47a1" : "#595959"} />
//           <Text style={styles.navText}>Profile</Text>
//           {activeNavItem === "Profile" && <View style={styles.activeLine} />}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e4f6ff",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: "#333",
//     marginLeft: 16,
//   },
//   appliedCount: {
//     padding: 16,
//   },
//   appliedText: {
//     fontSize: 16,
//     color: "#595959",
//   },
//   appliedCountHighlight: {
//     color: "#0d47a1",
//     fontWeight: "bold",
//   },
//   jobCardsContainer: {
//     padding: 16,
//     flex: 1,
//   },
//   jobCard: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 16,
//     elevation: 3,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   logoContainer: {
//     width: 64,
//     height: 64,
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoText: {
//     color: "#a7ffeb",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   companyName: {
//     fontSize: 18,
//     fontWeight: "500",
//   },
//   position: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 4,
//   },
//   appliedDate: {
//     color: "#595959",
//     marginTop: 8,
//   },
//   detailsButton: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   detailsText: {
//     color: "#0d47a1",
//     fontWeight: "500",
//     marginRight: 4,
//   },
//   bottomNav: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     padding: 16,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     elevation: 4,
//   },
//   navButton: {
//     alignItems: "center",
//   },
//   navText: {
//     fontSize: 12,
//   },
//   activeLine: {
//     width: "100%",
//     height: 4,
//     backgroundColor: "#1565c0",
//     marginTop: 5,
//   },
// });

// export default AppliedJobs;


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
import { Ionicons } from "@expo/vector-icons";

const AppliedJobs = ({ navigation }) => {
  const [jobs] = useState([
    {
      id: 1,
      company: "Finolex FAMT",
      position: "Electrician",
      appliedDate: "Oct 03, 2024",
      logoColor: "#26a689",
      logoInitial: "F",
    },
    {
      id: 2,
      company: "PIS Pvt Ltd",
      position: "Electrician",
      appliedDate: "Oct 03, 2024",
      logoColor: "#f9d5f2",
      logoInitial: "P",
    },
  ]);

  const [activeNavItem, setActiveNavItem] = useState("AppliedJobs");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Applied Jobs</Text>
      </View>

      {/* Applied Jobs Count */}
      <View style={styles.appliedCount}>
        <Text style={styles.appliedText}>
          You have applied for <Text style={styles.appliedCountHighlight}>2</Text> jobs
        </Text>
      </View>

      {/* Job Cards */}
      <ScrollView style={styles.jobCardsContainer}>
        {jobs.map((job) => (
          <View key={job.id} style={styles.jobCard}>
            <View style={[styles.logoContainer, { backgroundColor: job.logoColor }]}>
              <Text style={styles.logoText}>{job.logoInitial}</Text>
            </View>
            <View>
              <Text style={styles.companyName}>{job.company}</Text>
              <Text style={styles.position}>{job.position}</Text>
              <Text style={styles.appliedDate}>Applied: {job.appliedDate}</Text>
            </View>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate("AppliedDetailsJobs", { jobId: job.id })}
            >
              <Text style={styles.detailsText}>Details</Text>
              <Ionicons name="chevron-forward" size={16} color="#0d47a1" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            setActiveNavItem("Home");
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="home" size={24} color={activeNavItem === "Home" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Home</Text>
          {activeNavItem === "Home" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
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
          style={styles.navButton}
          onPress={() => {
            setActiveNavItem("Search");
            navigation.navigate("SearchScreen");
          }}
        >
          <Ionicons name="search" size={24} color={activeNavItem === "Search" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Search</Text>
          {activeNavItem === "Search" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            setActiveNavItem("Profile");
            navigation.navigate("ProfileScreen");
          }}
        >
          <Ionicons name="person" size={24} color={activeNavItem === "Profile" ? "#0d47a1" : "#595959"} />
          <Text style={styles.navText}>Profile</Text>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginLeft: 16,
  },
  appliedCount: {
    padding: 16,
  },
  appliedText: {
    fontSize: 16,
    color: "#595959",
  },
  appliedCountHighlight: {
    color: "#0d47a1",
    fontWeight: "bold",
  },
  jobCardsContainer: {
    padding: 16,
    flex: 1,
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#a7ffeb",
    fontSize: 24,
    fontWeight: "bold",
  },
  companyName: {
    fontSize: 18,
    fontWeight: "500",
  },
  position: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
  appliedDate: {
    color: "#595959",
    marginTop: 8,
  },
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsText: {
    color: "#0d47a1",
    fontWeight: "500",
    marginRight: 4,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 4,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
  },
  activeLine: {
    width: "100%",
    height: 4,
    backgroundColor: "#1565c0",
    marginTop: 5,
  },
});

export default AppliedJobs;
