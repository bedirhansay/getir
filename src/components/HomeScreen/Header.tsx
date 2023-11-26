import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between bg-yellow h-14">
      <View className="bg-white w-3/4 px-2 rounded-r-full flex-row h-14 items-center">
        <Image
          className="w-10 h-10 mr-2"
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View className="flex flex-row w-3/4 justify-between items-center border-l-2 border-gray-200">
          <Text className="font-semibold mr-2 ml-2">Ev</Text>
          <Text className="text-xs">Dedepaşa Blv. Yenişehir...</Text>
          <Entypo name="chevron-right" color={Colors.purple} size={24} />
        </View>
      </View>
      <View className="items-center justify-center w-1/5 mr-2">
        <Text className="text-xs font-semibold text-purple">TVS</Text>
        <Text className="text-purple font-bold text-lg">13 dk</Text>
      </View>
    </View>
  );
}
