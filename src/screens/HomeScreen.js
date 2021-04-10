import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MapModal from "../components/MapModal";
import MapView from "react-native-maps";
import MapContainer from "../components/Map";
import BottomSheet from "reanimated-bottom-sheet";
import {colors} from "../styles/colors.js"

const editProfile = (navigation) => {
  // open edit profile page
  navigation.navigate("EditProfile");
}

const openAudios = (navigation) => {
  // open audio page
  navigation.navigate("Audios");
}

const renderContent = () => (
  <View
    style={{
      // backgroundColor: "#05054D",
      backgroundColor: colors.backgroundColor,
      padding: 16,
      height: 450,
    }}
  >
    <MapModal></MapModal>
  </View>
);

const HomeScreen = ({ navigation }) => {
  let username = navigation.getParam("text", "sample");
  const sheetRef = useState(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
          <MapContainer/>
      </View>
      <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttons}
          onPress={editProfile(navigation)}
          title="Edit Profile">
            { <Text style={styles.buttonText}>Edit Profile</Text> }
          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttons}
          onPress={openAudios(navigation)}
          title="Audio">
            { <Text style={styles.buttonText}>Audio</Text> }
          </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 100]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    directions: state.directions,
  };
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    // backgroundColor: "blue",
    borderRadius: 20,
    width: "100%",
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: 'row',
    marginTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttons: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 3,
    borderRadius: 50,
    height: 60,
    width: 60,
    margin: 10,
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "black"
    // fontWeight: "bold"
  }
});

export default connect(mapStateToProps, null) (HomeScreen);
