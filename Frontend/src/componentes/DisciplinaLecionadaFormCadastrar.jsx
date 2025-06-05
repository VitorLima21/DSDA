import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/disciplina_lecionada";
const PROFESSORES_URL = "http://localhost:3000/professores";

const DisciplinaLecionadaFormCadastrar = () => {
    const navegar = useNavigate();

    const [professores, setProfessores] = useState([]);
    const [professor_id, setProfessor] = useState('');
    const [disciplina_id, setDisciplina] = useState('');
    const [turno, setTurno] = useState('');

    useEffect(() => {
        const carregarProfessores = async () => {
            try {
                const resposta = await fetch(PROFESSORES_URL);
                const dados = await resposta.json();
                setProfessores(dados);
            } catch (erro) {
                console.error("Erro ao carregar professores:", erro);
            }
        };

        carregarProfessores();
    }, []);

    const enviarDisciplina = async (e) => {
        e.preventDefault();

        console.log("Enviando disciplina:", {
            professor_id,
            disciplina_id,
            turno
        });

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                professor_id,
                disciplina_id,
                turno
            })
        });

        navegar("/disciplinas-lecionadas");
    };

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviarDisciplina}>
                <select
                    className="form-control mb-3"
                    value={professor_id}
                    required
                    onChange={(e) => setProfessor(e.target.value)}
                >
                    <option value="">Selecione o Professor</option>
                    {professores.map((prof) => (
                        <option key={prof.id} value={prof.id}>
                            {prof.nome}
                        </option>
                    ))}
                </select>

                <input
                    className="form-control mb-3"
                    type="text"
                    value={disciplina_id}
                    placeholder="Escreva a Disciplina"
                    required
                    onChange={(e) => setDisciplina(e.target.value)}
                />

                <select
                    className="form-control mb-3"
                    value={turno}
                    required
                    onChange={(e) => setTurno(e.target.value)}
                >
                    <option value="">Selecione o Turno</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                </select>

                <div className="container d-flex flex-column align-items-center">
                    <button className="btn btn-primary" type="submit">SALVAR</button>
                </div>
            </form>
        </div>
    );
};

export default DisciplinaLecionadaFormCadastrar;
