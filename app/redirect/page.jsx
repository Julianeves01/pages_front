"use client";
import { useState } from "react";
import RedirectPage from "../redirect/page"; // Certifique-se de que o caminho está correto
import styles from "../../styles/login.module.css";

export default function LoginPage() {
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleContinue = () => {
        setIsRedirecting(true); // Ativa o redirecionamento
    };

    if (isRedirecting) {
        return <RedirectPage destination="/user" delay={3000} />;
    }

    return (
        <div className={styles.loginContainer}>
            <h1>Bem-vindo à página de Login</h1>
            <button onClick={handleContinue} className={styles.continueButton}>
                Continuar
            </button>
        </div>
    );
}