import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CommentList = ({ items }) => (
  <ScrollView>
    {items.map((item, index) => (
      <View key={index} style={styles.comment}>
        <Text>{item}</Text>
      </View>
    ))}
  </ScrollView>
);

CommentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.05)"
  }
});
export default CommentList;
