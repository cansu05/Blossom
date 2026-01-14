import { FlatList, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import PlantsListItem from "../components/PlantsListItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchPlants } from "../store/plants/plantsSlice";
import { GlobalStyles } from "../constants/color";

const FavoritesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const plants = useSelector((state: RootState) => state.plants.items);
  const status = useSelector((state: RootState) => state.plants.status);
  const favoritesIds = useSelector((state: RootState) => state.favorites.ids);

  const filteredPlants = plants.filter((plant) =>
    favoritesIds.includes(plant.id)
  );

  const count = filteredPlants.length;
  const numColumns = count % 2 === 1 ? 1 : 2;

  useEffect(() => {
    if (status === "idle") dispatch(fetchPlants());
  }, [status, dispatch]);

  return (
    <MainLayout>
      <Header title="Your Favorites" />

      <FlatList
        data={filteredPlants}
        key={numColumns}
        numColumns={2}
        renderItem={({ item }) => (
          <PlantsListItem item={item} fullWidth={numColumns === 1} />
        )}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 80,
          flexGrow: 1,
        }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 24,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: GlobalStyles.colors.text,
                fontFamily: "Habibi_400Regular",
              }}
            >
              Add plants to start your collection 🌿
            </Text>
          </View>
        }
      />
    </MainLayout>
  );
};

export default FavoritesScreen;
