import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TProduct } from "utils";
import { DetailBox, DetailFeatures, ImageCarousel } from "components";
import { Colors } from "constants/colors";
import { Button } from "components/ui/Button";
import { useContexData } from "hooks/useContex";
import { AddProductCart } from "utils/api/api";

export const ProductDetailScreen = ({ navigation, route }) => {
  const [product, setProduct] = useState<TProduct>();
  const nav = useNavigation();

  const { addProductToCart } = useContexData();

  useEffect(() => {
    setProduct(route.params.item);
  }, [navigation]);

  if (!product) {
    <ActivityIndicator color={Colors.purple} />;
  }

  const PressHandler = async (product) => {
    addProductToCart(product);
    await AddProductCart(product);
  };
  return (
    <ScrollView>
      <ImageCarousel images={product?.images} />
      <DetailBox product={product} />
      <Text className="mt-4 mb-4 text-base font-medium ml-4 text-grayColor ">
        Detaylar
      </Text>
      <DetailFeatures />
      <Button
        onPress={() => PressHandler(product)}
        title="Sepete Ekle"
        className="bg-white w-full mt-4 items-center"
        textClassname={[
          "text-white font-bold bg-purple text-center w-full pt-4 pb-4  items-center justify-center",
        ]}
      />
    </ScrollView>
  );
};
