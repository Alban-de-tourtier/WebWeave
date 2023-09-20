import styles from "./Header.module.scss"
import { useEffect, useState } from "react"
import { getAboutDataType } from "@/services/AboutCall"
import Image from "next/image"
import me from "@/images/home/me.png"
import github from "@/images/about/GitHubLogoBlack.svg"
import linkedin from "@/images/about/LinkedInLogoBlack.svg"
import Link from "next/link"

const Header = () => {
    const [data, setData] = useState<HomeDataType[]>([])
    useEffect(() => {
      getAboutDataType("header").then(res => setData(res))
    }, [])
    return (
        <div>
            <div className={styles.MainContainer}>
               <h3 className={styles.MainTitle}>About Me</h3>
               <span className={styles.Line1}></span>
            </div>
            <div className={styles.SubContainer}>
                <Image src={me} alt="Me" className={styles.Image} />
                {data.map((item, key) => (
                    <div key={key} className={styles.Content}>
                        <h1 className={styles.SubTitle}>{item.title}</h1>
                        <span className={styles.Line1}></span>
                        <span className={styles.TextContent}>{item.content}</span>
                        <span className={styles.Talk}>{"Let's talk with me !"}</span>
                        <span className={styles.Mail}>albandetourtier@gmail.com</span>
                        <div className={styles.LogoContainer}>
                            <Link href="https://github.com/Alban-de-tourtier">
                                <Image src={github} alt="Github Logo" className={styles.Logo} />
                            </Link>
                            <Link href="https://linkedin.com/in/alban-de-tourtier-1449691b6">
                                <Image src={linkedin} alt="LinkedIn Logo" className={styles.Logo} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;
