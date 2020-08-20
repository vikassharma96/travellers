import React from "react";
import { View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ name, size = 70, iconColor = colors.white }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: colors.dark_blue,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.light_blue,
      }}
    >
      <Fontisto name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
