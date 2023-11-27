import { CategoryFiltering, ProductItem, TypeFiltering } from "components";
import { ProductsContainer } from "components/ProductsContainer";
import { View, Text, ScrollView } from "react-native";

export const CategoryFilterScreen = () => {
  return (
    <ScrollView>
      <CategoryFiltering />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
};
