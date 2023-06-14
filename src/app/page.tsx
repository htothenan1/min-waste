import { getItems } from "../../lib/items";
import NewItemForm from "./components/NewItemForm";
import ItemsList from "./components/ItemsList";
import EditItemForm from "./components/EditItemForm";

export default async function Home() {
  const { items } = await getItems();

  return (
    <section className="py-20">
      <div className="flex justify-start mx-12">
        <NewItemForm />
        <ItemsList items={items} />
      </div>
    </section>
  );
}
