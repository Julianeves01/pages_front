"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/redirection.module.css";

export default function RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/user");
        }, 3000); 

        return () => clearTimeout(timer); 
    }, [router]);

    return (
        <div className={styles.redirectBackground}>
            <div className={styles.redirectMessage}>
                Redirecionando, aguarde alguns segundos...
            </div>
        </div>
    );
}