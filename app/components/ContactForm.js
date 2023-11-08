import styles from "./styles/contactForm.module.css"

export default function ContactForm() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.titleText}>Contact us</h2>
        <p className={styles.subText}>
          Have a feature idea? Found a bug? Let us know!
        </p>
      </div>
      <form
        action="https://formsubmit.co/hberissodev@gmail.com"
        method="POST"
        className={styles.formContainer}
      >
        <label htmlFor="first-name" className={styles.labelText}>
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          required
          className={styles.input}
        />

        <label htmlFor="email" className={styles.labelText}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          className={styles.input}
          required
        />

        <label htmlFor="message" className={styles.labelText}>
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          className={styles.textArea}
        />
        <button type="submit" className={styles.sendButton}>
          Send Message
        </button>
      </form>
    </div>
  )
}
