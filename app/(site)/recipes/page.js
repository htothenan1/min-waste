import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import ItemsChecklist from "../../components/ItemsChecklist"
import styles from "../styles/recipes.module.css"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Recipes() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)

  return (
    <>
      <NavBar user={user?.name} />
      <div class={styles.pageContainer}>
        <h1 class={styles.headerText}>Recipes</h1>
        <ItemsChecklist items={user?.items} />
      </div>
      <Footer />
    </>
  )
}
