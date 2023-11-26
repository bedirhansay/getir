import React from "react";
import Header from "../../components/HomeScreen/Header";
import { ScrollView } from "react-native";
import { BannerCarousel, MainCategories } from "components";

export const HomeScreen = () => {
  return (
    <ScrollView className="h-full bg-grayBackground" stickyHeaderIndices={[0]}>
      <Header />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};
