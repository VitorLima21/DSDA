import React from "react";

import DisciplinaLecionadaFormCadastrar from "../componentes/DisciplinaLecionadaFormCadastrar";

const API_URL = "http://localhost:3000/professores/disciplina_lecionada";

const CadastrarDisciplinaLecionada = () => {
    
    return(
        <div>
            <h2 className="text-center mt-4">Cadastrar Disciplina Lecionada</h2>
            <DisciplinaLecionadaFormCadastrar/>
        </div>
    )
}
export default CadastrarDisciplinaLecionada;