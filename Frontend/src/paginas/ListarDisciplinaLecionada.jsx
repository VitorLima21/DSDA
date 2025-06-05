import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "http://localhost:3000/disciplinas";

const ListarDisciplinaLecionada = () => {
    const [disciplinas, setDisciplinas] = useState([]);

    const buscarDados = async () => {
        try {
            const resultado = await fetch(API_URL);
            const data = await resultado.json();
            setDisciplinas(data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteDisciplinas = async (id) => {
        if (confirm("Deseja realmente excluir?")) {
            await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            alert("Disciplina excluída com sucesso!");
            buscarDados();
        } else {
            alert("Você cancelou a exclusão!");
        }
    };

    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <h2 className="text-center mb-4">Lista de Disciplinas Lecionadas</h2>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr className="table-dark">
                        <th>ID</th>
                        <th>Professor (ID)</th>
                        <th>Disciplina (ID)</th>
                        <th>Turno</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {disciplinas.map((dados) => (
                        <tr key={dados.id}>
                            <td>{dados.id}</td>
                            <td>{dados.professor_id}</td>
                            <td>{dados.disciplina_id}</td>
                            <td>{dados.turno}</td>
                            <td className="d-flex justify-content-center">
    <Link to={`/professores/disciplinas/editar/${dados.id}`} className="btn btn-primary me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-pencil me-2" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 
            3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 
            1-.168.11l-5 2a.5.5 0 0 
            1-.65-.65l2-5a.5.5 0 0 
            1 .11-.168zM11.207 2.5 13.5 4.793 14.793 
            3.5 12.5 1.207zm1.586 3L10.5 3.207 4 
            9.707V10h.5a.5.5 0 0 1 
            .5.5v.5h.5a.5.5 0 0 1 
            .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 
            3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 
            12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 
            0 1-.468-.325"/>
        </svg>
        Editar
    </Link>

    <button onClick={() => deleteDisciplinas(dados.id)} className="btn btn-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-trash3 me-2" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 
            .5.5v1H6v-1a.5.5 0 0 
            1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 
            9.5 0h-3A1.5 1.5 0 0 0 5 
            1.5v1H1.5a.5.5 0 0 0 
            0 1h.538l.853 10.66A2 2 0 0 0 
            4.885 16h6.23a2 2 0 0 0 
            1.994-1.84l.853-10.66h.538a.5.5 0 0 0 
            0-1zm1.958 1-.846 
            10.58a1 1 0 0 
            1-.997.92h-6.23a1 1 0 0 
            1-.997-.92L3.042 
            3.5zm-7.487 
            1a.5.5 0 0 1 
            .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 
            5.03a.5.5 0 0 1 
            .47-.53Zm5.058 
            0a.5.5 0 0 1 
            .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 
            0 0 1 .528-.47M8 4.5a.5.5 0 0 1 
            .5.5v8.5a.5.5 0 0 1-1 
            0V5a.5.5 0 0 1 .5-.5"/>
        </svg>
        Excluir
    </button>
</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarDisciplinaLecionada;
