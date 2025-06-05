import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const API_URL = "http://localhost:3000/professores";

const ProfessorFormCadastrar = () => {
    const navegar = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [especialidade, setEspecialidade] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        console.log(" Enviando professor: ", { nome, email, telefone, especialidade });

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone, especialidade })
        });

        navegar("/professores")
    }


    return (
        <div className="container mt-4 d-flex flex-column align-items-center">


            
        <form  onSubmit={enviar} action="">
            <input className="form-control mb-3" style={{maxWidth:"400px"}} type="text" value={nome} placeholder="Escreva o nome" required onChange={(e) => setNome(e.target.value)} />
            <input className="form-control mb-3" style={{maxWidth:"400px"}} type="text" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input className="form-control mb-3" style={{maxWidth:"400px"}} type="text" value={telefone} placeholder="Telefone" required onChange={(e) => setTelefone(e.target.value)} />
            <input className="form-control mb-3" style={{maxWidth:"400px"}} type="text" value={especialidade} placeholder="Especialidade" required onChange={(e) => setEspecialidade(e.target.value)} />
        <div className="container d-flex flex-column align-items-center">

            <button className="btn btn-primary" type="submit">SALVAR</button>
            </div>
        </form>
        </div>
    )
}

export default ProfessorFormCadastrar;    
