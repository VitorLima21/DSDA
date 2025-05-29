import React, {useState, useEffect} from "react";
import ClienteFormEditar from "../componentes/ClienteFormEditar";
import { useNavigate, useParams } from "react-router-dom";
const API_URL = "http://localhost:3000/clientes";

const EditarCliente = ()=>{

    const [cliente, setClientes] = useState(null)
    const navegar = useNavigate();

    const {id} = useParams();
 
    const enviarFormulario = async (clienteAtualizado)=>{
        await fetch(`${API_URL}/${id}`,{
            method:"PUT",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(clienteAtualizado)
        })
        navegar("/clientes");
    }

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
        
            <h2 className="text-center mb-1">Editar Cliente</h2>
            <ClienteFormEditar aoEnviar={enviarFormulario} dadosIniciais={cliente}/>
        </div>
    )
}
export default EditarCliente;