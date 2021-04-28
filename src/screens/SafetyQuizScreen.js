import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddContactIcon from "react-native-vector-icons/MaterialIcons";
import AddSafeSpotIcon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/colors.js";
import { AppLoading } from "expo";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import { CoveredByYourGrace_400Regular } from "@expo-google-fonts/covered-by-your-grace";
import {
  Quicksand_400Regular,
  Quicksand_600SemiBold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import SafeSpot from "../components/SafeSpot.js";

const SafetyQuizScreen = (props) => {
  const [safePlaceNameInput, setSafePlaceNameInput] = useState("");
  const [safePlaceAddressInput, setSafePlaceAddressInput] = useState("");
  const [construction, setConstruction] = useState(false);
  const [crimeRate, setCrimeRate] = useState(false);
  const [walkscore, setWalkscore] = useState(false);
  const [safeSpots, setSafeSpots] = useState(false);
  const [streetlights, setStreetlights] = useState(false);
  const [enterNewSafeSpot, setEnterNewSafeSpot] = useState(false);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Quicksand_400Regular,
    CoveredByYourGrace_400Regular,
    Quicksand_600SemiBold,
    Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {console.log("PROPS", props)}
        <ScrollView>
          <Text style={styles.header}>Set Route Preferences</Text>
          <Text style={styles.taskText}>
            1. What makes you feel safe when walking?
          </Text>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.check}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
                onPress={() => {
                  props.updateConstructionPreferences(!construction);
                  setConstruction(!construction);
                }}
              >
                <Icon
                  size={30}
                  color={"#FFFFFF"}
                  name={
                    props.userData.construction
                      ? "check-box"
                      : "check-box-outline-blank"
                  }
                />
              </TouchableOpacity>
              <Text style={styles.checkOptions}>Construction</Text>
            </View>
            <View style={styles.check}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
                onPress={() => {
                  props.updateCrimeRatePreferences(!crimeRate);
                  setCrimeRate(!crimeRate);
                }}
              >
                <Icon
                  size={30}
                  color={"#FFFFFF"}
                  name={
                    props.userData.crimeRates
                      ? "check-box"
                      : "check-box-outline-blank"
                  }
                />
              </TouchableOpacity>
              <Text style={styles.checkOptions}>Crime Rate</Text>
            </View>
            <View style={styles.check}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
                onPress={() => {
                  props.updateWalkscorePreferences(!walkscore);
                  setWalkscore(!walkscore);
                }}
              >
                <Icon
                  size={30}
                  color={"#FFFFFF"}
                  name={
                    props.userData.walkScore
                      ? "check-box"
                      : "check-box-outline-blank"
                  }
                />
              </TouchableOpacity>
              <Text style={styles.checkOptions}>Walkscore</Text>
            </View>
            <View style={styles.check}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
                onPress={() => {
                  props.updateStreetlightPreferences(!streetlights);
                  setStreetlights(!streetlights);
                }}
              >
                <Icon
                  size={30}
                  color={"#FFFFFF"}
                  name={
                    props.userData.lighting
                      ? "check-box"
                      : "check-box-outline-blank"
                  }
                />
              </TouchableOpacity>
              <Text style={styles.checkOptions}>Streetlights</Text>
            </View>
          </View>
          <Text style={styles.taskText}> 2. Set Up Your "Safe Spots" </Text>
          {enterNewSafeSpot ? (
            <View style={{ alignSelf: "center" }}>
              <TextInput
                style={{
                  height: 40,
                  width: 270,
                  borderBottomColor: "white",
                  borderBottomWidth: 2,
                  color: "white",
                  marginBottom: 20,
                  fontFamily: "Quicksand_400Regular",
                }}
                placeholder={"Enter safe spot name..."}
                placeholderTextColor="#A2A2AB"
                onChangeText={(text) => {
                  setSafePlaceNameInput(text);
                }}
                value={safePlaceNameInput}
              />
              <TextInput
                style={{
                  height: 40,
                  width: 270,
                  borderBottomColor: "white",
                  borderBottomWidth: 2,
                  color: "white",
                  fontFamily: "Quicksand_400Regular",
                }}
                placeholder={"Enter safe spot address..."}
                placeholderTextColor="#A2A2AB"
                onChangeText={(text) => {
                  setSafePlaceAddressInput(text);
                }}
                value={safePlaceAddressInput}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 15,
                }}
              >
                <Button
                  title="Save"
                  color="#30C5F4"
                  onPress={() => {
                    setEnterNewSafeSpot(false);
                    props.addSafeSpot({
                      name: safePlaceNameInput,
                      address: safePlaceAddressInput,
                    });
                    setSafePlaceAddressInput("");
                    setSafePlaceNameInput("");
                  }}
                />
                <Button
                  title="Cancel"
                  color="#F94545"
                  onPress={() => {
                    setEnterNewSafeSpot(false);
                    setSafePlaceAddressInput("");
                    setSafePlaceNameInput("");
                  }}
                />
              </View>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setEnterNewSafeSpot(true)}>
              <AddSafeSpotIcon
                size={38}
                name="add-location"
                color="white"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          )}
          {props.safeSpots.safeSpots.length === 0
            ? null
            : props.safeSpots.safeSpots.map((safeSpot) => {
                return (
                  <SafeSpot
                    props={{
                      name: safeSpot.name,
                      address: safeSpot.address,
                      deleteSafeSpot: props.deleteSafeSpot,
                      editSafeSpot: props.editSafeSpot,
                    }}
                  />
                );
              })}
          <Text style={styles.taskText}>3. Set up Emergency Contacts</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Emergency Contacts");
            }}
          >
            <AddContactIcon
              size={38}
              name="person-add"
              color="white"
              style={{ alignSelf: "center", marginBottom: 55 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSafeSpot: (newSafeSpot) => {
      dispatch({ type: "ADD_SAFE_SPOT", payload: newSafeSpot });
    },
    deleteSafeSpot: (id) => {
      dispatch({ type: "DELETE_SAFE_SPOT", id: id });
    },
    editSafeSpot: (id) => {
      dispatch({ type: "EDIT_SAFE_SPOT", payload: id });
    },
    updateConstructionPreferences: (id) => {
      dispatch({ type: "UPDATE_CONSTRUCTION_PREFERENCES", payload: id });
    },
    updateCrimeRatePreferences: (id) => {
      dispatch({ type: "UPDATE_CRIME_RATE_PREFERENCES", payload: id });
    },
    updateWalkscorePreferences: (id) => {
      dispatch({ type: "UPDATE_WALKSCORE_PREFERENCES", payload: id });
    },
    updateStreetlightPreferences: (id) => {
      dispatch({ type: "UPDATE_STREETLIGHT_PREFERENCES", payload: id });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    safeSpots: state.safeSpots,
    userData: state.emergencyContacts.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SafetyQuizScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    textAlign: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 29,
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 40,
    fontFamily: "Quicksand_600SemiBold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textShadowColor: "#F2EB46",
  },
  check: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    color: "#fff",
  },
  checkOptions: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Quicksand_500Medium",
    paddingLeft: 5,
  },
  taskText: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 18,
    color: "#fff",
    fontFamily: "Quicksand_600SemiBold",
  },
  inputStyle: {
    fontFamily: "Nunito_300Light",
    fontFamily: "Quicksand_400Regular",
  },
});