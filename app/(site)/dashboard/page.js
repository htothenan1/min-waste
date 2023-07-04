import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import Kitchen from "../../components/Kitchen";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);

  return (
    <>
      <NavBar user={user?.name} />
      <div className="bg-slate-50/50">
        <h1 className="text-center m-8">{`${user?.name} has kept ${user?.itemsCounter} items out of the landfill!`}</h1>
        <Kitchen items={user?.items} />
      </div>
      <Footer />
    </>
  );
}
