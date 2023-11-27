import { View, Text } from "react-native";
import React, { FC, useState, useEffect, useRef, useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import categoriesGetir from "assets/categoriesGetir";
import { TCategory } from "utils";
import { useRoute } from "@react-navigation/native";
import { Colors } from "constants/colors";

const CategoryBox = ({
  category,
  item,
}: {
  category: TCategory;
  item: any;
}) => {
  return (
    <View
      style={{
        borderBottomColor:
          category.id === item.id ? Colors.yellow : "transparent",
        borderBottomWidth: category.id === item.id ? 2.5 : 0,
      }}
      className="ml-2 items-center flex text-center justify-center mr-8"
    >
      <Text className=" text-white text-center font-semibold ">
        {category.name}
      </Text>
    </View>
  );
};

export const CategoryFiltering = () => {
  const { params } = useRoute();

  const [categories, setCategories] = useState<TCategory[]>(categoriesGetir);

  const scrollViewRef = useRef<ScrollView>(null);

  useLayoutEffect(() => {
    // @ts-ignore
    scrollToCategory(params?.id);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    if (scrollViewRef.current) {
      const index = categories.findIndex(
        (category) => category.id === categoryId
      );
      if (index !== -1) {
        scrollViewRef.current.scrollTo({ x: index * 50, animated: true });
      }
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      className="w-full bg-filterBg h-12"
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate={"fast"}
      pagingEnabled={true}
      bounces={true}
    >
      {categories.map((item, index) => (
        <CategoryBox key={item.id} category={item} item={params} />
      ))}
    </ScrollView>
  );
};
