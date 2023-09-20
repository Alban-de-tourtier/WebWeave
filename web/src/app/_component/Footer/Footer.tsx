import Link from "next/link";
import styles from "./Footer.module.scss"
import Image from "next/image"
import linkedin from "@/images/LinkedIn.svg"
import github from "@/images/GitHub.svg"
import mylogo from "@/images/WebWeaveWhite.png"

const Footer = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.FirstSection}>
                <div className={styles.LogoContainer}>
                    <Link href="https://linkedin.com/in/alban-de-tourtier-1449691b6" >
                        <Image src={linkedin} alt="Logo LinkedIn" className={styles.Image} style={{marginRight: "1rem"}} />
                    </Link>
                    <Link href="https://github.com/Alban-de-tourtier" >
                        <Image src={github} alt="Logo GitHub" className={styles.Image} />
                    </Link>
                </div>
                <Image src={mylogo} alt="Logo white" className={styles.MyLogo} />
                <h4 className={styles.Mail}>albandetourtier@gmail.com</h4>
            </div>
            <h4 className={styles.MadeText}>Made by Alban de Tourtier</h4>
        </div>
    )
}

export default Footer;