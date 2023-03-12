import styles from "./project.module.css";
import Image from "next/image";
import { projectData } from "../../utils/data";


export default function Projects() {
    return (
        <section className={styles.projectsContainer}>
            <div className={styles.projectHeaderContainer}>
                <h2>Our Past <br /> Projcts</h2>
                <div className={styles.projectsSubHeading}>
                    <h4>500+ Projects</h4>
                    <span className={styles.subHeadingUnderline} />
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.projectsGrid}>
                    <div className={styles.projectsSidebar}>
                        <button>All cases</button>
                    </div>
                    <div className={styles.projectsContent}>
                        <ProjectExamples />
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProjectExamples = () => {
    return projectData.map((item) => (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectDetails}>
                <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
                <p className={styles.projectType}>{item.type}</p>
            </div>
            <div className={styles.projectPhoto}>
                <Image
                    priority
                    src={item.photoUrl}
                    height={500}
                    width={200}
                    alt={item.alt}
                />
            </div>
        </div>
    ))
}
