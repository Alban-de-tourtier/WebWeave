import { useEffect, useState } from "react"
import styles from "./ClientSay.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"
import micka from "@/images/home/MickaelRiess.png"
import paul from "@/images/home/PaulBoutin.png"
import renan from "@/images/home/RenanDubois.png"
import quote from "@/images/home/Quote.png"

function getImageContent(text: string) {
    if (text === 'Mickael Riess') {
      return <Image src={micka} className={styles.Image} alt="Micka"/>;
    } else if (text === 'Paul Boutin') {
      return <Image src={paul} className={styles.Image} alt="Paul"/>;
    } else if (text === 'Renan Dubois') {
      return <Image src={renan} className={styles.Image} alt="Renan"/>;
    } else {
      return <Image src={micka} className={styles.Image} alt="Micka"/>;
    }
}

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
                        <Image src={quote} alt="Quote" className={styles.Quote} />
                        {getImageContent(item.title)}
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
