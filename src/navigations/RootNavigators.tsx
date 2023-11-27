import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "constants/colors";
import { HomeNavigators } from "./HomeNavigators";
import { Button } from "components/ui/Button";
import { RootNavigatorOptions } from "utils/ScreenOptions/RootNavigatorOptions";
import { RootStackParamList } from "utils/types/NavigatorTypes";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootNavigators = () => {
  return (
    <Tab.Navigator
      initialRouteName="Anasayfa"
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
