import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CommentInput = ({ onSubmit, placeholder }) => {
  const [text, setText] = useState("");

  const handleSubmitEditing = () => {
    if (!text) return;
    onSubmit(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={input => setText(input)}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

CommentInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

CommentInput.defaultProps = {
  placeholder: ""
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20,
    height: 60
  },
  input: { flex: 1 }
});

export default CommentInput;
