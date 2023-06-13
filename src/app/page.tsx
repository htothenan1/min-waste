import { getItems } from "../../lib/items";
import GroceryItem from "../app/components/GroceryItem";
import NewItemForm from "./components/NewItemForm";

export default async function Home() {
  const { items } = await getItems();

  return (
    <section className="py-20">
      <div className="flex mx-12">
        <NewItemForm />

        <ul className="mt-4 flex flex-col gap-1">
          {items?.map((item) => (
            <GroceryItem item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
