import { View } from "react-native";
import { CategoriesItem } from "./CategoriesItem";
import { useEffect, useState } from "react";
import { getCategories } from "utils/api/api";
import { TCategory } from "utils";

export const MainCategories = () => {
  const [categories, setCategories] = useState<TCategory[]>();
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res);
    };
    fetchCategories();
  }, []);
  return (
    <View>
      <View className="flex flex-row flex-wrap justify-around">
        {categories?.map((category, index) => (
          <CategoriesItem key={"mainCategories" + index} category={category} />
        ))}
      </View>
    </View>
  );
};
