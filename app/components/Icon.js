import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const Icon = ({
  backgroundColor = "#000",
  color = "#fff",
  name,
  size = 40,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderRadius: size / 2,
          height: size,
          width: size,
        },
      ]}
    >
      <MaterialCommunityIcons color={color} name={name} size={size * 0.5} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
