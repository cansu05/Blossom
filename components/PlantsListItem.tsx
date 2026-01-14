import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Plant } from "../types/plants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { toggleFavorite } from "../store/favorites/favoritesSlice";

const PlantsListItem = ({
  item,
  fullWidth,
}: {
  item: Plant;
  fullWidth?: boolean;
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();
  const favoritesIds = useSelector((state: RootState) => state.favorites.ids);

  const isFav = favoritesIds.includes(item.id);
  function handlePress() {
    navigation.navigate("PlantDetail", { id: item.id });
  }
  function handleFavorite() {
    dispatch(toggleFavorite(item.id));
  }

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        fullWidth && styles.fullWidth,
      ]}
    >
      {/* Image wrapper */}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item.image} />

        <Pressable
          onPress={handleFavorite}
          hitSlop={10}
          style={({ pressed }) => [
            styles.heartIcon,
            pressed && { opacity: 0.6 },
          ]}
        >
          <Ionicons
            name={isFav ? "heart" : "heart-outline"}
            size={18}
            color={GlobalStyles.colors.text}
          />
        </Pressable>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default PlantsListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    borderRadius: 16,
    marginBottom: 12,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 16,
  },
  heartIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 6,
    borderRadius: 20,
  },
  info: {
    position: "absolute",
    bottom: 0,
    backgroundColor: GlobalStyles.colors.milk,
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    width: "100%",
  },
  title: {
    fontSize: 14,
    color: GlobalStyles.colors.text,
    fontFamily: "Habibi_400Regular",
  },
  pressed: {
    opacity: 0.7,
  },
  fullWidth: {
    flex: 0,
    width: "50%",
  },
});
