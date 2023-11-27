import { NavigationProp } from "@react-navigation/native";
import { Product } from "./types";

export type ScreenNames = [
  "Anasayfa",
  "Search",
  "Personal",
  "Gift",
  "CategoryDetails",
  "ProductDetails",
  "Home",
  "List"
];
type ProductDetailsParams = {
  item: Product;
};

export type RootStackParamList = {
  Anasayfa: undefined;
  Search: undefined;
  Personal: undefined;
  Gift: undefined;
  CategoryDetails: undefined;
  ProductDetails: ProductDetailsParams; // ProductDetails ekranı için parametre türü
  Home: undefined;
  List: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
