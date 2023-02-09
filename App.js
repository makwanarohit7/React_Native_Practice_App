import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FeedBack from "./Components/FeedBack";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";
import MenuItem from "./Components/MenuItem";
import Welcome from "./Components/Welcome";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#495E57" }}>
        <Header />
        {/* <Welcome /> */}
        {/* <MenuItem /> */}
        {/* <FeedBack /> */}
        <Login />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <Footer />
      </View>
    </>
  );
}
