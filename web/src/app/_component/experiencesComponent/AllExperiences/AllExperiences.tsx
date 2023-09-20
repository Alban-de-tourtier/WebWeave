import styles from "./AllExperiences.module.scss"
import { useEffect, useState } from "react"
import { getExperiencesDataType } from "@/services/ExperiencesCall"
import Image from "next/image"


const AllExperiences = () => {
    const [data, setData] = useState<ExperiencesDataType[]>([])
    useEffect(() => {
      getExperiencesDataType("experiences").then(res => setData(res))
    }, [])
    return (
        <div className={styles.Container}>
            <div className={styles.MainContainer}>
               <h3 className={styles.MainTitle}>Experiences</h3>
               <span className={styles.Line1}></span>
            </div>
            {data.map((item, key) => (
                <div key={key}>
                    {item.position == 1 ? (
                        <div className={styles.ProjectContainer1}>
                            <Image src={`/experiences/${item.image}`} width={500} height={500} alt="Project Image" className={styles.Image} />
                            <div className={styles.Content}>
                                <h1 className={styles.SubTitle}>{item.title}</h1>
                                <span className={styles.Line1}></span>
                                <span className={styles.TextContent}>{item.content}</span>
                            </div>
                        </div>
                    )
                    : 
                    (
                        <div className={styles.ProjectContainer2}>
                            <div className={styles.Content2}>
                                <h1 className={styles.SubTitle}>{item.title}</h1>
                                <span className={styles.Line1}></span>
                                <span className={styles.TextContent}>{item.content}</span>
                            </div>
                            <Image src={`/experiences/${item.image}`} alt="Project Image" width={500} height={500} className={styles.Image} />
                        </div>

                    )}
                </div>
            ))}
        </div>
    )
}

export default AllExperiences;