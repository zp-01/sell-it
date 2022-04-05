import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image as ImageCache } from "react-native-expo-image-cache";

import AppText from "./AppText";
import defaultStyle from "../config/styles";

const Card = ({ imageUrl, onPress, subTitle, title, thumbnailUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <ImageCache
          preview={thumbnailUrl}
          style={styles.img}
          tint="light"
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          <AppText numberOfLines={2} style={styles.subTitle}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultStyle.colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  img: {
    height: 200,
    width: "100%",
  },
  subTitle: {
    color: defaultStyle.colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
