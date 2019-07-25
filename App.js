import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import CardList from "./components/CardList";
import { TouchableOpacity } from "react-native-gesture-handler";

const items = [
  {
    id: 0,
    author: "John Doe"
  },
  { id: 1, author: "Jane Doe" },
  { id: 2, author: "Jane Doe" },
  { id: 3, author: "Jane Doe" }
];
export default function App() {
  return (
    <View style={styles.container}>
      <CardList items={items} />
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
