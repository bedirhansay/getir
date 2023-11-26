import { createStackNavigator } from "@react-navigation/stack";
import { CategoryFilterScreen, HomeScreen } from "screens";
import { CategoryDetailNavigatorOptions, HomeNavigatorOptions } from "utils";

const Stack = createStackNavigator();

export const HomeNavigators = () => {
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
    </Stack.Navigator>
  );
};
