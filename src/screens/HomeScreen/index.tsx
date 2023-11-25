import React from "react";
import Header from "../../components/HomeScreen/Header";
import { ScrollView } from "react-native";
import { BannerCarousel } from "src/components/HomeScreen/BannerCarousel";
import { MainCategories } from "src/components/HomeScreen/MainCategories";

MainCategories;

export default function HomeScreen() {
  return (
    <ScrollView className="h-full bg-grayBackground" stickyHeaderIndices={[0]}>
      <Header />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}
