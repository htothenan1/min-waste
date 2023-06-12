import { getItems } from "../../lib/items";

export default async function Home() {
  const { items } = await getItems();

  return (
    <section className="py-20">
      <div className="flex">
        <h1>Items</h1>

        <ul className="mt-4 flex flex-col gap-1">
          {items?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
