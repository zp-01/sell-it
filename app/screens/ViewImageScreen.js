import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={defaultStyle.colors.white}
        name="close"
        size={35}
        style={styles.closeBtn}
      />
      <MaterialCommunityIcons
        color={defaultStyle.colors.white}
        name="trash-can-outline"
        size={35}
        style={styles.trashBtn}
      />
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.black,
  },
  closeBtn: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  trashBtn: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
