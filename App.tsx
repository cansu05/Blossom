import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DiscoverScreen from "./screens/DiscoverScreen";
import MyPlantsScreen from "./screens/MyPlantsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { GlobalStyles } from "./constants/color";
import { useFonts } from "expo-font";
import PlantDetailScreen from "./screens/PlantDetailScreen";
import { ComponentProps } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName: ComponentProps<typeof Ionicons>["name"];

          if (route.name === "Discover") {
            iconName = focused ? "leaf" : "leaf-outline";
          } else if (route.name === "MyPlants") {
            iconName = focused ? "water" : "water-outline";
          } else {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgba(255,255,255,0.6)",
        tabBarLabelStyle: { fontSize: 11 },
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 12,
          backgroundColor: GlobalStyles.colors.green,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          position: "absolute",
          overflow: "hidden",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen name="MyPlants" component={MyPlantsScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Habibi: require("./assets/Habibi/Habibi-Regular.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bone,
  },
});
