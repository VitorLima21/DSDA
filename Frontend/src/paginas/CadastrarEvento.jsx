import React from "react";
import EventosFormCadastrar from "../componentes/EventosFormCadastrar";

const CadastrarEvento = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Cadastre seu evento</h2>
      <p className="text-center">Informe as características do seu evento e cadastre-o!</p>
      <EventosFormCadastrar/>
    </div>
    
  );
}

export default CadastrarEvento;