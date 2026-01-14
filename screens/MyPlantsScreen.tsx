import { FlatList, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import PlantsListItem from "../components/PlantsListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { GlobalStyles } from "../constants/color";

const MyPlantsScreen = () => {
  const plants = useSelector((state: RootState) => state.plants.items);
  const myPlantsIds = useSelector((state: RootState) => state.myPlants.ids);

  const filteredPlants = plants.filter((plant) =>
    myPlantsIds.includes(plant.id)
  );

  const count = filteredPlants.length;
  const numColumns = count % 2 === 1 ? 1 : 2;
  return (
    <MainLayout>
      <Header title="Your Plants" />

      <FlatList
        data={filteredPlants}
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
              You don’t have any plants yet 🌿
            </Text>
          </View>
        }
      />
    </MainLayout>
  );
};
export default MyPlantsScreen;
