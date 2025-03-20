"use client";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();

    const handleLogin = () => {
        console.log("Botão CONTINUE clicado");
        router.push("/redirect"); // Redireciona para a página de redirecionamento
    };

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
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Confirme sua senha" />
                        <button type="submit" onClick={handleLogin}>
                            CONTINUE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}