import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/alunos";

const ListarAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const navigate = useNavigate(); // Importando e usando useNavigate

    const buscarDados = async () => {
        try { 
            const resultado = await fetch(API_URL);
            const data = await resultado.json();
            setAlunos(data);
        } catch (error) {
            console.error(error);
        }
    };

    const deletarAluno = async (id) => {
        if (confirm("Você tem certeza que deseja apagar?")) {
            await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            alert("Excluído com sucesso");
            buscarDados();
        } else {
            alert("Você cancelou!");
        }
    };

    useEffect(() => {
        buscarDados();
    }, []);

    const handleEditar = (id) => {
        navigate(`/alunos/editar/:id`); // Usando a função correta para redirecionar
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Lista de Alunos</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de nascimento</th>
                        <th>Turma</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((dados) => (
                        <tr key={dados.id}>
                            <td>{dados.id}</td>
                            <td>{dados.nome}</td>                           
                            <td>{dados.data_nascimento}</td>
                            <td>{dados.turma}</td>
                            <td>{dados.email}</td>
                            <td>{dados.telefone}</td>
                            <td>
                                <button onClick={() => handleEditar(dados.id)} className="btn btn-sm btn-primary me-2">Editar</button>
                                <button onClick={() => deletarAluno(dados.id)} className="btn btn-sm btn-danger me-2">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarAluno;

