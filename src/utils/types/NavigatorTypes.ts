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
  "List",
  "CartScreen"
];
type ProductDetailsParams = {
  item: TProduct;
};

type CategoryDetailsParams = {
  id: number | string;
};

export type RootStackParamList = {
  Anasayfa: undefined;
  Search: undefined;
  Personal: undefined;
  Gift: undefined;
  CategoryDetails: CategoryDetailsParams;
  ProductDetails: ProductDetailsParams;
  Home: undefined;
  List: undefined;
  CartScreen: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;
