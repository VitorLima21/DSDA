import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = "http://localhost:3000/disciplinas";


const DisciplinaLecionadaFormCadastrar = () => {

    const navegar = useNavigate();
    const [professor_id, setProfessor] = useState('');
    const [disciplina_id, setDisciplina] = useState('');
    const [turno, setTurno] = useState('');


    const enviarDisciplina = async (e) => {

        e.preventDefault()
        console.log(" Enviando disciplina: ", { professor_id, disciplina_id, turno });

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ professor_id, disciplina_id, turno })
        });

        navegar("/disciplinas-lecionadas")


    }

    return (

        <div className="container mt-4 d-flex flex-column align-items-center">

            <form onSubmit={enviarDisciplina} action="">
                <input className="form-control mb-3" type="text" value={professor_id} placeholder="Escreva o nome do Professor" required onChange={(e) => setProfessor(e.target.value)} />
                <input className="form-control mb-3" type="text" value={disciplina_id} placeholder="Escreva a Disciplina" required onChange={(e) => setDisciplina(e.target.value)} />
                <input className="form-control mb-3" type="text" value={turno} placeholder="Escreva o turno" required onChange={(e) => setTurno(e.target.value)} />
                
                <div className="container d-flex flex-column align-items-center">
                    <button className="btn btn-primary" type="submit">SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default DisciplinaLecionadaFormCadastrar;