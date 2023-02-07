import * as React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";
export default function FeedBack() {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={"First Name"}
      />
      <TextInput
        style={styles.inputBox}
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder={"Last Name"}
      />
      <TextInput
        style={styles.inputBox}
        value={message}
        onChangeText={onChangeMessage}
        placeholder={"Message"}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
