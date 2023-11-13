"use client"

import styles from "./styles/accountDetails.module.css"

const AccountDetails = ({ user }) => {
  return (
    <>
      <h1 className={styles.accountTitleText}>{user.name}&apos;s Account</h1>
      <h2 className={styles.accountRegularText}>
        MinWaster since {user.createdAt.toDateString()}
      </h2>
      <h2 className={styles.accountRegularText}>
        Total Items Logged: {user.loggedCounter - user.mistakeCounter}
      </h2>
    </>
  )
}

export default AccountDetails
