import { useEffect, useState } from "react"
import styles from "./ServiceProviding.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"

const ServiceProviding = () => {
    const [data, setData] = useState<HomeDataType[]>([])
    useEffect(() => {
      getHomeDataType("what-services-im-providing").then(res => setData(res))
    }, [])
    return (
        <div className={styles.Container}>
            <h3 className={styles.MainTitle}>{"What Services I'm Providing"}</h3>
            <span className={styles.Line1}></span>
            <div className={styles.MainContainer}>
                {data.map((item, key) => (
                    <div key={key} className={styles.Content}>
                        <Image src={`/home/${item.title.match(/^\w+/)}.webp`} alt="AboutMe" width={300} height={300}/>
                        <h1 className={styles.SubTitle}>{item.title}</h1>
                        <span className={styles.TextContent}>{item.content}</span>
                        <a
                            href="/about"
                            className="text-base font-medium text-blue-600 hover:text-indigo-500"
                            style={{ width: '5rem' }}
                            >
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceProviding;
