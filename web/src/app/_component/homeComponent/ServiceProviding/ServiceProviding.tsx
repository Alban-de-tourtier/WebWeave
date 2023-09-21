import { useEffect, useState } from "react"
import styles from "./ServiceProviding.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"
import custom from "@/images/home/Custom.webp"
import tech from "@/images/home/Tech.webp"
import efficient from "@/images/home/Efficient.webp"

function getImageContent(text: string) {
    if (text === 'Custom') {
      return <Image src={custom} className={styles.Image} alt="Custom"/>;
    } else if (text === 'Tech') {
      return <Image src={tech} className={styles.Image} alt="Tech"/>;
    } else if (text === 'Efficient') {
      return <Image src={efficient} className={styles.Image} alt="Efficient"/>;
    } else {
      return <Image src={efficient} className={styles.Image} alt="Default"/>;
    }
  }

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
                        {getImageContent(`${item.title.match(/^\w+/)}`)}
                        <h1 className={styles.SubTitle}>{item.title}</h1>
                        <span className={styles.TextContent}>{item.content}</span>
                        <a
                            href="/experiences"
                            className="text-base font-medium text-blue-600 hover:text-indigo-500"
                            style={{ width: '6rem' }}
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
