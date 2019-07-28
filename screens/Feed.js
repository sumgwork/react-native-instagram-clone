import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ViewPropTypes,
  SafeAreaView,
  Text
} from "react-native";
import { fetchImages } from "../utils/api";
import CardList from "../components/CardList";

const Feed = ({ style }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  const fetchImagesFromApi = async () => {
    const items = await fetchImages();
    setLoading(false);
    setItems(items);
  };

  useEffect(() => {
    try {
      fetchImagesFromApi();
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList items={items} />
    </SafeAreaView>
  );
};

Feed.propTypes = {
  style: ViewPropTypes.style
};

Feed.defaultProps = {
  style: null
};

export default Feed;
