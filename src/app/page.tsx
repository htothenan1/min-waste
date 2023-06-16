import { getItems } from "../../lib/items";
import NewItemForm from "./components/NewItemForm";
import ItemsList from "./components/ItemsList";

export default async function Home() {
  const { items } = await getItems();

  return (
    <section className="py-20">
      <div className="flex mx-12 justify-center">
        <NewItemForm />
        <ItemsList items={items} />
      </div>
    </section>
  );
}
