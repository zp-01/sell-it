import { StyleSheet, View } from "react-native";

import defaultStyle from "../../config/styles";

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: defaultStyle.colors.secondaryGrey,
    height: 1,
    width: "100%",
  },
});
