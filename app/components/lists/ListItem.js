import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import defaultStyle from "../../config/styles";

const ListItem = ({
  btnStyle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChrevons,
  subTitle,
  title,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          onPress={onPress}
          underlayColor={defaultStyle.colors.secondaryGrey}
        >
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={[styles.image, btnStyle]} />}
            <View style={styles.detailsContainer}>
              <AppText numberOfLines={1} style={styles.title}>
                {title}
              </AppText>
              {subTitle && (
                <AppText numberOfLines={2} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            {showChrevons ? (
              <MaterialCommunityIcons
                name="chevron-right"
                color={defaultStyle.colors.primaryGrey}
                size={25}
              />
            ) : null}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyle.colors.white,
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,

    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    borderRadius: 35,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  subTitle: {
    color: defaultStyle.colors.primaryGrey,
  },
  title: {
    fontWeight: "500",
  },
});
