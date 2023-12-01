import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React, { FC } from "react";
import { Button } from "components/ui/Button";
import { Colors } from "constants/colors";
import { TProduct } from "utils";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "utils/types/NavigatorTypes";
import { useContexData } from "hooks/useContex";
import { AddProductCart } from "utils/api/api";

type ProductDetailsParams = {
  item: TProduct;
};

export const ProductItem: FC<ProductDetailsParams> = ({ item }) => {
  const { width, height } = Dimensions.get("window");
  const productWidth = width / 3;
  const nav = useNavigation<StackNavigation>();

  const { addProductToCart } = useContexData();

  const AddCart = async (item) => {
    addProductToCart(item);
    await AddProductCart(item);
  };

  return (
    <Pressable
      style={{
        width: width * 0.285,
      }}
      onPress={() => nav.navigate("ProductDetails", { item: item })}
      className="ml-4 mb-4 mt-4 items-center flex flex-col  "
    >
      <Image
        style={{
          width: width * 0.285,
          height: 100,
        }}
        className="rounded-md"
        source={{
          uri: item.image,
        }}
      />
      <View className="flex flex-row gap-2 mt-0 ">
        <Text className="text-sm font-bold text-gray-500 line-through ">
          {"\u20BA"}
          {item.fiyat}
        </Text>
        <Text className="text-sm font-bold text-purple ">
          {"\u20BA"}
          {item.fiyatIndirimli}
        </Text>
      </View>

      <View className="flex flex-col gap-2 mt-0">
        <Text className=" font-semibold text-left text-black  text-xs">
          {item.name}
        </Text>
        <Text className="text-xs font-semibold text-gray-500 ">
          {item.miktar}
        </Text>
      </View>
      <Button
        onPress={() => AddCart(item)}
        className="rounded-md bg-white border-gray-400 w-8 h-8  absolute  right-[-10] top-[-10]"
        size={28}
        icon={"add"}
        color={Colors.purple}
      />
    </Pressable>
  );
};
