import { FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import defaultStyle from "../config/styles";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadLisitings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadLisitings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listing.</AppText>
            <AppButton description="Retry" onPress={loadLisitings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              subTitle={`$${item.price}`}
              thumbnailUrl={item.images[0].thumbnailUrl}
              title={item.title}
            />
          )}
        />
      </Screen>
    </>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyle.colors.secondaryGrey,
    padding: 20,
  },
});
