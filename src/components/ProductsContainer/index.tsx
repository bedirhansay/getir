import { View, Text } from "react-native";
import React from "react";
import productsGetir from "assets/productsGetir";
import { ProductItem } from "components/ProductDetail/ProductItem";

export const ProductsContainer = () => {
  return (
    <View>
      <View className="flex flex-row items-center bg-white">
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text className="text-gray-600 font-bold p-4">Çubuk</Text>
      <View className="flex-row items-center flex w-full bg-white flex-wrap py-4 ">
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
