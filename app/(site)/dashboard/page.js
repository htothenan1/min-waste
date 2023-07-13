import { getUser } from "../../lib/items";
import { getServerSession } from "next-auth";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import Kitchen from "../../components/Kitchen";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const { user } = await getUser(session.user.email);
  const itemsCount = user?.itemsCounter;

  return (
    <>
      <NavBar user={user?.name} />
      <div className="bg-slate-50/50 py-12">
        <h1 className=" text-orange-600 font-bold text-4xl text-center">
          Dashboard
        </h1>
        <h1 className="my-2 text-slate-600 text-sm md:text-lg text-center w-3/4 mx-auto">
          {`${user?.name} has consumed ` + itemsCount + ` complete items!`}
        </h1>
        <Kitchen items={user?.items} />
        <div className="flex flex-col w-2/3 m-auto bg-slate-50/50 mt-12">
          <h1 className="text-slate-600 text-center font-semibold mt-4 text-2xl">
            How to get the most out of{" "}
            <span className="text-orange-600">Waste-Not</span>
          </h1>
          <p className="my-2 text-green-800 text-sm md:text-base">
            <span className=" font-extrabold">1. Log your kitchen items.</span>{" "}
            The more accurate you keep your Items List, the more effective the
            app will be.
          </p>
          <p className="my-2 text-green-800 text-sm md:text-base">
            <span className=" font-extrabold">
              2. Set a Use-By Date for your items.
            </span>{" "}
            This should be based on what YOU feel is appropriate, NOT whatever
            expiration code is written on the package. Make sure to factor in
            your lifestyle and schedule when setting this date.
          </p>
          <p className="my-2 text-green-800 text-sm md:text-base">
            <span className="font-extrabold">
              3. Consume your items from the top of your list, first.
            </span>{" "}
            This is our core principle:{" "}
            <span className="text-orange-600">
              Always eat what should be eaten next.
            </span>
          </p>
          <p className="my-2 text-green-800 text-sm md:text-base">
            <span className="font-extrabold">
              4. Update your Items List when an item is finished.
            </span>{" "}
            We will keep count of the items you fully consume, so that you can
            track your overall progress.
          </p>
          <p className="my-2 text-green-800 text-sm md:text-base">
            <span className="font-extrabold">5. Take it with you.</span> Our app
            is mobile friendly, so use it as a grocery shopping tool. Never
            double buy an item again!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
