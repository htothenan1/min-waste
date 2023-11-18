import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Kitchen from "../../components/Kitchen"
import styles from "../styles/kitchen.module.css"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session?.user?.email)
  const itemsCount = user?.itemsCounter

  return (
    <>
      <NavBar user={user?.name} />
      <div className={styles.pageContainer}>
        <Kitchen user={user} items={user?.items} userName={user?.name} />
        <div className={styles.instructionsContainer}>
          <h2 className={styles.instructionsTitle}>
            How to get the most out of{" "}
            <span className={styles.orangeText}>MinWaste:</span>
          </h2>
          <p className={styles.stepTitle}>1. Log your Groceries regularly.</p>
          <p className={styles.stepText}>
            MinWaste allows you to log your groceries in a variety of exciting
            ways. These include multi-selecting from a curated list, entering a
            custom items by name. If that's not cool enough for you, log your
            items by simply inputting a picture of your grocery items, or
            grocery receipt! AI magic
          </p>
          <p className={styles.stepTitle}>
            2. Adjust the Use-By Date for Your Items, as needed.
          </p>
          <p className={styles.stepText}>
            All items come with an approximate Use-By Date, but make sure you
            adjust the dates to fit your lifestyle and schedule. Set dates that
            are SMART (Measurable, Achievable, Relevant, and Time-Bound)
          </p>
          <p className={styles.stepTitle}>
            3. Consume Your Items from the top of the list first.
          </p>
          <p className={styles.stepText}>
            Since Your Items are ordered by Use-By Date, always try to consume
            from the top. If an item has a{" "}
            <span className={styles.redText}>red background</span>, that means
            you should consume it in the next 2 days. A{" "}
            <span className={styles.greenText}>green background</span> means you
            have more than 2 days.
          </p>
          <p className={styles.stepTitle}>
            4. Update Your Items when an item is finished.
          </p>
          <p className={styles.stepText}>
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
