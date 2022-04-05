import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(messages) => messages.id.toString()}
        onRefresh={() => setMessages(initialMessages)}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            onPress={() => console.log("pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChrevons
            subTitle={item.description}
            title={item.title}
          />
        )}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
