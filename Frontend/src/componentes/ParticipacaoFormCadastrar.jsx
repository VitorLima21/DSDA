import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/clientes";


const ParticipacaoFormCadastrar= () => {
    const navegar = useNavigate();
    const [alunoID, setAlunoID] = useState('')
    const [eventoID, setEventoID] = useState('')
    const [participacaoID, setParticipacaoID] = useState('')
    const [observacao, setObservacao] = useState('')


    const enviar = async (evento)=>{
        evento.preventDefault();
        console.log("✔ Enviando Participação:",{alunoID, eventoID, participacaoID, observacao})
        await fetch(API_URL,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({alunoID, eventoID, participacaoID, observacao})
        })
    }

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviar} action="">
                <input class="form-control " style={{maxWidth:"1000px", width:"800000px" }} type="text"
                    value={alunoID}
                    placeholder="Escreva o seu ID de aluno:"
                    required
                    onChange={(evento) => setAlunoID(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px", width:"800000px"}}  type="text"
                    value={eventoID}
                    placeholder="Escreva o ID do seu evento:"
                    required
                    onChange={(evento) => setEventoID(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={participacaoID}
                    placeholder="Escreva o seu ID de participação:"
                    required
                    onChange={(evento) => setParticipacaoID(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={observacao}
                    placeholder="Escreva sua observação: "
                    required
                    onChange={(evento) => setObservacao(evento.target.value)} />
                    <br />
                <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-primary " type="submit">Cadastrar Participação </button>
                </div>
                
            </form>
        </div>
    )
}
export default ParticipacaoFormCadastrar;