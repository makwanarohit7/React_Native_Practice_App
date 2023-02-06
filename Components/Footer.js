import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Contect Us. makawanarohit70@gmail.com
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
