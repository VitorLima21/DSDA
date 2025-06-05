import React, { useEffect, useState } from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import DisciplinaLecionadaFormEditar from "../componentes/DisciplinaLecionadaFormEditar";

const API_URL = "http://localhost:3000/disciplinas";

const EditarDisciplinaLecionada = () => {
    const navegar = useNavigate();
    const [disciplina, setDisciplina] = useState(null);
    const { id } = useParams();

 
    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((res) => res.json())
            .then((dados) => setDisciplina(dados));
    }, [id]);

    const enviarFormulario = async (disciplinaAtualizado) => {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(disciplinaAtualizado)
        });

        navegar("/disciplinas-lecionadas");
    };

    return (
        <div>
            <h1 className="text-center mt-4">Editar Disciplina</h1>
            <DisciplinaLecionadaFormEditar
                aoEnviar={enviarFormulario}
                dadosIniciais={disciplina}
            />
        </div>
    );
};

export default EditarDisciplinaLecionada;
