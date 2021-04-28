import React, { useState } from "react";
import { colors } from "../styles/colors.js";
import { AppLoading } from "expo";
import { TouchableOpacity } from "react-native-gesture-handler";
import MenuIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import EmergencyContact from "../components/EmergencyContact";
import LogOutButton from "../components/LogOutButton";
import SafeSpot from "../components/SafeSpot";
import { CoveredByYourGrace_400Regular } from "@expo-google-fonts/covered-by-your-grace";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { addSafeSpot } from "../../firebase/firebase.util.js";

const AccountScreen = (props) => {
  const [crimeRates, setCrimeRates] = useState(false);
  const [walkScore, setWalkScore] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [enterNewSafeSpot, setEnterNewSafeSpot] = useState(false);
  const [safePlaceNameInput, setSafePlaceNameInput] = useState("");
  const [safePlaceAddressInput, setSafePlaceAddressInput] = useState("");
  let [fontsLoaded] = useFonts({
    CoveredByYourGrace_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: "#010068" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: "relative",
            left: 0,
            top: 10,
            borderRadius: 5,
            backgroundColor: colors.tertiaryBlue,
            borderColor: colors.backgroundColor,
            borderWidth: 3,
            width: 47,
            height: 47,
            marginBottom: 10,
            marginLeft: 7,
            justifyContent: "center",
            alignItems: "center",
          }}
          // onPress={() => props.navigation.openDrawer()}
        >
          <MenuIcon size={35} color="white" name="menu" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text
            style={{
              fontFamily: "CoveredByYourGrace_400Regular",
              fontSize: 40,
              color: "white",
              marginTop: 20,
            }}
          >
            Account Settings
          </Text>
          <Text style={styles.header}>Route Preferences</Text>
          <Text style={styles.taskText}>
            What makes you feel safe when walking?
          </Text>
          <View style={styles.check}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() =>
                props.updateWalkscorePreferences(!props.user.walkScore)
              }
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={
                  props.user.walkScore ? "check-box" : "check-box-outline-blank"
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
              }}
              onPress={() =>
                props.updateStreetlightPreferences(!props.user.lighting)
              }
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={
                  props.user.lighting ? "check-box" : "check-box-outline-blank"
                }
              />
            </TouchableOpacity>
            <Text style={styles.checkOptions}>Streetlights</Text>
          </View>
          <View style={styles.check}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() =>
                props.updateConstructionPreferences(!props.user.construction)
              }
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={
                  props.user.construction
                    ? "check-box"
                    : "check-box-outline-blank"
                }
              />
            </TouchableOpacity>
            <Text style={styles.checkOptions}>Active Construction Sites</Text>
          </View>
          <View style={styles.check}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() =>
                props.updateCrimeRatePreferences(!props.user.crimeRates)
              }
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={
                  props.user.crimeRates
                    ? "check-box"
                    : "check-box-outline-blank"
                }
              />
            </TouchableOpacity>
            <Text style={styles.checkOptions}>Crime Rates</Text>
          </View>
          <Text style={styles.header}>Safe Spots</Text>
          {enterNewSafeSpot ? (
            <View>
              <TextInput
                style={{
                  height: 40,
                  width: 220,
                  backgroundColor: "white",
                  borderRadius: 22,
                  padding: 8,
                  marginBottom: 25,
                  marginTop: 14,
                  alignSelf: "center",
                }}
                placeholder={"Enter location name"}
                onChangeText={(text) => {
                  setSafePlaceNameInput(text);
                }}
                value={safePlaceNameInput}
              />
              <TextInput
                style={{
                  height: 40,
                  width: 320,
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 15,
                  marginBottom: 30,
                  alignSelf: "center",
                  padding: 8,
                }}
                placeholder={"Enter address"}
                onChangeText={(text) => {
                  setSafePlaceAddressInput(text);
                }}
                value={safePlaceAddressInput}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 30,
                  // justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => {
                    props.addSafeSpot({
                      name: safePlaceNameInput,
                      address: safePlaceAddressInput,
                    });
                    addSafeSpot(props.user.username, {
                      name: safePlaceNameInput,
                      address: safePlaceAddressInput,
                    });
                    setSafePlaceAddressInput("");
                    setSafePlaceNameInput("");
                    setEnterNewSafeSpot(!enterNewSafeSpot);
                  }}
                >
                  <Text style={styles.textStyle}>Save new safe spot</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => {
                    setSafePlaceAddressInput("");
                    setSafePlaceNameInput("");
                    setEnterNewSafeSpot(!enterNewSafeSpot);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
        <View style={styles.safeSpotContainer}>
          {enterNewSafeSpot ? null : (
            <TouchableOpacity
              style={styles.addSafeSpotBtn}
              onPress={() => setEnterNewSafeSpot(!enterNewSafeSpot)}
            >
              <Text style={styles.btnText}>Add safe spot</Text>
            </TouchableOpacity>
          )}
          {props.safeSpots.safeSpots.map((safeSpot) => {
            return (
              <SafeSpot
                props={{
                  name: safeSpot.name,
                  address: safeSpot.address,
                  deleteSafeSpot: props.deleteSafeSpot,
                  editSafeSpot: props.editSafeSpot,
                  user: props.user.username,
                }}
              />
            );
          })}
        </View>
        <Text style={styles.contactHeader}>Emergency Contacts</Text>
        {console.log(props.emergencyContacts.emergencyContacts)}
        {props.emergencyContacts.emergencyContacts.map((contact) => {
          return (
            <View style={styles.safeSpotContainer}>
              <EmergencyContact
                props={{
                  name: contact.name,
                  number: contact.number,
                  deleteEmergencyContact: props.deleteEmergencyContact,
                  editEmergencyContact: props.editEmergencyContact,
                  user: props.user.username,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    safeSpots: state.safeSpots,
    emergencyContacts: state.emergencyContacts,
    user: state.emergencyContacts.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteSafeSpot: (id) => {
      dispatch({ type: "DELETE_SAFE_SPOT", id: id });
    },
    deleteEmergencyContact: (contact) => {
      dispatch({ type: "DELETE_EMERGENCY_CONTACT", id: contact });
    },
    addSafeSpot: (newSafeSpot) => {
      dispatch({ type: "ADD_SAFE_SPOT", payload: newSafeSpot });
    },
    editSafeSpot: (id) => {
      dispatch({ type: "EDIT_SAFE_SPOT", payload: id });
    },
    editEmergencyContact: (id) => {
      dispatch({ type: "EDIT_EMERGENCY_CONTACT", payload: id });
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
export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    textAlign: "center",
    alignItems: "center",
  },
  safeSpotContainer: {
    width: "85%",
    alignSelf: "center",
    marginHorizontal: 20,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 38,
    fontFamily: "Quicksand_600SemiBold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textShadowColor: "#F2EB46",
  },
  contactHeader: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 38,
    fontFamily: "Quicksand_600SemiBold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textShadowColor: "#F2EB46",
    marginBottom: 15,
  },
  taskText: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontFamily: "Quicksand_600SemiBold",
    marginTop: 24,
    color: "#fff",
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
    fontFamily: "Quicksand_600SemiBold",
  },
  addSafeSpotBtn: {
    borderRadius: 40,
    backgroundColor: "#30C5F4",
    color: "white",
    padding: 12,
    alignItems: "center",
    marginBottom: 18,
  },
  btnText: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 16,
  },
  editBtn: {
    borderRadius: 40,
    backgroundColor: "#30C5F4",
    color: "white",
    padding: 12,
    width: 170,
    alignItems: "center",
    fontSize: 16,
    marginLeft: 15,
  },
  cancelBtn: {
    borderRadius: 40,
    backgroundColor: "#F94545",
    color: "white",
    padding: 12,
    width: 100,
    alignItems: "center",
    fontSize: 16,
    marginLeft: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Quicksand_700Bold",
  },
});
