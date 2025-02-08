import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/auth/Loigin";
import SelectRole from "./screens/SelectRole";

import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpVerification from "./screens/auth/OtpVerification";
import LoadingSplashScreen from "./screens/LoadingSplashScreen"; // Import the LoadingSplashScreen
import ProfileStep1 from "./screens/ProfileStep1";
import ProfileStep2 from "./screens/ProfileStep2";
import ProfileStep3 from "./screens/ProfileStep3";

export default function App() {
  const [fontloaded] = useFonts({
    RacingSansOne_Regular: require("./assets/fonts/RacingSansOne-Regular.ttf"),
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    outfitbold: require("./assets/fonts/Outfit-Bold.ttf"),
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinssemibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    poppinsbold: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsmedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontloaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRole"
          component={SelectRole}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoadingSplashScreen"
          component={LoadingSplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpVerification}
          options={{ headerShown: false }}
        />

        

        <Stack.Screen
           name="ProfileStep1" 
           component={ProfileStep1} 
           options={{ headerShown: false }} 
        />

         <Stack.Screen
           name="ProfileStep2" 
           component={ProfileStep2} 
           options={{ headerShown: false }} 
        />

        <Stack.Screen
           name="ProfileStep3" 
           component={ProfileStep3} 
           options={{ headerShown: false }} 
        /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
