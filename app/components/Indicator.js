import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../config/colors";

function Indicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size={"large"} color={colors.light_blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default Indicator;
