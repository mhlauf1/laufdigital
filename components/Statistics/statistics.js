import styles from "./statistics.module.css"
import { statisticsData } from "../../utils/data";


const StatisticCards = ({ statisticsData }) => {
    return statisticsData.map((item) => (
        <div className={styles.statisticsCardContainer}>
            <h3>{item.heading}</h3>
            <p>{item.subHeading}</p>
        </div>
    ))
}

export default function Statistics() {
    return (
        <section className={styles.statisticsContainer}>
            <hr />
            <h2 style={{ marginTop: '2rem' }}>We have driven results for over 100+ startup businesses in the past 7 years.</h2>
            <div className={styles.statisticsCarouselContainer}>
                <StatisticCards statisticsData={statisticsData} />
            </div>
            <div style={{ marginTop: "6rem" }}>
                <hr />
            </div>
        </section>
    )
}