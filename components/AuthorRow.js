import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import getAvatarColor from "../utils/getAvatarColor";
import getInitials from "../utils/getInitials";

const AuthorRow = ({ fullName, linkText, onPressLinkText }) => {
  return (
    <View style={styles.container}>
      <Avatar
        initials={getInitials(fullName)}
        size={35}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>

      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

AuthorRow.prototype = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50
  },
  text: {
    flex: 1,
    marginHorizontal: 6
  }
});

export default AuthorRow;
