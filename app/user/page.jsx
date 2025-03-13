"use client";
import { useRouter } from "next/navigation";


export default function UserPage() {
    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '20px' }}>
            <h1>Login realizado com sucesso!</h1>
            <img src="../perfil.png" alt="Foto do usuário" style={{ borderRadius: '50%' }} />
            <p>Nome: Julia Simões Neves</p>
            <p>Email: julia.s.neves6@aluno.senai.br</p>
            <p>Data de Aniversário: 17/10/2007</p>
            <p>Curso: Desenvolvimento de Sistemas</p>
            <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Logout
            </button>
        </div>
    );
}