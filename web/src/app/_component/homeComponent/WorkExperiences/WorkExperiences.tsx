import { useEffect, useState } from "react"
import styles from "./WorkExperiences.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"

const ServiceProviding = () => {
    const [data, setData] = useState<HomeDataType[]>([])
    useEffect(() => {
      getHomeDataType("work-experience").then(res => setData(res))
    }, [])
    return (
        <div className={styles.Container}>
            <h3 className={styles.MainTitle}>Work Experience</h3>
            <span className={styles.Line1}></span>
            <div className={styles.MainContainer}>
                {data.map((item, key) => (
                    <div key={key} className={styles.Content}>
                        <p className={styles.SubTitle}>{item.title}</p>
                        <span className={styles.TextContent}>{item.content}</span>
                        <div className={styles.ProgressWrapper}>
                            <div className={styles.ProgressBar}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceProviding;
