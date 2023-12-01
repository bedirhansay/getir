import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { CartItem } from "components/ui/CartItem";
import { ProductItem } from "components/ProductDetail/ProductItem";
import { Button } from "components/ui/Button";
import { useContexData } from "hooks/useContex";
import { useNavigation } from "@react-navigation/native";
import { TProduct } from "utils";
import { getProducts } from "utils/api/api";

export const CartScreen = () => {
  const [products, setProducts] = useState<TProduct[]>();
  const { deleteAllCart, totalPrice, cart } = useContexData();
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <Button
          className="pr-4"
          size={32}
          color="white"
          icon="trash"
          onPress={() => deleteAllCart()}
        />
      ),
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const pr = await getProducts();
      setProducts(pr);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ backgroundColor: "#F5F5F5" }}
        data={cart}
        renderItem={({ item }) => <CartItem product={item} />}
      />
      <Text className="p-4 font-medium text-purple">Önerilen Ürünler</Text>
      <FlatList
        className="bg-white"
        showsHorizontalScrollIndicator={false}
        bounces={true}
        horizontal={true}
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
      />

      <View className="flex flex-row pt-8 pb-8 bg-white">
        <Button
          title="Devam"
          className="flex w-2/3 rounded-l-md bg-purple h-12 items-center justify-center"
          textClassname={[
            "text-base items-center justify-center font-bold text-white",
          ]}
        />

        <Text className="w-1/3 h-12 text-purple font-bold pt-2 text-center text-base bg-gray-200">
          {"\u20BA"} {totalPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
