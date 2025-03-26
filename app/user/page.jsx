"use client";
import { useRouter } from "next/navigation";
import styles from "../../styles/user.module.css";

export default function UserPage() {
    const router = useRouter();

    const handleLogout = () => {
        router.push("/"); // Redireciona para a página inicial
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.aside}>
                    <img 
                        src="./fundoLogin.jpg" 
                        alt="Imagem de Fundo" 
                        className={styles.asideImage} 
                    />
                </div>
                <div className={styles.article}>
                    <div className={styles.title}>
                        <img 
                            src="/perfil.jpeg" 
                            alt="Foto de Perfil" 
                            className={styles.profileImage} 
                        />
                        <h1>Julia Simões Neves</h1>
                        <h3>@Julianeves01</h3>
                    </div>
                    <div className={styles.description}>
                        <h2>CONHEÇA ME</h2>
                        <p>Estudante do curso Desenvolvimento de Sistemas pela rede escolar técnica SENAI - VALINHOS</p>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.link}>
                            <img src="/linkedin.png" alt="linkedin" />
                        </div>
                        <div className={styles.link}>
                            <img src="/github.png" alt="github" />
                        </div>
                        <div className={styles.link}>
                            <img src="/instagram.jpg" alt="instagram" />
                        </div>
                        <div className={styles.link}>
                            <img src="/html.png" alt="html" />
                        </div>
                        <div className={styles.link}>
                            <img src="/css.png" alt="css" />
                        </div>
                        <div className={styles.link}>
                            <img src="/postman.png" alt="postman" />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            LOG OUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}