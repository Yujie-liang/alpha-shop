import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={`container ${styles.banner}`}>
      <p className={styles.slogan}>Get the last T-shirt drops in your inbox! Signup for our Newsletter.</p>
      <form className={styles.signupForm}>
        <input type="email" className={styles.signup} id="signup" placeholder="Enter email for news update"></input>
        <button type="submit" htmlFor="signup" className={styles.signupButton}><span className={styles.buttonText}>SIGN UP!</span></button>
      </form>
      <p className={styles.policy}>By registering you agree with our <a href="https://www.dedicatedbrand.com/en/integrity-policy"
        className={styles.policyLink}>Integrity Policy</a></p>
    </div>
  )
}