import Image from "next/image";
import styles from "./accomplishments.module.css"
import utilStyles from '../../styles/utils.module.css';
import { accompishmentsData } from "../../utils/data";

const AwardLogo = ({ src, alt, name }) => (
    <div className={styles.logoContainer}>
        <div style={{ backgroundColor: '#F5F5F5', padding: '2rem', borderRadius: '50%', width: 'fit-content' }}>
            <Image
                priority
                src={src}
                height={125}
                width={125}
                alt={alt}
                style={{ zIndex: 10 }}
            />
        </div>
        <h3 style={{ marginTop: '.75rem', fontWeight: 700, width: "70%", textAlign: 'center', lineHeight: 1, textTransform: "uppercase", fontSize: ".75rem" }}>{name}</h3>
    </div>
);

export default function Accomplishments() {
    return (
        <section className={styles.accomplishmentsContainer}>
            <hr />
            <div style={{ marginTop: '2rem' }}>
                <h2>We won <strong>80+ design awards</strong> in 2022 stand alone, some of which had us share the stage with Google, Netflix, and Spotify.</h2>
            </div>
            <div className={styles.awardsContainer}>
                {accompishmentsData.map((item) => (
                    <AwardLogo src={item.src} name={item.name} alt={item.alt} />
                ))}
            </div>
            <div style={{ marginTop: "6rem" }}>
                <hr />
            </div>
        </section>
    );
};