import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
// import AddContactIcon from "react-native-vector-icons/AntDesign";
import AddContactIcon2 from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/colors.js";
// import SearchIcon from "react-native-vector-icons/Fontisto";
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
} from "@expo-google-fonts/quicksand";
const SafetyQuizScreen = ({ navigation }) => {
  let object = navigation.getParam("object", "missing");
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [crimeRates, setCrimeRates] = useState(false);
  const [walkScore, setWalkScore] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [construction, setConstruction] = useState(false);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Quicksand_400Regular,
    CoveredByYourGrace_400Regular,
    Quicksand_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Set Route Preferences</Text>
        <Text style={styles.taskText}>
          1. What information is important to you?
        </Text>
        <View style={styles.check}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setCrimeRates(!crimeRates)}>
            <Icon
              size={30}
              color={"#FFFFFF"}
              name={crimeRates ? "check-box" : "check-box-outline-blank"}
            />
          </TouchableOpacity>
          <Text style={styles.checkOptions}>Crime Rates</Text>
        </View>
        <View style={styles.check}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setWalkScore(!walkScore)}>
            <Icon
              size={30}
              color={"#FFFFFF"}
              name={walkScore ? "check-box" : "check-box-outline-blank"}
            />
          </TouchableOpacity>
          <Text style={styles.checkOptions}>Walk Score</Text>
        </View>
        <View style={styles.check}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setLighting(!lighting)}>
            <Icon
              size={30}
              color={"#FFFFFF"}
              name={lighting ? "check-box" : "check-box-outline-blank"}
            />
          </TouchableOpacity>
          <Text style={styles.checkOptions}>Lighting</Text>
        </View>
        <View style={styles.check}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setConstruction(!construction)}>
            <Icon
              size={30}
              color={"#FFFFFF"}
              name={construction ? "check-box" : "check-box-outline-blank"}
            />
          </TouchableOpacity>
          <Text style={styles.checkOptions}>Construction</Text>
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
            color: "white",
          }}
          placeholder={"Enter safe spots..."}
          placeholderTextColor="#A2A2AB"
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
              crimeRates,
              walkScore,
              lighting,
              construction,
              safePlaceInput
            );
          }}>
          <AddContactIcon2 size={38} name="person-add" color="white" />
          {/* </View> */}
        </TouchableOpacity>
      </View>
    );
  }
};
function objectifyAndNav(
  navigation,
  object,
  crimeRates,
  walkScore,
  lighting,
  construction,
  safePlaceInput
) {
  // add new items to our object
  object.set("lighting", lighting);
  object.set("crimeRates", crimeRates);
  object.set("walkScore", walkScore);
  object.set("construction", construction);
  object.set("safePlaces", safePlaceInput);
  // navigate to next page
  navigation.navigate("Emergency Contacts", { object: object });
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
    fontSize: 29,
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
    fontSize: 15,
    fontFamily: "Quicksand_400Regular",
    // fontFamily: "Quicksand_600SemiBold",
  },
  taskText: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 18,
    color: "#fff",
    fontFamily: "Nunito_400Regular",
    fontFamily: "Quicksand_400Regular",
    fontFamily: "Quicksand_600SemiBold",
  },
  inputStyle: {
    fontFamily: "Nunito_300Light",
    fontFamily: "Quicksand_400Regular",
  },
});