import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({
  isPassword = false,
  defaultValue,
  icon,
  width = "100%",
  ...otherProps
}) {
  console.log(defaultValue);
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <FontAwesome
          name={icon}
          size={25}
          color={colors.light_blue}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        defaultValue={defaultValue}
        editable={false}
        secureTextEntry={isPassword}
        numberOfLines={1}
        selection={{ start: 0 }}
        style={[
          defaultStyles.text,
          { flex: 1, marginStart: 10, marginEnd: 10 },
        ]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
