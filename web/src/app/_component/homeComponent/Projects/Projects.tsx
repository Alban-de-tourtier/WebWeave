import { useEffect, useState } from "react"
import styles from "./Projects.module.scss"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
    return (
        <div className={styles.Container}>
            <h3 className={styles.MainTitle}>My Projects</h3>
            <span className={styles.Line1}></span>
            <div className={styles.MainContainer}>
                <div className={styles.Content}>
                    <Link href="/">
                        <Image src="/home/portfolio.jpeg" alt="Portfolio" className={styles.Image} width={450} height={450}/>
                        <div className={styles.ContentTextContainer}>
                            <h4 className={styles.Title}>Portfolio</h4>
                            <h4 className={styles.ContentText}>Find out how I created this portfolio...</h4>
                        </div>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link href="/">
                        <Image src="/home/Area.jpeg" alt="Area" className={styles.Image} width={450} height={450}/>
                        <div className={styles.ContentTextContainer}>
                            <h4 className={styles.Title}>Area</h4>
                            <h4 className={styles.ContentText}>Web/Mobile application able to connect API to create CRM...</h4>
                        </div>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link href="/">
                        <Image src="/home/Trade.webp" alt="Trade" className={styles.Image} width={450} height={450} />
                        <div className={styles.ContentTextContainer}>
                            <h4 className={styles.Title}>Trade</h4>
                            <h4 className={styles.ContentText}>Create an algorithm able to long and short a market...</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects;