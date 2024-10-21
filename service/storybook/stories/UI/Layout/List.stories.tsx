import "@byeonghyeon/react-components-layout/style.css";
import { OrderedList, ListItem, UnorderedList, List } from "@byeonghyeon/react-components-layout";
import React from "react";
export default {
  title: "React Components/Layout/List",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const OrderedListStory = {
  render: () => (
    <OrderedList spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </OrderedList>
  ),
};

export const UnorderedListStory = {
  render: () => (
    <UnorderedList spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </UnorderedList>
  ),
};

export const ListStory = {
  render: () => (
    <List variant="ordered" spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </List>
  ),
};
