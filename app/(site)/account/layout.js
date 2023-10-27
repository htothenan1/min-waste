import styles from "../styles/account.module.css"

export const metadata = {
  title: "MinWaste Account",
  description: "See your acccount details and waste stats",
}

export default function AccountLayout({ children }) {
  return (
    <section class={styles.layoutContainer} lang="en">
      {children}
    </section>
  )
}
