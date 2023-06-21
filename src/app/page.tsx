import { getItems } from "../../lib/items";
import Kitchen from "./components/Kitchen";

export default async function Home() {
  const { items } = await getItems();

  return (
    <section className=" p-24">
      <Kitchen items={items} />
    </section>
  );
}

// eventually will be a sign in page before this point
