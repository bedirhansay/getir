import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "utils/types/NavigatorTypes";
import { useContexData } from "hooks/useContex";
import { getCart } from "utils/api/api";

const CartBox = () => {
  const navigation = useNavigation<StackNavigation>();
  const { cart, totalPrice } = useContexData();

  const { width } = Dimensions.get("window");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CartScreen")}
      style={{
        width: width * 0.22,
        height: 33,
        backgroundColor: "white",
        marginRight: width * 0.03,
        borderRadius: 9,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 23, height: 23, marginLeft: 6 }}
        source={require("../../assets/cart.png")}
      />
      <View style={{ width: 5, height: 30, backgroundColor: "white" }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#F3EFFE",
          height: 30,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {totalPrice?.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartBox;
