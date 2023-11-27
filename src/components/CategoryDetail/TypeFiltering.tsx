import { Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const TypeBox = ({
  active,
  item,
  setCat,
}: {
  active: string;
  item: string;
  setCat: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      className="flex-row items-center px-2  rounded-lg py-2 mr-4"
      style={[
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#F0EFF7", borderWidth: 1 },
      ]}
    >
      <Text
        className="text-xs text-purple font-medium"
        style={[item == active && { color: "white" }]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export const TypeFiltering = () => {
  const [category, setCategory] = useState("Birlikte İyi Gider");
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      className="w-full bg-white flex-row px-4 py-4"
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox
            key={item + "iyi-gider"}
            setCat={setCategory}
            item={item}
            active={category}
          />
        )
      )}
    </ScrollView>
  );
};
