import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de importar useNavigate

const API_URL = "http://localhost:3000/responsaveis"; // Substitua pela URL da sua API

const CadastrarResponsavel = () => {
    const navegar = useNavigate(); // Usar useNavigate
    const [id, setAlunoID] = useState('');
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [emailResponsavel, setEmailResponsavel] = useState('');
    const [telefoneResponsavel, setTelefoneResponsavel] = useState('');
    const [mensagemResponsavel, setMensagemResponsavel] = useState(''); // Para mensagens de feedback

    const enviar = async (evento) => {
        evento.preventDefault();
        console.log("✔ Enviando responsavel:", { id, nomeResponsavel, emailResponsavel, telefoneResponsavel });

        try {
            const resposta = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, nomeResponsavel, emailResponsavel, telefoneResponsavel })
            });

            if (resposta.ok) {
                setMensagemResponsavel('Responsável cadastrado com sucesso!');
                // Limpar o formulário
                setAlunoID('');
                setNomeResponsavel('');
                setEmailResponsavel('');
                setTelefoneResponsavel('');

                // Navegar para a lista de responsáveis após um tempo
                setTimeout(() => {
                    navegar("/responsaveis"); // Navegar para a página de listar responsáveis
                });
            } else {
                const erroTexto = await resposta.text();
                setMensagemResponsavel('Erro ao cadastrar responsável: ' + erroTexto);
            }
        } catch (error) {
            setMensagemResponsavel('Erro na comunicação com o servidor: ' + error.message);
        }
    };

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <div className="container mt-4">
                <h2 className="text-center">Cadastrar Responsável</h2>
                <p style={{ textAlign: "center" }}>Insira as informações do responsável aqui para o cadastro.</p>
            </div>
            <form onSubmit={enviar} action="">
                <input className="form-control" style={{ maxWidth: "1000px" }} type="text"
                    value={id}
                    placeholder="Escreva o ID do responsável"
                    required
                    onChange={(evento) => setAlunoID(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="text"
                    value={nomeResponsavel}
                    placeholder="Escreva o nome"
                    required
                    onChange={(evento) => setNomeResponsavel(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="email"
                    value={emailResponsavel}
                    placeholder="Escreva o email"
                    required
                    onChange={(evento) => setEmailResponsavel(evento.target.value)} />
                <br />
                <input className="form-control" style={{ maxWidth: "1000px" }} type="tel"
                    value={telefoneResponsavel}
                    placeholder="Escreva o telefone"
                    required
                    onChange={(evento) => setTelefoneResponsavel(evento.target.value)} />
                <br />
                <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-primary" type="submit">Cadastrar</button>
                </div>
                {mensagemResponsavel && <div className="alert alert-info mt-3">{mensagemResponsavel}</div>} {/* Mensagem de feedback */}
            </form>
        </div>
    );
};

export default CadastrarResponsavel;



