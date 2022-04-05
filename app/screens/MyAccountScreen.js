import { FlatList, StyleSheet, View } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import defaultStyle from "../config/styles";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      backgroundColor: defaultStyle.colors.primary,
      name: "format-list-bulleted",
    },
  },
  {
    title: "My Messages",
    icon: {
      backgroundColor: defaultStyle.colors.secondary,
      name: "email",
    },
    targetScreen: "Messages",
  },
];

const MyAccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          subTitle={user.email}
          title={user.name}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
            />
          )}
        />
      </View>

      <ListItem
        IconComponent={<Icon backgroundColor="#ffe66d" name="logout" />}
        title="Log Out"
        onPress={() => logOut()}
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: defaultStyle.colors.secondaryGrey,
  },
});
