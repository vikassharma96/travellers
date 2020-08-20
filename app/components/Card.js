import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";
// for image caching
// import { Image } from "react-native-expo-image-cache";

function Card({ name, phone, email, gender, onPress, thumbnailUrl }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Icon name={gender} />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={{ fontSize: 18 }} numberOfLines={1}>
            {name}
          </AppText>
          <AppText numberOfLines={1}>{phone}</AppText>
          <AppText numberOfLines={1}>{email}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightblue",
    overflow: "hidden",
    borderWidth: 1,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 15,
    borderColor: "lightblue",
    flexDirection: "row",
    flex: 1,
  },
  imageContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    padding: 15,
    flexDirection: "column",
    width: "70%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
