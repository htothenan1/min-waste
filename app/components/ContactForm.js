import styles from "./styles/contactForm.module.css"

export default function ContactForm() {
  return (
    <div class={styles.contactContainer}>
      <div class={styles.headerContainer}>
        <h2 class={styles.titleText}>Contact us</h2>
        <p class={styles.subText}>
          Have a feature idea? Found a bug? Let us know!
        </p>
      </div>
      <form
        action="https://formsubmit.co/hberissodev@gmail.com"
        method="POST"
        class={styles.formContainer}
      >
        <label htmlFor="first-name" class={styles.labelText}>
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          required
          class={styles.input}
        />

        <label htmlFor="email" class={styles.labelText}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          class={styles.input}
          required
        />

        <label htmlFor="message" class={styles.labelText}>
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          class={styles.textArea}
        />
        <button type="submit" class={styles.sendButton}>
          Send Message
        </button>
      </form>
    </div>
  )
}
