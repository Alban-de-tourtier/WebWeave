import { useEffect, useState } from "react"
import styles from "./Header.module.scss"
import { getHomeDataType } from "@/services/HomeCall"
import Image from "next/image"

const Header = () => {
    const [data, setData] = useState<HomeDataType[]>([])
    useEffect(() => {
      getHomeDataType("header").then(res => setData(res))
    }, [])
    return (
        <div className={styles.MainContainer}>
            {data.map((item, key) => (
                <div key={key} className={styles.Content}>
                    <h1 className={styles.MainTitle}>{item.title}</h1>
                    <span className={styles.TextContent}>{item.content}</span>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                        style={{ width: '13rem' }}
                    >
                    Learn more about me
                  </button>
                </div>
            ))}
            <Image src="/me.png" alt="ME" width={500} height={500}/>
        </div>
    )
}

export default Header;
