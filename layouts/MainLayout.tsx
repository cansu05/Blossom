import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/color";

const MainLayout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={["top", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};
export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bone,
  },
});
