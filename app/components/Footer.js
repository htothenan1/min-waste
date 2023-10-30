import styles from "./styles/footer.module.css"
import { navigation } from "../data/icons"

export default function Footer() {
  return (
    <footer class={styles.footerContainer}>
      <div class={styles.createdByContainer}>
        <p class={styles.creatorText}>
          Created by{" "}
          <a
            target="_blank"
            href="https://portfolio-site-htothenan1.vercel.app/"
          >
            Hernan Berisso
          </a>
        </p>{" "}
        {navigation.map((item) => (
          <a key={item.name} href={item.href} target="_blank">
            <item.icon />
          </a>
        ))}
      </div>
      <p class={styles.creatorText}>
        &copy;2023 MinWaste, LLC. All rights reserved.
      </p>
    </footer>
  )
}
