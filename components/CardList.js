import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Card from "./Card";
import { getImageFromId } from "../utils/api";

const keyExtractor = ({ id }) => id.toString();

const CardList = ({ items, onPressComments, commentsForItem }) => {
  const renderItem = ({ item: { id, author } }) => {
    const comments = commentsForItem[id];
    return (
      <Card
        fullName={author}
        onPressLinkText={() => onPressComments(id)}
        linkText={`${comments ? comments.length : 0} Comments`}
        image={{ uri: getImageFromId(id) }}
      />
    );
  };
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
    />
  );
};

const styles = StyleSheet.create({});

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired,
  onPressComments: PropTypes.func.isRequired,
  commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired
};

export default CardList;
