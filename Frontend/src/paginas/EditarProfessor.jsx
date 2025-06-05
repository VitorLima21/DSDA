import React from "react";
import { useNavigate } from "react-router-dom";
import ProfessorFormEditar from "../componentes/ProfessorFormEditar";
import { useParams } from "react-router-dom";
import { useState } from "react";


const API_URL = "http://localhost:3000/professores";

const EditarProfessor = () => {
    const navegar = useNavigate();
    const [professor, setProfessor] = useState(null);
    const {id} = useParams();


    const enviarFormulario = async (professorAtualizado) => {
        await fetch(`${API_URL}/${id}`,{
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(professorAtualizado)
        });
        
        navegar("/professores")

    }
    

    return(
        <div>
            <h1 className="text-center mt-4">Editar Professor</h1>

            <ProfessorFormEditar aoEnviar={enviarFormulario} dadosIniciais={professor}></ProfessorFormEditar>

            
        </div>
    )

}
export default EditarProfessor;