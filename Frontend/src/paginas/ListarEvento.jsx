import React from "react";

const ListarEvento = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Listar Evento</h2>
      <h1>Datas proximas</h1>
      <br/>

       

        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Evento</th>
      <th scope="col">Descrição</th>
      <th scope="col">Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Festa junina</td>
      <td>Todas as turmas no auditório, evento começará ás 14h30</td>
      <td>14/06</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Evento há ser divulgado</td>
      <td>Coordenação passará mais informações perto da data</td>
      <td>03/08</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Interclasse</td>
      <td>Apenas ensino médio, durante período de aula</td>
      <td>03/08 </td>
    </tr>
        <tr>
      <th scope="row">4</th>
      <td>World Skills</td>
      <td>Apenas para alunos cadastrados, e ocupará parte do refeitório</td>
      <td>10/08 </td>
    </tr>
  </tbody>
</table>
     
    </div>
    
  );
}

export default ListarEvento;