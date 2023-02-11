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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
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
