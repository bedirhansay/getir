import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "screens";
import { HomeNavigatorOptions } from "utils";

const Stack = createStackNavigator();

export const HomeNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeNavigatorOptions}
      />
    </Stack.Navigator>
  );
};
