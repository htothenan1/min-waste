import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import PieChart from "../../components/PieChart"
import AccountDetails from "../../components/AccountDetails"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import styles from "../styles/account.module.css"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Account() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)

  return (
    <>
      <NavBar user={user?.name} />
      <div class={styles.pageContainer}>
        <AccountDetails user={user} />
        <div class={styles.pieContainer}>
          <PieChart
            itemsCounter={user?.itemsCounter}
            wastedCounter={user?.wastedCounter}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
