import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/clientes";


const EventosFormCadastrar= () => {
    const navegar = useNavigate();
    const [eventoID, setEventoID] = useState('')
    const [titulo, settitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [local, setLocal] = useState('')
    const [publicoAlvo, setPublico] = useState('')


    const enviar = async (evento)=>{
        evento.preventDefault();
        console.log("✔ Enviando Participação:",{titulo, eventoID, descricao, data})
        await fetch(API_URL,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({titulo, eventoID, descricao, data})
        })
    }

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviar} action="">
                <input class="form-control " style={{maxWidth:"1000px", width:"800000px" }} type="text"
                    value={titulo}
                    placeholder="Informe o título do seu evento:"
                    required
                    onChange={(evento) => settitulo(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px", width:"800000px"}}  type="text"
                    value={eventoID}
                    placeholder="Escreva o ID do seu evento:"
                    required
                    onChange={(evento) => setEventoID(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={descricao}
                    placeholder="Escreva a descrição sobre o seu evento:"
                    required
                    onChange={(evento) => setDescricao(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={data}
                    placeholder="Informe a data do seu evento: "
                    required
                    onChange={(evento) => setData(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={local}
                    placeholder="Informe o local do seu evento: "
                    required
                    onChange={(evento) => setLocal(evento.target.value)} />
                    <br />
                <input class="form-control" style={{maxWidth:"1000px"}}  type="text"
                    value={publicoAlvo}
                    placeholder="Informe o público-alvo do seu evento: "
                    required
                    onChange={(evento) => setPublico(evento.target.value)} />
                    <br />
                <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-primary " type="submit">Cadastrar Evento </button>
                </div>
                
            </form>
        </div>
    )
}
export default EventosFormCadastrar;