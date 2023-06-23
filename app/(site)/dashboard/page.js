import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import NavBar from "../../common/NavBar";

import Kitchen from "../../components/Kitchen";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);

  return (
    <>
      <NavBar />
      <div className="p-12">
        {/* <pre>{JSON.stringify(user.items)}</pre> */}

        <Kitchen items={user.items} />
      </div>
    </>
  );
}

// eventually will be a sign in page before this point
