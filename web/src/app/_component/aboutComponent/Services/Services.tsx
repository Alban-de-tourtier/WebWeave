import styles from "./Services.module.scss"
import { useEffect, useState } from "react"
import { getAboutDataType } from "@/services/AboutCall"

const Services = () => {
    const [data, setData] = useState<AboutDataType[]>([])
    useEffect(() => {
      getAboutDataType("services").then(res => setData(res))
    }, [])
    return (
        <div className={styles.SubContainer}>
            {data.map((item, key) => (
                <div key={key} className={styles.Content}>
                    <h1 className={styles.SubTitle}>{item.title}</h1>
                    <span className={styles.Line1}></span>
                    <span className={styles.TextContent}>{item.content}</span>
                    <a
                        href="/AlbandeTourtierCV.pdf"
                        download="/AlbandeTourtierCV.pdf"
                        className="inline-flex justify-center rounded-md bg-blue-600 px-3 py-3 text-sm text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                        style={{ width: '10rem' }}
                    >
                        Download CV
                    </a>
                </div>
            ))}
            <div className={styles.SkillContainer}>
                <div className={styles.ProgressWrapper}>
                    <div className={styles.ProgressBar1}>
                        <span className={styles.SkillText}>Full stack development</span>
                    </div>
                </div>
                <div className={styles.ProgressWrapper}>
                    <div className={styles.ProgressBar2}>
                        <span className={styles.SkillText}>Computer science</span>
                    </div>
                </div>
                <div className={styles.ProgressWrapper}>
                    <div className={styles.ProgressBar3}>
                        <span className={styles.SkillText}>Freelance</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
