import { FlatList, RefreshControl, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import PlantsListItem from "../components/PlantsListItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchPlants } from "../store/plants/plantsSlice";
import { GlobalStyles } from "../constants/color";

const DiscoverScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const plants = useSelector((state: RootState) => state.plants.items);
  const status = useSelector((state: RootState) => state.plants.status);

  useEffect(() => {
    if (status === "idle") dispatch(fetchPlants());
  }, [status, dispatch]);

  const refreshing = status === "loading";

  const onRefresh = () => {
    dispatch(fetchPlants());
  };

  const count = plants.length;
  const numColumns = count % 2 === 1 ? 1 : 2;

  return (
    <MainLayout>
      <Header title="Discover Your Plants" />

      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <PlantsListItem item={item} fullWidth={numColumns === 1} />
        )}
        key={numColumns}
        numColumns={2}
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
              We couldn’t find any plants 🌱
            </Text>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </MainLayout>
  );
};
export default DiscoverScreen;
