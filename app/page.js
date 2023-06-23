import { getItems } from "./lib/items";
import { getServerSession } from "next-auth";
// import User from "./components/User";
// import NavBar from "./common/NavBar";
import GuestNavBar from "./common/GuestNavBar";

// import Kitchen from "./components/Kitchen";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const { items } = await getItems();
  const session = await getServerSession(authOptions);

  return (
    <section>
      <GuestNavBar />
      {/* <NavBar /> */}
      {/* <Kitchen items={items} /> */}
      {/* <h1>Home</h1> */}
      {/* <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>
      <User /> */}
    </section>
  );
}

// eventually will be a sign in page before this point
