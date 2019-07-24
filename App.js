import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";
import AuthorRow from "./components/AuthorRow";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthorRow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  }
});
