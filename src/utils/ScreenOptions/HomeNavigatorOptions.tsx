import { Image } from "react-native";

export const HomeNavigatorOptions = () => {
  return {
    headerShown: true,
    headerStyle: { backgroundColor: "#5C3EBC" },
    headerTitle: () => (
      <Image
        resizeMode="contain"
        style={{ width: 70, height: 30 }}
        source={require("../../../assets/getirlogo.png")}
      />
    ),
  };
};
