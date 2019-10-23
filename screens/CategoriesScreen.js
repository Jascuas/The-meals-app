import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemdata => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemdata.item.title}</Text>
    </View>
  );
};
const CategoriesScreen = props => {
  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex:1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
