import React , {useEffect, useState} from "react";

const ClienteFormEditar = ({aoEnviar, dadosIniciais={}}) =>{

    const [nome, setNome] = useState('');
    const [email, setEmail]= useState('');
    const [telefone, setTelefone]= useState('');

    const enviar = (evento) =>{
        evento.preventDefault();
        aoEnviar({nome, email, telefone })
    } 

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">

    
            <form onSubmit={enviar} 
            style={{ 
                display:'flex',
                flexDirection:'column',
                gap: '10px',
                maxWidth:'300px'
            }}>
                <input class="form-control" style={{maxWidth:"1000px"}} 
                value={nome} 
                type="text" 
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Nome:"
                required
                />            
                <input class="form-control" style={{maxWidth:"1000px"}} 
                value={email} 
                type="text" 
                onChange={(evento) => setEmail(evento.target.value)}
                placeholder="Email:"
                required
                />
                <input class="form-control" style={{maxWidth:"1000px"}} 
                value={telefone} 
                type="text" 
                onChange={(evento) => setTelefone(evento.target.value)}
                placeholder="Telefone:"
                required/>

                <div className="d-flex flex-column align-items-center">
                    <button className="btn btn-primary " type="submit">Atualizar</button>
                </div>
            </form>
        </div>
    )

}

export default ClienteFormEditar;