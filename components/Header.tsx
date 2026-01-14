import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/color";
import { Ionicons } from "@expo/vector-icons";

const Header = ({
  title,
  showBackButton = false,
  onPress,
}: {
  title: string;
  showBackButton?: boolean;
  onPress?: () => void;
}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/leaves.png")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {showBackButton && (
        <Pressable onPress={onPress}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={GlobalStyles.colors.text}
          />
        </Pressable>
      )}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bone,
  },
  image: {
    width: 40,
    height: 40,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: GlobalStyles.colors.text,
    fontFamily: "Habibi",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
