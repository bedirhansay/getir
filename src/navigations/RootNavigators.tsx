import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "constants/colors";
import { HomeNavigators } from "./HomeNavigators";
import { Button } from "components/ui/Button";
import { RootNavigatorOptions } from "utils/ScreenOptions/RootNavigatorOptions";
import { RootStackParamList } from "utils/types/NavigatorTypes";
import { Ionicons } from "@expo/vector-icons";
import { GiftScreen, ProfileScreen, SearchScreen } from "screens";

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
            <Ionicons color={color} name="home" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="search" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({ color }) => (
            <Button
              className="bg-purple w-14 h-14 items-center justify-center rounded-full border-4 border-gray-200   m-[-12]"
              icon="list"
              size={32}
              color={Colors.yellow}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="person" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={GiftScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="gift-sharp" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
