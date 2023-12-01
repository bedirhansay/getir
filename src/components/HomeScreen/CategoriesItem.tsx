import React, { FC } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { TCategory } from "utils";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "utils/types/NavigatorTypes";

type CategoriesItemProps = {
  category: TCategory;
};
export const CategoriesItem: FC<CategoriesItemProps> = ({ category }) => {
  const nav = useNavigation<StackNavigation>();

  const touchHandler = async (id: any) => {
    nav.navigate("CategoryDetails", { id: id });
  };

  return (
    <TouchableOpacity
      onPress={() => touchHandler(category.id)}
      className="flex items-center space-y-2"
    >
      <Image
        source={{ uri: category.src }}
        className="w-20 h-20 flex object-contain rounded-xl mt-2 "
      />
      <Text className="text-center">{category.name}</Text>
    </TouchableOpacity>
  );
};
