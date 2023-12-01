import { Button } from "components/ui/Button";
import CartBox from "components/ui/CartBox";
import { Colors } from "constants/colors";
import { useContexData } from "hooks/useContex";
import { useLayoutEffect } from "react";
import { Image, Text } from "react-native";

export const HomeNavigatorOptions = () => {
  return {
    headerShown: true,
    headerStyle: { backgroundColor: "#5C3EBC" },
    tabBarBadge: 3,
    headerTitle: () => (
      <Image
        resizeMode="contain"
        style={{ width: 70, height: 30 }}
        source={require("../../assets/getirlogo.png")}
      />
    ),
  };
};

export const CategoryDetailNavigatorOptions = () => {
  return {
    headerShown: true,
    headerTintColor: "white",
    headerBackTitleVisible: false,
    headerStyle: { backgroundColor: Colors.purple },
    headerTitle: () => (
      <Text className="font-bold text-lg text-white">Ürünler</Text>
    ),
    headerRight: () => <CartBox />,
  };
};

export const ProductDetailNavigatorOptions = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return {
    headerShown: true,
    headerTintColor: "white",
    headerBackTitleVisible: false,
    tabBarStyle: { display: "none" },
    headerStyle: { backgroundColor: "#5C3EBC" },
    headerTitle: () => (
      <Text className="font-bold text-lg text-white">Ürün Detayı</Text>
    ),
    headerLeft: () => (
      <Button
        className="pl-4"
        icon="close"
        size={32}
        color="white"
        onPress={goBack}
      />
    ),
    headerRight: () => (
      <Button
        className="pr-4"
        size={32}
        color={Colors.darkPurple}
        icon="heart"
      />
    ),
  };
};

export const CartNavigatorOptions = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };



  return {
    headerShown: true,
    headerTintColor: "white",
    headerBackTitleVisible: false,
    tabBarStyle: { display: "none" },
    headerStyle: { backgroundColor: Colors.purple },
    headerTitle: () => (
      <Text className="font-bold text-lg text-white">Sepetim</Text>
    ),
    headerLeft: () => (
      <Button
        className="pl-4"
        icon="close"
        size={30}
        color="white"
        onPress={goBack}
      />
    ),
  };
};
