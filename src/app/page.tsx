import { getItems } from "../../lib/items";
import GroceryItem from "../app/components/GroceryItem";
import NewItemForm from "./components/NewItemForm";

export default async function Home() {
  const { items } = await getItems();

  return (
    <section className="py-20">
      <div className="flex justify-start mx-12 border border-red-800 divi">
        <NewItemForm />

        <ul className="mt-4 flex flex-col justify-center items-center border border-blue-500 border-dashed rounded-md p-6 mx-4 bg-slate-50">
          {items?.map((item) => (
            <GroceryItem item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
