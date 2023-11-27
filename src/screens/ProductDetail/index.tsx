import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const ProductDetailScreen = ({ navigation }) => {
  const nav = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};
