import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddContactIcon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/colors.js";

const SafetyQuizScreen = ({ navigation }) => {
  let object = navigation.getParam("object", "missing");
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [openBusinesses, setOpenBusinesses] = useState(false);
  const [policeStations, setPoliceStations] = useState(false);
  const [busySidewalks, setBusySidewalks] = useState(false);

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
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
        }}
        placeholder={"Enter safe spots..."}
        onChangeText={(text) => {
          setSafePlaceInput(text);
        }}
        value={safePlaceInput}
      />

      <Text style={styles.taskText}>3. Set up Emergency Contacts</Text>
      {/* <View> */}
      <TouchableOpacity
        onPress={() => {
          objectifyAndNav(
            navigation,
            object,
            openBusinesses,
            policeStations,
            busySidewalks,
            safePlaceInput
          );
        }}
      >
        <AddContactIcon size={38} name="person-add" color="white" />
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

function objectifyAndNav(
  navigation,
  object,
  openBusinesses,
  policeStations,
  busySidewalks,
  safePlaceInput
) {
  // add new items to our object
  object.set("busySidewalks", busySidewalks);
  object.set("openBusinesses", openBusinesses);
  object.set("policeStations", policeStations);
  object.set("safePlaces", safePlaceInput);

  // navigate to next page
  navigation.navigate("EmergencyContacts", { object: object });
}

export default SafetyQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    textAlign: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    // marginVertical: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 34,

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
  },
});
