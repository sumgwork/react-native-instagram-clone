import React, { useState } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import AuthorRow from "./AuthorRow";

const Card = ({ image, fullName, linkText, onPressLinkText }) => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      {loading && (
        <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />
      )}
      <Image
        style={styles.image}
        source={image}
        onLoad={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: { aspectRatio: 1, backgroundColor: "rgba(0,0,0,0.2)" }
});

Card.propTypes = {
  fullName: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func
};

Card.defaultProps = {
  linkText: "",
  onPressLinkText: () => {}
};
export default Card;
