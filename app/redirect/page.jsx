"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/redirection.module.css";

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/user"); // Redireciona para a página de usuários após alguns segundos
        }, 3000); // 3 segundos de espera

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, [router]);

    return (
        <div className={styles.redirectBackground}>
            <div className={styles.redirectMessage}>
                <h1>Redirecionando, aguarde uns segundos...</h1>
            </div>
        </div>
    );
}