import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { tabHiddenRoutes } from "constants/HiddenRoutes";
import { useLayoutEffect } from "react";
import { CategoryFilterScreen, HomeScreen, ProductDetailScreen } from "screens";
import {
  CategoryDetailNavigatorOptions,
  HomeNavigatorOptions,
  ProductDetailNavigatorOptions,
} from "utils";

const Stack = createStackNavigator();

export const HomeNavigators = ({ navigation }) => {
  const route = useRoute();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeNavigatorOptions}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={CategoryDetailNavigatorOptions}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={ProductDetailNavigatorOptions}
      />
    </Stack.Navigator>
  );
};
