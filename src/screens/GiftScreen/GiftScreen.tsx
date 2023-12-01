import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "components/ui/Button";
import { StackNavigation } from "utils/types/NavigatorTypes";

export const GiftScreen = () => {
  const nav = useNavigation<StackNavigation>();
  return (
    <SafeAreaView>
      <Button
        title="Go Back ProfileScreen"
        onPress={() => nav.navigate("Personal")}
      />

      <Button
        className="bg-blue-300"
        title="Go Back Category Cart"
        onPress={() => nav.navigate("CartScreen")}
      />
    </SafeAreaView>
  );
};
