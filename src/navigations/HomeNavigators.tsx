import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { tabHiddenRoutes } from "constants/HiddenRoutes";
import { ContextProvider } from "contextProvider/Provider/ContextProvider";
import { useLayoutEffect } from "react";
import { CategoryFilterScreen, HomeScreen, ProductDetailScreen } from "screens";
import { CartScreen } from "screens/CartScreen/CartScreen";
import {
  CategoryDetailNavigatorOptions,
  HomeNavigatorOptions,
  ProductDetailNavigatorOptions,
  CartNavigatorOptions,
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
    <ContextProvider>
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
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={CartNavigatorOptions}
        />
      </Stack.Navigator>
    </ContextProvider>
  );
};
