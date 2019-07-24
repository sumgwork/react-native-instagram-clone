import React from "react";
import PropTypes from "prop-types";

import { Text, View, ColorPropType, StyleSheet } from "react-native";

const Avatar = ({ size, backgroundColor, initials }) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  };
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
};

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  initials: PropTypes.string.isRequired,
  backgroundColor: ColorPropType.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});

export default Avatar;
