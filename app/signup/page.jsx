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
                        <h1>Registre-se</h1>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <input type="text" placeholder="julia.s.neves6@aluno.senai.br" />
                    <input type="password" placeholder="171007" />
                    <div className={styles.password}>
                        <p>Confirme a senha</p>
                    </div>
                    <input type="password" placeholder="171007" />
                    <button type="submit">NEXT</button>
                </div>
                <div className={styles.bottom}>
                    <p>ou</p>
                    <h2 onClick={() => router.push("/user")}>LOGIN</h2>
                </div>
            </div>
        </div>
    );
}