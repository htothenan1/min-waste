import { getUser } from "../../lib/items"
import { getServerSession } from "next-auth"
import NavBar from "../../common/NavBar"
import Footer from "../../common/Footer"
import Kitchen from "../../components/Kitchen"
import styles from "../styles/kitchen.module.css"
import { authOptions } from "../../api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const { user } = await getUser(session.user.email)
  const itemsCount = user?.itemsCounter

  return (
    <>
      <NavBar user={user?.name} />
      <div class={styles.pageContainer}>
        <Kitchen
          items={user?.items}
          itemsCount={itemsCount}
          userName={user?.name}
        />
        <div class={styles.instructionsContainer}>
          <h2 class={styles.instructionsTitle}>
            How to get the most out of your{" "}
            <span class={styles.orangeText}>MinWaste Kitchen:</span>
          </h2>
          <p class={styles.stepTitle}>1. Log your Groceries regularly.</p>
          <p class={styles.stepText}>
            Select the grocery items you have, and add them to Your Items. If
            you add a custom item, OpenAI will generate the storage tips for
            that specific item. By default, custom items will have a Use-By Date
            of 5 days from the date of entry.
          </p>
          <p class={styles.stepTitle}>
            2. Adjust the Use-By Date for Your Items, as needed.
          </p>
          <p class={styles.stepText}>
            All items come with an approximate Use-By Date, but make sure you
            adjust the dates to fit your lifestyle and schedule. Set dates that
            are SMART (Measurable, Achievable, Relevant, and Time-Bound)
          </p>
          <p class={styles.stepTitle}>
            3. Consume Your Items from the top of the list first.
          </p>
          <p class={styles.stepText}>
            Since Your Items are ordered by Use-By Date, always try to consume
            from the top. If an item has a{" "}
            <span class={styles.redText}>red background</span>, that means you
            should consume it in the next 2 days. A{" "}
            <span class={styles.greenText}>green background</span> means you
            have more than 2 days.
          </p>
          <p class={styles.stepTitle}>
            4. Update Your Items when an item is finished.
          </p>
          <p class={styles.stepText}>
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
