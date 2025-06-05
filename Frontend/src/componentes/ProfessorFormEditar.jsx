import React, { useEffect, useState } from "react";

const ProfessorFormEditar = ({ aoEnviar, dadosIniciais }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [especialidade, setEspecialidade] = useState('');

    useEffect(() => {
        if (dadosIniciais) {
            setNome(dadosIniciais.nome || '');
            setEmail(dadosIniciais.email || '');
            setTelefone(dadosIniciais.telefone || '');
            setEspecialidade(dadosIniciais.especialidade || '');
        }
    }, [dadosIniciais]);

    const enviar = (evento) => {
        evento.preventDefault();
        console.log("Enviando professor:", { nome, email, telefone, especialidade });

        aoEnviar({ nome, email, telefone, especialidade });
    };

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviar}>
                <input
                    className="form-control mb-3"
                    type="text"
                    value={nome}
                    placeholder="Nome"
                    required
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className="form-control mb-3"
                    type="text"
                    value={email}
                    placeholder="E-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="form-control mb-3"
                    type="text"
                    value={telefone}
                    placeholder="Telefone"
                    required
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <input
                    className="form-control mb-3"
                    type="text"
                    value={especialidade}
                    placeholder="Especialidade"
                    required
                    onChange={(e) => setEspecialidade(e.target.value)}
                />
                <div className="container d-flex flex-column align-items-center">
                    <button className="btn btn-primary" type="submit">
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfessorFormEditar;
