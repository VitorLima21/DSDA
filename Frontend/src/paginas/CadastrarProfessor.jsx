import React from "react";
import { useNavigate } from "react-router-dom"; 
import ProfessorFormCadastrar from "../componentes/ProfessorFormCadastrar";


const API_URL = "http://localhost:3000/professores";

const CadastrarProfessores = () => {
    
    return(
        <div className="container mt-4 d-flex flex-column align-items-center">
            <h2 className="text-center mb-1">Cadastrar Professores</h2>
            <ProfessorFormCadastrar/>
        </div>
    )
}

export default CadastrarProfessores;