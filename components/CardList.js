import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Card from "./Card";
import { getImageFromId } from "../utils/api";

const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
  <Card
    fullName={author}
    onPressLinkText={() => {
      console.log("Pressed");
    }}
    linkText="Comments"
    image={{ uri: getImageFromId(id) }}
  />
);
const CardList = ({ items }) => (
  <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} />
);

const styles = StyleSheet.create({});

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CardList;
