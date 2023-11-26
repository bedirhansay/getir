import { Image, Text } from "react-native";

export const HomeNavigatorOptions = () => {
  return {
    headerShown: true,
    headerStyle: { backgroundColor: "#5C3EBC" },
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
    headerStyle: { backgroundColor: "#5C3EBC" },
    headerTitle: () => (
      <Text className="font-bold text-lg text-white">Ürünler</Text>
    ),
  };
};
