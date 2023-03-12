import Image from "next/image";
import styles from "./hero.module.css"
import utilStyles from '../../styles/utils.module.css';

export default function Hero() {
    return (
        <section className={utilStyles.centerContainer}>
            <div className={styles.heroContainer}>
                <h1 className={styles.headingText}>Digital Design <br /> Development Agency</h1>
                <h3 className={styles.subHeadingText}>We build engaging user experiences for companies of all sizes by connecting the dots between users needs and the client's business model.</h3>
                <div className={styles.heroLogos}>
                    <Image
                        priority
                        src="logo1.svg"
                        height={64}
                        width={64}
                        alt="Brand 1"
                    />
                    <Image
                        priority
                        src="logo2.svg"
                        height={64}
                        width={64}
                        alt="Brand 1"
                    />
                    <Image
                        priority
                        src="logo3.svg"
                        height={64}
                        width={64}
                        alt="Brand 1"
                    />
                    <Image
                        priority
                        src="logo4.svg"
                        height={64}
                        width={64}
                        alt="Brand 1"
                    />
                </div>
            </div>
        </section>
    )
}