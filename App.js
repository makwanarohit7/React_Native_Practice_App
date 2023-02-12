import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import FeedBack from "./Components/FeedBack";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";
import MenuItem from "./Components/MenuItem";
import Welcome from "./Components/Welcome";
import Customer from "./Components/Customer";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Stack.Navigator initialRouteName="Customer">
            {/* <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Welcome" component={Welcome} /> */}
            <Stack.Screen name="Customer" component={Customer} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  footerContainer: { backgroundColor: "#495E57" },
});
