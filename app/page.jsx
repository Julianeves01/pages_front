"use client";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Por favor, preencha todos os campos!");
            return;
        }
        router.push("/user");
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.article}></div>
                <div className={styles.aside}>
                    <div className={styles.title}>
                        <h1>LOGIN</h1>
                    </div>
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            placeholder="E-mail Address or Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className={styles.error}>{error}</p>}
                        <div className={styles.options}>
                            <label>
                                <input type="checkbox" /> lembre-se de mim
                            </label>
                            <a href="#">Esqueci minha senha</a>
                        </div>
                        <button type="submit" onClick={handleLogin}>
                            CONTINUE
                        </button>
                    </div>
                    <div className={styles.button}>
                        <p>Ou</p>
                        <h2 onClick={() => router.push("/signup")}>Registre-se</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}