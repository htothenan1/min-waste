import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import PieChart from "../../components/PieChart"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Account() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)

  return (
    <>
      <NavBar user={user?.name} />
      <div className="flex flex-col text-center justify-center items-center mx-auto w-3/4 py-12 bg-slate-50/50">
        <h1 className=" text-orange-600/70 font-quicksandBold text-4xl">
          {user?.name}&apos;s Account
        </h1>
        <h2 className="my-2 text-slate-600 text-lg font-quicksandBold">
          MinWaster since {user?.createdAt.toDateString()}
        </h2>
        <h2 className="text-slate-600 text-lg font-quicksandBold mb-2">
          Total Items Logged: {user?.loggedCounter - user?.mistakeCounter}
        </h2>
        {/* <p>Items Consumed Completely: {user?.itemsCounter}</p>
        <p>Items With Waste: {user?.wastedCounter}</p> */}
        <PieChart
          itemsCounter={user?.itemsCounter}
          wastedCounter={user?.wastedCounter}
        />
      </div>
      <Footer />
    </>
  )
}
