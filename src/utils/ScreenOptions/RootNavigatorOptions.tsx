import { Colors } from "constants/colors";

export const RootNavigatorOptions = () => {
  return {
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: Colors.purple,
    tabBarInactiveTintColor: "#959595",
    headerShown: false,
    tabBarStyle: {
      height: 70,
    },
  };
};
