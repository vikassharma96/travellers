import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import useLocation from "../hooks/useLocation";
import AppTextInput from "../components/AppTextInput";
import constants from "../utility/constants";
import mail from "../hooks/mail";

function TravellerDetailsScreen({ route }) {
  const location = useLocation();
  const details = route.params;
  console.log(location);

  const handleDialer = () => {
    let number = details.phone_number;
    if (Platform.OS === "android") {
      number = `tel:${number}`;
    } else {
      number = `telprompt:${number}`;
    }
    Linking.openURL(number);
  };

  return (
    <Screen style={{ backgroundColor: "lightblue" }}>
      <AppText style={styles.header}>Traveller Details</AppText>
      <View style={styles.imageContainer}>
        <Icon name={`${details.gender}`.toLowerCase()} size={120} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <AppTextInput defaultValue={details.first_name} icon="user" />
          <AppTextInput defaultValue={location} icon="map-marker" />
          <AppTextInput defaultValue={details.email} icon="envelope-open" />
          <AppTextInput defaultValue={details.phone_number} icon="phone" />
          <AppTextInput isPassword={true} defaultValue="12345" icon="lock" />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.light_blue,
            width: "50%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleDialer}
        >
          <AppText style={{ color: "white" }}>{constants.call}</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.light_red,
            width: "50%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => mail.sendMail(details.email)}
        >
          <AppText style={{ color: "white" }}>{constants.email}</AppText>
        </TouchableOpacity>
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
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    marginStart: 8,
    marginEnd: 8,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingStart: 40,
    paddingEnd: 40,
  },
  bottomContainer: {
    flexDirection: "row",
    backgroundColor: colors.dark_blue,
    height: 70,
    width: "100%",
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default TravellerDetailsScreen;
