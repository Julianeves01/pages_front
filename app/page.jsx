"use client";
import styles from "../styles/Home.module.css";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.background}>
            <div className={styles.container}>
            <div className={styles.article}>
            </div>
            <div className={styles.aside}>
                <div className={styles.title}>
                    <h1>LOGIN</h1>
                </div>
                <div className={styles.inputs}>
                    <input type="text" placeholder="E-mail Adress or Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">CONTINUE</button>
                </div>
                <div className={styles.button}>
                    <p>Or</p>
                    <h2 onClick = {() => router.push ("/signup")}>SIGN UP </h2>
                </div>
            </div>
        </div>
    </div>
    )
}