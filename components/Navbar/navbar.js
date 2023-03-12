import styles from "./navbar.module.css";
import utilStyles from '../../styles/utils.module.css';

const Logo = () => (
    <h3 className={styles.logo}>LAUFDigital</h3>
);

export default function Navbar() {

    return (
        <div className={utilStyles.sectionContainer}>
            <nav className={styles.navbarContainer}>
                <Logo />
                <ul>
                    <li className={styles.navLinks}>Cases</li>
                    <li className={styles.navLinks}>Services</li>
                    <li className={styles.navLinks}>Process</li>
                    <li className={styles.navLinks}>About</li>
                    <li className={styles.navLinks}>Careers</li>
                    <li className={styles.navLinks}>Contact</li>
                    <li className={styles.navLinks}>News</li>
                </ul>
                <button className={styles.contactButton}>LET'S TALK</button>
            </nav>
        </div>
    )
}