import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type TabParamList = {
  Discover: undefined;
  MyPlants: undefined;
  Favorites: undefined;
};

export type RootStackParamList = {
  Tab: NavigatorScreenParams<TabParamList>;
  PlantDetail: { id: string };
};

export type TabNavProp = BottomTabNavigationProp<TabParamList>;

export type DetailNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "PlantDetail"
>;
export type DetailRouteProp = RouteProp<RootStackParamList, "PlantDetail">;
