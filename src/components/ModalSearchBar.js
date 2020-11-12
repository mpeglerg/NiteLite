import React from "react";
import { TextInput, StyleSheet, View} from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Fontisto';


const ModalSearchBar = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <View  style={styles.searchSection}>
    <Icon style={styles.searchIcon} size={16} name="search" />
    <TextInput
      style={{
        height: 40,        
      }}
      placeholder={"Search here..."}
      onChangeText={(text) => {
        setValue(text);
        // props.performQuery;
      }}
      onSubmitEditing={(text) => {
        props.updateDirections(text);
        console.log(`TEXT: ${text}`);
      }}
      value={value}
    />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDirections: (destination) => {
      dispatch({ type: "UPDATE_DIRECTIONS", payload: destination });
    },
  };
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
  },
  searchIcon: {
    paddingBottom: 17,
    paddingRight: 10
  },
});

export default connect(null, mapDispatchToProps)(ModalSearchBar);
