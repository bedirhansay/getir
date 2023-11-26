import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "constants/colors";
import {
  Entypo,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { HomeNavigators } from "./HomeNavigators";
import { TouchableOpacity } from "react-native";
import { RootNavigatorOptions } from "utils/ScreenOptions/RootNavigatorOptions";
import { Button } from "components/ui/Button";

const Tab = createBottomTabNavigator();

export const RootNavigators = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={RootNavigatorOptions}
    >
      <Tab.Screen
        name="Anasayfa"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({ color }) => (
            <Button color={color} icon="home" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({ color }) => (
            <Button color={color} icon="search" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={HomeNavigators}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Button
              className="bg-purple w-14 h-14 items-center justify-center rounded-full border-4 border-gray-200  shadow-xl m-[-12]"
              icon="list"
              size={32}
              color={Colors.yellow}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({ color }) => (
            <Button color={color} icon="person" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({ color }) => (
            <Button color={color} icon="gift-sharp" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
