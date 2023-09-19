import { useEffect, useState } from "react"
import styles from "./ClientSay.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"

const ClientSay = () => {
    const [data, setData] = useState<HomeDataType[]>([])
    useEffect(() => {
      getHomeDataType("what-my-clients-say").then(res => setData(res))
    }, [])
    return (
        <div className={styles.Container}>
            <h3 className={styles.MainTitle}>What My Clients Say</h3>
            <span className={styles.Line1}></span>
            <div className={styles.MainContainer}>
                {data.map((item, key) => (
                    <div key={key} className={styles.Content}>
                        <Image src="/home/Quote.png" alt="Quote" width={30} height={30}/>
                        <Image src={`/home/${item.title}.png`} className={styles.Image} alt="Quote" width={70} height={70}/>
                        <span className={styles.TextContent}>{item.content}</span>
                        <span className={styles.Line2}></span>
                        <p className={styles.Name}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientSay;
