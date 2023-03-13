import { useState, useRef, useEffect } from "react";
import styles from "./project.module.css";
import Image from "next/image";
import { projectData } from "../../utils/data";

export default function Projects() {

    const [fixedHeight, setFixedHeight] = useState(false);

    const scollRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", setFixedSidebar);
    }, []);

    function setFixedSidebar() {
        if (scollRef) {
            const targetY = scollRef.current?.offsetTop;
            const height = scollRef.current?.getBoundingClientRect().height;
            const windowY = window.pageYOffset;
            const endOfEl = targetY + height;
            // console.log(windowY, 'windowY')
            if (windowY >= targetY) {
                setFixedHeight(true)
            } 
            if(windowY >= (endOfEl - 84)) {
                setFixedHeight(false)

            } else if (windowY <= targetY) {
                setFixedHeight(false)
            }
        }
    }

    return (
        <section className={styles.projectsContainer}>
            <div className={styles.projectHeaderContainer}>
                <h2>Our Past <br /> Projcts</h2>
                <div className={styles.projectsSubHeading}>
                    <h4>500+ Projects</h4>
                    <span className={styles.subHeadingUnderline} />
                </div>
            </div>
            <div ref={scollRef} className={styles.gridContainer}>
                <div className={styles.projectsSidebar}>
                    <div className={`${fixedHeight ? styles.fixedSidebar : ''}`}>
                        <button>All cases</button>
                    </div>
                </div>
                <div className={styles.projectsContent}>
                    <ProjectExamples />
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
                    width={500}
                    height={300}
                    style={{ objectFit: 'contain' }}
                    alt={item.alt}
                />
            </div>
        </div>
    ))
}
