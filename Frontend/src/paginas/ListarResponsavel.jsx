import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/responsaveis";

const ListarResponsavel = () => {

    const [responsaveis, setResponsavel] = useState([]);
        const navigate = useNavigate(); // Importando e usando useNavigate

    const buscarDadosResponsavel = async () => {

        try{ 
            const resultado = await fetch(API_URL);
            const data = await resultado.json();
            setResponsavel(data)}
        catch(error){
            console.error(error)
        }
       
    }

    const deletarResponsavel = async(id) =>{
      if(confirm("Você tem certeza que deseja apagar?")){
      await fetch (`${API_URL}/${id}`, {method:"DELETE"});
      alert("Excluído com sucessso")
      }else{
        alert("Você cancelou!");
      }
      buscarDadosResponsavel();
    }

    useEffect(() => {
        buscarDadosResponsavel();
    }, []);

    const handleEditar = (id) => {
        navigate(`/responsaveis/editar/:id`); // Usando a função correta para redirecionar
    };

    return (
        <div className="container mt-4">
            
            <h2 className="text-center mb-4">Lista de Responsaveis</h2>

            <table class="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th></th>
                    
                        
                    </tr>
                </thead>
                <tbody>

                {responsaveis.map((dados) => (
                        <tr key={dados.id}>
                            <td>{dados.id}</td>
                            <td>{dados.nomeResponsavel}</td>
                            <td>{dados.emailResponsavel}</td> 
                            <td>{dados.telefoneResponsavel}</td>
                             
                           
                          <td>
                       <button onClick={() => handleEditar(dados.id)} className="btn btn-sm btn-primary me-2">Editar</button>
                       <button onClick={() => deletarResponsavel(dados.id)} className="btn btn-sm btn-danger me-2">Excluir</button>
                          </td>
                        </tr>
                    )
                )
                }


                </tbody>
            </table>

        </div>
    )
}
export default ListarResponsavel;