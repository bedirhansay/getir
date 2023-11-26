import { View } from "react-native";
import { CategoriesItem } from "./CategoriesItem";
import categoriesGetir from "assets/categoriesGetir";

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
