import { useEffect, useState } from "react"
import styles from "./AboutMe.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"
import aboutMe from "@/images/home/AboutMe.svg"

const AboutMe = () => {
    const [data, setData] = useState<HomeDataType[]>([])
    useEffect(() => {
      getHomeDataType("about-me").then(res => setData(res))
    }, [])
    return (
        <div className={styles.Container}>
            <h3 className={styles.MainTitle}>About Me</h3>
            <span className={styles.Line1}></span>
            <div className={styles.MainContainer}>
                {data.map((item, key) => (
                    <div key={key} className={styles.Content}>
                        <h1 className={styles.SubTitle}>{item.title}</h1>
                        <span className={styles.Line2}></span>
                        <span className={styles.TextContent}>{item.content}</span>
                        <a
                            href="/contact"
                            className="inline-flex justify-center rounded-md bg-blue-600 px-3 py-3 text-sm text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                            style={{ width: '13rem' }}
                            >
                            Contact Me
                        </a>
                    </div>
                ))}
                <Image src={aboutMe} alt="AboutMe" className={styles.Image} />
            </div>
        </div>
    )
}

export default AboutMe;
