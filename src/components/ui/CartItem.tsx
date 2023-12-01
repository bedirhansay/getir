import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { TProduct } from "utils";
import { useContexData } from "hooks/useContex";
import { Button } from "./Button";
import { AddProductCart, decreaseAmount } from "utils/api/api";

type CartItemProps = {
  product: {
    product: TProduct;
    quantity: number;
  };
};

export const CartItem: FC<CartItemProps> = ({ product }) => {
  const { width, height } = Dimensions.get("window");

  const { decreaseQuantity, addProductToCart } = useContexData();
  const addCart = async () => {
    addProductToCart(product.product);
    await AddProductCart(product.product);
  };

  return (
    <View className="w-full bg-white flex-row items-center justify-center">
      <View
        className="flex-row bg-white justify-between items-center border-b-gray-400 space-x-2"
        style={{
          height: height * 0.13,
          width: width * 0.92,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            className="rounded"
            style={{
              height: height * 0.09,
              width: height * 0.09,
            }}
            source={{ uri: product?.product?.image }}
          />
          <View style={{ marginLeft: 8 }}>
            <View>
              <Text
                className="font-medium text-sm max-w-1/3"
                style={{
                  maxWidth: width * 0.44,
                }}
              >
                {product?.product?.name}
              </Text>
              <Text className="font-medium text-sm mt-1 text-gray-500">
                {product?.quantity}
              </Text>
            </View>
            <Text className="font-bold text-sm mt-1 text-purple">
              <Text>{"\u20BA"}</Text>
              {(product?.product?.fiyat * product?.quantity).toFixed(2)}
            </Text>
          </View>
        </View>

        <View
          className="flex flex-row items-center justify-around rounded border border-gray-300"
          style={{
            width: width * 0.22,
            height: height * 0.04,
          }}
        >
          <Button
            icon="add"
            className="flex items-center basis-1/3"
            onPress={() => addCart()}
          />
          <View className="bg-purple basis-1/3 items-center justify-center h-full">
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              {product?.quantity || 20}
            </Text>
          </View>
          <Button
            title="-"
            className="flex items-center basis-1/3"
            onPress={() => {
              decreaseQuantity(product.product.id);
              decreaseAmount(product?.product);
            }}
          />
        </View>
      </View>
    </View>
  );
};
