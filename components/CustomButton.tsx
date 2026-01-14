import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/color";

const CustomButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    color: "white",
    backgroundColor: GlobalStyles.colors.green,
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 16,
    fontFamily: "Habibi",
  },
});
