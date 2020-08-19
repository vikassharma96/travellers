import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";

function TravellersScreen() {
  return (
    <Screen>
      <AppText style={styles.header}>OUR Travellers</AppText>
      <View style={styles.container}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="search"
          keyboardType="email-address"
          width="90%"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    color: colors.light_blue,
    fontSize: 25,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
  },
});

export default TravellersScreen;
