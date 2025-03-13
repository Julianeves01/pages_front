"use client";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/navigation";


export default function SignUp() {
    const router = useRouter();

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.article}>
                </div>
                <div className={styles.aside}>
                    <div className={styles.title}>
                        <h1>SIGN UP</h1>
                    </div>
                    <div className={styles.inputs}>
                        <input type "text" placeholder= "Julia Simões Neves"/>
                        <input type "password" placeholder= "Senha" />
                        <div className={styles.password}>
                            <p>Confirme sua senha</p>
                        </div>
                        <input type "password" placeholder= "Confirme sua senha" />
                        <button type="submit" onClick={handleLogin}>
                            CONTINUE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}a