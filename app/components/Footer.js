import styles from "./styles/footer.module.css"
import { navIcons } from "../data/icons"

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.createdByContainer}>
        <p className={styles.creatorText}>
          Created by{" "}
          <a
            target="_blank"
            href="https://portfolio-site-htothenan1.vercel.app/"
          >
            Hernan Berisso
          </a>
        </p>{" "}
        {navIcons.map((item) => (
          <a key={item.name} href={item.href} target="_blank">
            <item.icon />
          </a>
        ))}
      </div>
      <p className={styles.creatorText}>
        &copy;2023 MinWaste, LLC. All rights reserved.
      </p>
    </footer>
  )
}
