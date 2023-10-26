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
              1. Log your Groceries regularly.
            </span>{" "}
            Select the grocery items you have, and add them to Your Items. If
            you add a custom item, OpenAI will generate the storage tips for
            that specific item. By default, custom items will have a Use-By Date
            of 5 days from the date of entry.
          </p>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              2. Adjust the Use-By Date for Your Items, as needed.
            </span>{" "}
            All items come with an approximate Use-By Date, but make sure you
            adjust the dates to fit your lifestyle and schedule. Set dates that
            are SMART (Measurable, Achievable, Relevant, and Time-Bound)
          </p>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              3. Consume Your Items from the top of the list first.
            </span>{" "}
            Since Your Items are ordered by Use-By Date, always try to consume
            from the top. If an item has a{" "}
            <span className="text-red-500/70">red background</span>, that means
            you should consume it in the next 2 days. A{" "}
            <span className="text-green-600">green background</span> means you
            have more than 2 days.
          </p>
          <p className="my-2 text-slate-600 text-md font-quicksand">
            <span className=" font-quicksandBold">
              4. Update Your Items when an item is finished.
            </span>{" "}
            We will keep count of the items you fully consume, so that you can
            track your overall progress. Visit your Account page for more
            details.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
