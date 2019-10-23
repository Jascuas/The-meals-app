import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGrindTile from "../components/CategoryGrindTile";

const CategoriesScreen = props => {
  const renderGridItem = itemdata => {
    return (
      <CategoryGrindTile
        title={itemdata.item.title}
        color={itemdata.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemdata.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};
const styles = StyleSheet.create({});

export default CategoriesScreen;
