import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductItem } from "components/ProductDetail/ProductItem";
import { TProduct } from "utils";
import { getProducts } from "utils/api/api";

export const ProductsContainer = () => {
  const [products, setProducts] = useState<TProduct[]>();

  useEffect(() => {
    const fetchData = async () => {
      const pr = await getProducts();
      setProducts(pr);
    };

    fetchData();
  }, []);

  return (
    <View>
      <View className="flex flex-row items-center bg-white">
        {products?.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text className="text-gray-600 font-bold p-4">Çubuk</Text>
      <View className="flex-row items-center flex w-full bg-white flex-wrap py-4 ">
        {products?.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
