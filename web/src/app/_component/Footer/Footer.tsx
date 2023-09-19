import Link from "next/link";
import styles from "./Footer.module.scss"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.FirstSection}>
                <div className={styles.LogoContainer}>
                    <Link href="https://linkedin.com/in/alban-de-tourtier-1449691b6" >
                        <Image src="/LinkedIn.svg" alt="Logo Linkedin" width={40} height={40} style={{marginRight: "1rem"}} />
                    </Link>
                    <Link href="https://github.com/Alban-de-tourtier" >
                        <Image src="/GitHub.svg" alt="Logo GitHub" width={40} height={40} />
                    </Link>
                </div>
                <Image src="/WebWeaveWhite.png" alt="Logo white" className={styles.MyLogo} width={70} height={70}/>
                <h4 className={styles.Mail}>albandetourtier@gmail.com</h4>
            </div>
            <h4 className={styles.MadeText}>Made by Alban de Tourtier</h4>
        </div>
    )
}

export default Footer;