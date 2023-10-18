import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import PieChart from "../../components/PieChart"
import AccountDetails from "../../components/AccountDetails"
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
        <AccountDetails user={user} />
        <PieChart
          itemsCounter={user?.itemsCounter}
          wastedCounter={user?.wastedCounter}
        />
      </div>
      <Footer />
    </>
  )
}
