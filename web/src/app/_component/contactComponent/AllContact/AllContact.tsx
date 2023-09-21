import styles from "./AllContact.module.scss"
import { useEffect, useState } from "react"
import { getContactDataType } from "@/services/ContactCall"
import Image from "next/image"
import HTMLRender from "../../HTMLRender/HTMLRender"


const AllContact = () => {
    const [data, setData] = useState<ContactDataType[]>([])
    useEffect(() => {
      getContactDataType("contact").then(res => setData(res))
    }, [])
    return (
        <div className={styles.Container}>
            <div className={styles.MainContainer}>
               <h3 className={styles.MainTitle}>Contact me !</h3>
               <span className={styles.Line1}></span>
            </div>
            {data.map((item, key) => (
                <div key={key}>
                    {item.position == 1 ? (
                        <div className={styles.ProjectContainer1}>
                            <div className={styles.ImageContainer}>
                                <Image src={`/contact/${item.image}`} width={100} height={100} alt="Contact Image" className={styles.Image} />
                            </div>
                            <div className={styles.Content}>
                                <h1 className={styles.SubTitle}>{item.title}</h1>
                                <span className={styles.Line1}></span>
                                <span className={styles.TextContent}>{item.content}</span>
                                <div className={styles.HTMLRender}>
                                    <HTMLRender text={item.link}/>
                                </div>
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
                                <div className={styles.HTMLRender}>
                                    <HTMLRender text={item.link}/>
                                </div>
                            </div>
                            <div className={styles.ImageContainer}>
                                <Image src={`/contact/${item.image}`} alt="Contact Image" width={100} height={100} className={styles.Image} />
                            </div>
                        </div>

                    )}
                </div>
            ))}
        </div>
    )
}

export default AllContact;