import { NavigationProp } from "@react-navigation/native";
import { TProduct } from "./types";

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
  item: TProduct;
};

export type RootStackParamList = {
  Anasayfa: undefined;
  Search: undefined;
  Personal: undefined;
  Gift: undefined;
  CategoryDetails: undefined;
  ProductDetails: ProductDetailsParams;
  Home: undefined;
  List: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
