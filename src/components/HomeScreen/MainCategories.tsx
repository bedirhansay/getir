import React from "react";
import { View } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { CategoriesItem } from "./CategoriesItem";

export const MainCategories = () => {
  return (
    <View>
      <View className="flex flex-row flex-wrap justify-around">
        {categoriesGetir.map((category, index) => (
          <CategoriesItem key={"mainCategories" + index} category={category} />
        ))}
      </View>
    </View>
  );
};
