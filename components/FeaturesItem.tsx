import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/color";
import { ComponentProps } from "react";

const FeaturesItem = ({
  featureText,
  iconName,
}: {
  featureText: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
}) => {
  return (
    <View style={styles.feature}>
      <Ionicons name={iconName} size={22} color={GlobalStyles.colors.green} />
      <Text> {featureText}</Text>
    </View>
  );
};
export default FeaturesItem;

const styles = StyleSheet.create({
  feature: {
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
});
