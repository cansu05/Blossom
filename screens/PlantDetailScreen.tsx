import { Image, StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DetailRouteProp } from "../types/navigate";
import Header from "../components/Header";
import { GlobalStyles } from "../constants/color";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FeaturesItem from "../components/FeaturesItem";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { toggleAddMyPlant } from "../store/myPlants/myPlantsSlice";

const PlantDetailScreen = () => {
  const { id } = useRoute<DetailRouteProp>().params;
  const navigation = useNavigation<any>();
  const plants = useSelector((state: RootState) => state.plants.items);
  const myPlantsIds = useSelector((state: RootState) => state.myPlants.ids);
  const dispatch = useDispatch<AppDispatch>();

  const plantDetail = plants.find((plant) => plant.id === id);

  const isMyPlant = myPlantsIds.includes(id);

  if (!plantDetail) {
    return (
      <MainLayout>
        <Header title="Plant not found" showBackButton onPress={handlePress} />
        <Text>Plant not found</Text>
      </MainLayout>
    );
  }

  function handlePress() {
    navigation.goBack();
  }

  function handleAddToMyPlants() {
    dispatch(toggleAddMyPlant(id));
    if (!isMyPlant) {
      navigation.navigate("Tabs", {
        screen: "MyPlants",
      });
    }
  }

  return (
    <MainLayout>
      <Header
        title={plantDetail.name}
        showBackButton={true}
        onPress={handlePress}
      />
      <View style={styles.detailContainer}>
        <View style={styles.infoContainer}>
          <Image style={styles.image} source={plantDetail.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{plantDetail.name}</Text>
            <Text style={styles.description}>{plantDetail.description}</Text>
          </View>
        </View>
        <View style={styles.featuresContainer}>
          <View style={styles.features}>
            <FeaturesItem featureText={plantDetail.light} iconName="sunny" />
            <FeaturesItem featureText={plantDetail.water} iconName="water" />
            <View style={styles.feature}>
              <MaterialIcons
                name="pets"
                size={22}
                color={GlobalStyles.colors.green}
              />
              <Text>{plantDetail.petFriendly}</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <CustomButton
              onPress={handleAddToMyPlants}
              text={isMyPlant ? "Remove from my plants" : "Add to my plants"}
            />
          </View>
        </View>
      </View>
    </MainLayout>
  );
};
export default PlantDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 16,
  },
  detailContainer: {
    flex: 1,
    gap: 20,
  },
  infoContainer: {
    overflow: "hidden",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 16,
  },
  textContainer: {
    gap: 6,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: GlobalStyles.colors.text,
    fontFamily: "Habibi",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    color: GlobalStyles.colors.text,
    fontFamily: "Habibi",
  },
  featuresContainer: {
    backgroundColor: GlobalStyles.colors.milk,
    width: "100%",
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 30,
    justifyContent: "space-around",
  },
  features: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  feature: {
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
    paddingHorizontal: 16,
  },
});
