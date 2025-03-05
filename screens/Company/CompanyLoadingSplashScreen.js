// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Animated,
//   Dimensions,
// } from "react-native";

// const { width } = Dimensions.get("window");

// const LoadingSplashScreen = () => {
//   const [progress] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(progress, {
//       toValue: 100,
//       duration: 3000, // Duration of the animation
//       useNativeDriver: false, // Set to false for width interpolation
//     }).start();
//   }, [progress]);

//   return (
//     <View style={styles.container}>
//       {/* Status Bar */}
//       <StatusBar barStyle="light-content" backgroundColor="#0d47a1" />
//       <View style={styles.statusBar}>
       
//         <View style={styles.statusIcons}>
//           {/* Add your status icons here */}

//         </View>
//       </View>

//       {/* Loading Spinner */}
//       <View style={styles.spinnerContainer}>
//         <View style={styles.spinner}>
//           <Animated.View
//             style={[
//               styles.spinnerAnimation,
//               {
//                 transform: [
//                   {
//                     rotate: progress.interpolate({
//                       inputRange: [0, 100],
//                       outputRange: ["0deg", "360deg"],
//                     }),
//                   },
//                 ],
//               },
//             ]}
//           />
//         </View>
//       </View>

//       {/* Bottom Loading Bar */}
//       <View style={styles.loadingBarContainer}>
//         <Animated.View
//           style={[
//             styles.loadingBar,
//             {
//               width: progress.interpolate({
//                 inputRange: [0, 100],
//                 outputRange: ["0%", "100%"],
//               }),
//             },
//           ]}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0d47a1",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   statusBar: {
//     width: "100%",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "absolute",
//     top: 0,
//   },
//   statusText: {
//     color: "#ffffff",
//     fontSize: 16,
//   },
//   statusIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   statusIcon: {
//     color: "#ffffff",
//     marginLeft: 10,
//   },
//   batteryIcon: {
//     width: 20,
//     height: 10,
//     backgroundColor: "#ffffff",
//     borderRadius: 2,
//     marginLeft: 10,
//   },
//   spinnerContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   spinner: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 8,
//     borderColor: "#a1caeb",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   spinnerAnimation: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     borderRadius: 50,
//     borderTopColor: "#e3f2fd",
//     borderRightColor: "transparent",
//     borderBottomColor: "transparent",
//     borderLeftColor: "transparent",
//     borderWidth: 8,
//   },
//   loadingBarContainer: {
//     width: "100%",
//     height: 5,
//     backgroundColor: "#a1caeb20",
//     borderRadius: 5,
//     position: "absolute",
//     bottom: 20,
//     paddingHorizontal: 20,
//   },
//   loadingBar: {
//     height: "100%",
//     backgroundColor: "#e3f2fd",
//     borderRadius: 5,
//   },
// });

// export default LoadingSplashScreen;



// after loading screen set up profile will display

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const CompanyLoadingSplashScreen = ({ navigation }) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    // Start the animation
    Animated.timing(progress, {
      toValue: 100,
      duration: 3000, // Duration of the animation
      useNativeDriver: false, // Set to false for width interpolation
    }).start();

    // Navigate to Setup Profile after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("CompanySetup1"); // Navigate to SetupProfile
    }, 3000); // Show splash screen for 3 seconds

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [progress, navigation]);

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#0d47a1" />
      <View style={styles.statusBar}>
        <View style={styles.statusIcons}>
          {/* Add your status icons here */}
        </View>
      </View>

      {/* Loading Spinner */}
      <View style={styles.spinnerContainer}>
        <View style={styles.spinner}>
          <Animated.View
            style={[
              styles.spinnerAnimation,
              {
                transform: [
                  {
                    rotate: progress.interpolate({
                      inputRange: [0, 100],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>

      {/* Bottom Loading Bar */}
      <View style={styles.loadingBarContainer}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d47a1",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  statusText: {
    color: "#ffffff",
    fontSize: 16,
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIcon: {
    color: "#ffffff",
    marginLeft: 10,
  },
  batteryIcon: {
    width: 20,
    height: 10,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    marginLeft: 10,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: "#a1caeb",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerAnimation: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderTopColor: "#e3f2fd",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderWidth: 8,
  },
  loadingBarContainer: {
    width: "100%",
    height: 5,
    backgroundColor: "#a1caeb20",
    borderRadius: 5,
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 20,
  },
  loadingBar: {
    height: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: 5,
  },
});

export default CompanyLoadingSplashScreen;
