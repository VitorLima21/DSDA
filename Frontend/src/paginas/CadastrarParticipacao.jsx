import React from "react";
import ParticipacaoFormCadastrar from "../componentes/ParticipacaoFormCadastrar";


const CadastrarParticipacao = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Cadastre sua participação</h2>
      <br />
      <p className="text-center" >Insira seus dados e cadastre-se no sistema para confirmar sua participação no evento!</p>
      <br />
      <ParticipacaoFormCadastrar/>
    </div>

  );
}

export default CadastrarParticipacao;