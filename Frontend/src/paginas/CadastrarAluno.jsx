import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const API_URL = "http://localhost:3000/alunos"; // Definir a URL da API

const CadastrarAluno = () => {
    const navegar = useNavigate(); // Usar useNavigate
    const [id, setAlunoID] = useState('');
    const [nome, setNome] = useState('');
    const [data_nascimento, setData_Nascimento] = useState('');
    const [turma, setTurma] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState(''); // Para mensagens de feedback

    const enviar = async (evento) => {
        evento.preventDefault();
        console.log("✔ Enviando aluno:", { id, nome, data_nascimento, turma, email, telefone });

        try {
            const resposta = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, nome, data_nascimento, turma, email, telefone })
            });

            if (resposta.ok) {
                setMensagem('Aluno cadastrado com sucesso!');
                // Limpar o formulário
                setAlunoID('');
                setNome('');
                setData_Nascimento('');
                setTurma('');
                setEmail('');
                setTelefone('');

             // Navegar para a lista de alunos após um tempo
                setTimeout(() => navegar("/alunos"));
               
            } else {
                const erroTexto = await resposta.text();
                setMensagem('Erro ao cadastrar aluno: ' + erroTexto);
            }
        } catch (error) {
            setMensagem('Erro na comunicação com o servidor: ' + error.message);
        }

    };

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <div className="container mt-4">
                <h2 className="text-center">Cadastrar Aluno</h2>
                <p style={{ textAlign: "center" }}>Insira as informações do aluno aqui para o cadastro.</p>
            </div>
            <form onSubmit={enviar} action="">
                <input className="form-control" style={{ maxWidth: "1000px" }} type="text"
                    value={id}
                    placeholder="Escreva o ID do aluno"
                    required
                    onChange={(evento) => setAlunoID(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="date"
                    value={data_nascimento}
                    placeholder="Escreva a data de nascimento do aluno"
                    required
                    onChange={(evento) => setData_Nascimento(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="text"
                    value={turma}
                    placeholder="Escreva a turma do aluno"
                    required
                    onChange={(evento) => setTurma(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="text"
                    value={nome}
                    placeholder="Escreva o nome"
                    required
                    onChange={(evento) => setNome(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="email"
                    value={email}
                    placeholder="Escreva o email"
                    required
                    onChange={(evento) => setEmail(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="tel"
                    value={telefone}
                    placeholder="Escreva o telefone"
                    required
                    onChange={(evento) => setTelefone(evento.target.value)} />
                <br />
                <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-primary" type="submit">Cadastrar</button>
                </div>
                {mensagem && <div className="alert alert-info mt-3">{mensagem}</div>} {/* Mensagem de feedback */}
            </form>
        </div>
    );
}

export default CadastrarAluno;
