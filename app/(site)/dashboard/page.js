import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import Kitchen from "../../components/Kitchen"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)
  const itemsCount = user?.itemsCounter

  return (
    <>
      <NavBar user={user?.name} />
      <div className="bg-slate-50/50 py-12">
        <div className="flex flex-col items-center">
          <h1 className=" text-orange-600/70 font-bold text-4xl">Dashboard</h1>
          <h2 className="my-2 text-slate-600 text-md">
            {`${user?.name} has consumed ` + itemsCount + ` complete items!`}
          </h2>
        </div>
        <Kitchen items={user?.items} />
        <div className="flex flex-col w-2/3 m-auto bg-slate-50/50 my-12">
          <h2 className="text-slate-600 text-center font-semibold mt-4 text-2xl md:text-3xl">
            How to get the most out of{" "}
            <span className="text-orange-600/70">Waste-Not App</span>
          </h2>
          <p className="my-2 text-slate-600 text-md">
            <span className=" font-extrabold">
              1. Log your spoilable items regularly.
            </span>{" "}
            The more in sync your Items List is with your kitchen, the more
            effective the app will be. If the item you brought home can spoil in
            the next month, make sure to log it.
          </p>
          <p className="my-2 text-slate-600 text-md">
            <span className=" font-extrabold">
              2. Set a Use-By Date for your items.
            </span>{" "}
            Set a reasonable goal for when each item{" "}
            <span className=" italic">should optimistically</span> be consumed
            by. This should be based on what you feel is appropriate, not the
            expiration code on the package. Make sure to factor in your
            lifestyle and schedule when choosing this date.
          </p>
          <p className="my-2 text-slate-600 text-md">
            <span className="font-extrabold">
              3. Consume your items from the top of the list, first.
            </span>{" "}
            Try to always eat what should be eaten next. If your item has a{" "}
            <span className="text-red-500/70">red background</span>, that means
            it is less than 2 days away from the Use-By Date.{" "}
            <span className="text-green-600">Green background</span> means you
            have more than 2 days, and the{" "}
            <span className="text-slate-500/70">gray ones</span> are items that
            are yet to be set.
          </p>
          <p className="my-2 text-slate-600 text-md">
            <span className="font-extrabold">
              4. Update your Items List when an item is finished.
            </span>{" "}
            We will keep count of the items you fully consume, so that you can
            track your overall progress.
          </p>
          <p className="my-2 text-slate-600 text-md">
            <span className="font-extrabold">5. Take it with you!</span> Our app
            is mobile friendly, so use it as a grocery shopping tool. Never
            double-buy an item again!
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
