"use client";

import { Item } from "@prisma/client";

type GroceryItemProps = {
  item: Item;
};

const GroceryItem = ({ item }: GroceryItemProps) => {
  return <li className="border">{item.name}</li>;
};

export default GroceryItem;
