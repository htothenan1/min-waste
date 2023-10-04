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
        <Kitchen
          items={user?.items}
          itemsCount={itemsCount}
          userName={user?.name}
        />
        <div className="flex flex-col w-2/3 m-auto bg-slate-50/50 my-12">
          <h2 className="text-slate-600 text-center font-quicksandBold mt-4 text-2xl md:text-3xl">
            How to get the most out of your{" "}
            <span className="text-orange-600/70">MinWaste Kitchen:</span>
          </h2>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              1. Log your spoilable items regularly.
            </span>{" "}
            Find your item, and drag it into your Items List (double tap on
            mobile). If you add a custom item, the OpenAI API will generate the
            storage tips. By default, your items will have a Use-By Date of 5
            days from today, but please adjust accordingly.
          </p>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              2. Set a SMART Use-By Date for your items.
            </span>{" "}
            Using the SMART methodology, set Use-By Dates that are Specific,
            Measurable, Achievable, Relevant, and Time-Bound. Use your senses to
            determine these dates, instead of relying on misleading expiration
            codes.
          </p>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              3. Consume your items from the top of the list, first.
            </span>{" "}
            Since your Items List is ordered by Use-By Date, always try to eat
            from the top. If your item has a{" "}
            <span className="text-red-500/70">red background</span>, that means
            it is less than 2 days away from the Use-By Date. A{" "}
            <span className="text-green-600">green background</span> means you
            have more than 2 days to consume your item.
          </p>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              4. Update your Items List when an item is finished.
            </span>{" "}
            We will keep count of the items you fully consume, so that you can
            track your overall progress.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
