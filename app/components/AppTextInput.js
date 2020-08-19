import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, { flex: 1 }]}
        {...otherProps}
      />
      {icon && (
        <FontAwesome
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    padding: 15,
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
