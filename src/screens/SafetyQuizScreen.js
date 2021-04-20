import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddContactIcon from 'react-native-vector-icons/AntDesign';
import AddContactIcon2 from 'react-native-vector-icons/MaterialIcons';
import SafeSpot from "../components/SafeSpot";
import { connect } from "react-redux";
import {colors} from "../styles/colors.js"
import SearchIcon from 'react-native-vector-icons/Fontisto';
import {AppLoading} from "expo"
import { 
  useFonts,
  Nunito_600SemiBold,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito'
import { 
  CoveredByYourGrace_400Regular 
} from '@expo-google-fonts/covered-by-your-grace'
import { 
  Quicksand_600SemiBold,
} from '@expo-google-fonts/quicksand'

const SafetyQuizScreen = (  {navigation}) =>{
  //TODO figure out props + nav
  console.log("this is navigation " + navigation);

  console.log(JSON.stringify(navigation, null, 4));

  let props = navigation.getParam('props','missing');
  console.log("this is props " + props);
  
  // Object.keys(props).forEach((prop)=> console.log(prop));
  console.log(JSON.stringify(props, null, 4));



  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [openBusinesses, setOpenBusinesses] = useState(false);
  const [policeStations, setPoliceStations] = useState(false);
  const [busySidewalks, setBusySidewalks] = useState(false);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    // Quicksand_400Regular,
    CoveredByYourGrace_400Regular,
    Quicksand_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      {/* <Text>Account</Text> */}
      <Text style={styles.header}>Set Up Your Route Preferences</Text>

      <Text style={styles.taskText}>
        1. What makes you feel safe when walking?
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

      <Text style={styles.taskText}>
        2. Enter the addresses of places you consider "Safe Spots"
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "75%",
          // backgroundColor: "white",
          // borderRadius: 20,
          // padding: 15,
          borderBottomColor: "white",
          borderBottomWidth: 2,
          // padding: 15,
          color: "white"
        }}
        placeholder={"Enter safe spots..."}
        placeholderTextColor = "#A2A2AB"
        onChangeText={(text) => {
          setSafePlaceInput(text);
        }}
        value={safePlaceInput}
      />
      {safePlaceInput != "" ? (
        <Button
          title="Add safe spot"
          onPress={() =>
            props.addSafeSpot({ name: safePlaceInput, address: "1 LMU Drive" })
          }></Button>
      ) : null}
      {props.safeSpots.map((safeSpot) => {
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
      {/* <View> */}
      <TouchableOpacity
        onPress={() => {
          objectifyAndNav(
            navigation,
            props,
            openBusinesses,
            policeStations,
            busySidewalks,
            safePlaceInput
          );
        }}
      >
        <AddContactIcon2 size={38} name="person-add" color="white" />
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
  }
};

function objectifyAndNav(
  navigation,
  props,
  openBusinesses,
  policeStations,
  busySidewalks,
  safePlaceInput
) {
  // add new items to our object
  props.set("busySidewalks", busySidewalks);
  props.set("openBusinesses", openBusinesses);
  props.set("policeStations", policeStations);
  props.set("safePlaces", safePlaceInput);

  // navigate to next page
  navigation.navigate("EmergencyContacts", { props: props });
}

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
    addSafeSpot: (newSafeSpot) => {
      dispatch({ type: "ADD_SAFE_SPOT", payload: newSafeSpot });
    },
    editSafeSpot: (id) => {
      dispatch({ type: "EDIT_SAFE_SPOT", payload: id });
    },
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
    fontSize: 28,
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    // marginVertical: 18,
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
    // margin: 8
  },
  checkOptions: {
    color: "#fff",
    // marginLeft: 10,
    fontSize: 14,
  },
  taskText: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 15,
    color: "#fff",
    fontFamily: "Nunito_400Regular",
    fontFamily: "Quicksand_400Regular"
  },
  inputStyle: {
    fontFamily: "Nunito_300Light"
  }
});
