import React, { useState } from "react";
import { colors } from "../styles/colors.js";
import { AppLoading } from "expo";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  // ShadowPropTypesIOS,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import EmergencyContact from "../components/EmergencyContact";
import SafeSpot from "../components/SafeSpot";
import { CoveredByYourGrace_400Regular } from "@expo-google-fonts/covered-by-your-grace";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const AccountScreen = (props) => {
  const [openBusinesses, setOpenBusinesses] = useState(false);
  const [policeStations, setPoliceStations] = useState(false);
  const [busySidewalks, setBusySidewalks] = useState(false);
  const [safePlaceInput, setSafePlaceInput] = useState("");
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
              onPress={() => setOpenBusinesses(!openBusinesses)}
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={openBusinesses ? "check-box" : "check-box-outline-blank"}
              />
            </TouchableOpacity>
            <Text style={styles.checkOptions}>Open Businesses</Text>
          </View>
          <View style={styles.check}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setPoliceStations(!policeStations)}
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={policeStations ? "check-box" : "check-box-outline-blank"}
              />
            </TouchableOpacity>
            <Text style={styles.checkOptions}>Police Stations</Text>
          </View>
          <View style={styles.check}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setBusySidewalks(!busySidewalks)}
            >
              <Icon
                size={30}
                color={"#FFFFFF"}
                name={busySidewalks ? "check-box" : "check-box-outline-blank"}
              />
            </TouchableOpacity>
            <Text style={styles.checkOptions}>Busy Sidewalks</Text>
          </View>
          <Text style={styles.header}>Safe Spots</Text>
          <TextInput
            style={{
              height: 40,
              width: "90%",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 15,
              marginBottom: 30,
              marginTop: 10,
            }}
            placeholder={"Enter new safe spot..."}
            onChangeText={(text) => {
              setSafePlaceInput(text);
            }}
            value={safePlaceInput}
          />
        </View>
        <View style={styles.safeSpotContainer}>
          {safePlaceInput != "" ? (
            <Button
              title="Add safe spot"
              onPress={() =>
                props.addSafeSpot({
                  name: safePlaceInput,
                  address: "1 LMU Drive",
                })
              }
            ></Button>
          ) : null}
          {props.safeSpots.safeSpots.map((safeSpot) => {
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
        </View>
        <Text style={styles.header}>Emergency Contacts</Text>
        {/* {props.emergencyContacts.contacts.map((contact) => {
          return (
            <EmergencyContact
              props={{
                name: contact.name,
                number: contact.phoneNumber,
                deleteEmergencyContact: props.deleteEmergencyContact,
                editEmergencyContact: props.editEmergencyContact,
              }}
            />
          );
        })} */}
      </ScrollView>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    safeSpots: state.safeSpots,
    emergencyContacts: state.emergencyContacts,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    // backgroundColor: "#CBC3E3",
    textAlign: "center",
    alignItems: "center",
  },
  safeSpotContainer: {
    // backgroundColor: "orange",
    width: "85%",
    alignSelf: "center",
    marginHorizontal: 20,
  },
  header: {
    fontSize: 25,
    // padding: 10,
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
  taskText: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontFamily: "Quicksand_600SemiBold",
    // lineHeight: 24,
    marginTop: 24,
    color: "#fff",
  },
  check: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    color: "#fff",
    // margin: 8
  },
  checkOptions: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Quicksand_600SemiBold",
  },
});
