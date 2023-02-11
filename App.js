import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import FeedBack from "./Components/FeedBack";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";
import MenuItem from "./Components/MenuItem";
import Welcome from "./Components/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ size }) => {
                let iconName;
                if (route.name === "Welcome") {
                  iconName = "ios-home";
                } else if (route.name === "Login") {
                  iconName = "ios-enter";
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="Login"
          >
            <Tab.Screen name="Welcome" component={Welcome} />
            <Tab.Screen name="Login" component={Login} />
          </Tab.Navigator>
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
