import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import ItemsChecklist from "../../components/ItemsChecklist"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Recipes() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)

  return (
    <>
      <NavBar user={user?.name} />
      <div className="flex flex-col text-center justify-center items-center py-12 bg-slate-50/50">
        <h1 className=" text-orange-600/70 font-quicksandBold text-4xl">
          Recipes
        </h1>
        <ItemsChecklist items={user?.items} />
      </div>
      <Footer />
    </>
  )
}
