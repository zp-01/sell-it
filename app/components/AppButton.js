import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

import defaultStyle from "../config/styles";

export default function AppButton({ color, description, onPress, style }) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: color
            ? defaultStyle.colors[color]
            : defaultStyle.colors.primary,
        },
        style,
      ]}
      onPress={onPress}
    >
      <AppText style={styles.txt}>{description}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    backgroundColor: defaultStyle.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  txt: {
    color: defaultStyle.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
