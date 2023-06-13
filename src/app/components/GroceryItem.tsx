"use client";

import { Item } from "@prisma/client";

type GroceryItemProps = {
  item: Item;
};

const TodoItem = ({ item }: GroceryItemProps) => {
  return <li>{item.name}</li>;
};

export default TodoItem;
