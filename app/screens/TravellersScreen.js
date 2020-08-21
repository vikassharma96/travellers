import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Button, TextInput } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import constants from "../utility/constants";
import useApi from "../hooks/useApi";
import travellersApi from "../api/travellers";
import routes from "../navigation/routes";
import { FontAwesome } from "@expo/vector-icons";
import Indicator from "../components/Indicator";

function TravellersScreen({ navigation }) {
  // const getTravellersApi = useApi(travellersApi.getTravellers);
  const [travellers, setTravellers] = useState([]);
  const [tempTravellers, setTempTravellers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // getTravellersApi.request();
    getTravellers();
  }, []);

  const getTravellers = async () => {
    setLoading(true);
    const response = await travellersApi.getTravellers();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setTravellers(response.data);
    setTempTravellers(response.data);
  };

  const searchTravellers = (value) => {
    const filteredTravellers = tempTravellers.filter((traveller) => {
      let filter = (
        traveller.first_name +
        " " +
        traveller.last_name
      ).toLowerCase();

      let search = value.toLowerCase();

      return filter.indexOf(search) > -1;
    });
    setTravellers(filteredTravellers);
  };

  return (
    <Screen>
      <AppText style={styles.header}>OUR Travellers</AppText>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="search"
            size={25}
            color={colors.light_blue}
            style={styles.icon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.light_blue}
            style={styles.input}
            onChangeText={(value) => searchTravellers(value)}
          />
        </View>
        {error && (
          <>
            <AppText>{constants.something_went_wrong}</AppText>
            <Button title="Retry" onPress={getTravellers} />
          </>
        )}
        <Indicator visible={loading} />
        <FlatList
          data={travellers}
          keyExtractor={(traveller) => traveller.id.toString()}
          renderItem={({ item }) => (
            <Card
              name={`${item.first_name} ${item.last_name}`}
              phone={item.phone_number}
              email={item.email}
              gender={`${item.gender}`.toLowerCase()}
              onPress={() =>
                navigation.navigate(routes.TRAVELLER_DETAILS, item)
              }
            />
          )}
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
  inputContainer: {
    flexDirection: "row",
    padding: 15,
    marginTop: 10,
    marginStart: 20,
    marginEnd: 20,
    borderWidth: 1,
    borderColor: colors.light_blue,
  },
  input: {
    flex: 1,
    marginStart: 10,
    fontSize: 18,
    fontFamily: "poppins-medium",
  },
});

export default TravellersScreen;
