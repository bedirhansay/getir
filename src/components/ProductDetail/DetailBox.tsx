import { View, Text } from "react-native";
import React from "react";
import { TProduct } from "utils";

export const DetailBox = ({ product }: { product: TProduct }) => {
  return (
    <View className=" bg-white">
      <View className="m-auto items-center space-y-2 pt-4 pb-4 w-2/3">
        <Text className="text-purple font-bold text-xl">
          {"\u20BA"}
          {product?.fiyat}
        </Text>
        <Text className="font-semibold">{product?.name}</Text>
        <Text className="text-gray">{product?.miktar}</Text>
      </View>
    </View>
  );
};
