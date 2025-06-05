import React from "react";
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import senai from './assets/senai.png'; // ajuste o caminho conforme necessário

import Login from "./paginas/Login";
// import ListarCliente from "./paginas/ListarCliente";
// import CadastrarCliente from "./paginas/CadastrarCliente";
// import EditarCliente from "./paginas/EditarCliente";

// Clientes
// import ListarCliente from "./paginas/ListarCliente";
// import CadastrarCliente from "./paginas/CadastrarCliente";
// import EditarCliente from "./paginas/EditarCliente";

// Alunos e Responsáveis
import ListarAluno from "./paginas/ListarAluno";
import CadastrarAluno from "./paginas/CadastrarAluno";
import EditarAluno from "./paginas/EditarAluno";

import ListarResponsavel from "./paginas/ListarResponsavel";
import CadastrarResponsavel from "./paginas/CadastrarResponsavel";
import EditarResponsavel from "./paginas/EditarResponsavel";

// Professores
import ListarProfessor from "./paginas/ListarProfessor";
import CadastrarProfessor from "./paginas/CadastrarProfessor";
import EditarProfessor from "./paginas/EditarProfessor";

// Disciplinas Lecionadas
import ListarDisciplinaLecionada from "./paginas/ListarDisciplinaLecionada";
import CadastrarDisciplinaLecionada from "./paginas/CadastrarDisciplinaLecionada";
import EditarDisciplinaLecionada from "./paginas/EditarDisciplinaLecionada";

// Turmas
import ListarTurma from "./paginas/ListarTurma";
import CadastrarTurma from "./paginas/CadastrarTurma";
import EditarTurma from "./paginas/EditarTurma";

// Alocação de Alunos
import ListarAlocacao from "./paginas/ListarAlocacao";
import CadastrarAlocacao from "./paginas/CadastrarAlocacao";
import EditarAlocacao from "./paginas/EditarAlocacao";

// Avaliações
import ListarAvaliacao from "./paginas/ListarAvaliacao";
import CadastrarAvaliacao from "./paginas/CadastrarAvaliacao";
import EditarAvaliacao from "./paginas/EditarAvaliacao";

// Notas
import ListarNota from "./paginas/ListarNota";
import CadastrarNota from "./paginas/CadastrarNota";
import EditarNota from "./paginas/EditarNota";

// Matrículas
import ListarMatricula from "./paginas/ListarMatricula";
import CadastrarMatricula from "./paginas/CadastrarMatricula";
import EditarMatricula from "./paginas/EditarMatricula";

// Rematrículas
import ListarRematricula from "./paginas/ListarRematricula";
import CadastrarRematricula from "./paginas/CadastrarRematricula";
import EditarRematricula from "./paginas/EditarRematricula";

// Disciplinas
import ListarDisciplina from "./paginas/ListarDisciplina";
import CadastrarDisciplina from "./paginas/CadastrarDisciplina";
import EditarDisciplina from "./paginas/EditarDisciplina";

// Carga Horária por Série
import ListarCargaHoraria from "./paginas/ListarCargaHoraria";
import CadastrarCargaHoraria from "./paginas/CadastrarCargaHoraria";
import EditarCargaHoraria from "./paginas/EditarCargaHoraria";

// Horários
import ListarHorario from "./paginas/ListarHorario";
import CadastrarHorario from "./paginas/CadastrarHorario";
import EditarHorario from "./paginas/EditarHorario";

// Salas
import ListarSala from "./paginas/ListarSala";
import CadastrarSala from "./paginas/CadastrarSala";
import EditarSala from "./paginas/EditarSala";

// Eventos
import ListarEvento from "./paginas/ListarEvento";
import CadastrarEvento from "./paginas/CadastrarEvento";
import EditarEvento from "./paginas/EditarEvento";

// Participações
import ListarParticipacao from "./paginas/ListarParticipacao";
import CadastrarParticipacao from "./paginas/CadastrarParticipacao";
import EditarParticipacao from "./paginas/EditarParticipacao";

// Biblioteca
import ListarLivro from "./paginas/ListarLivro";
import CadastrarLivro from "./paginas/CadastrarLivro";
import EditarLivro from "./paginas/EditarLivro";

// Empréstimos
import ListarEmprestimo from "./paginas/ListarEmprestimo";
import CadastrarEmprestimo from "./paginas/CadastrarEmprestimo";
import EditarEmprestimo from "./paginas/EditarEmprestimo";
const App = () => {
  const location = useLocation()
  const navegar = useNavigate();

  const estaNaTelaLogin = location.pathname === '/';

  const sair = () => {
    navegar("/")
  }
  return (
    <>
      {!estaNaTelaLogin && (
        // <div style={{ padding: "1rem", background: "#f0f0f0" }}>
        //   <nav>
        //     <Link to={"/clientes"}> Listar Clientes</Link>
        //     <Link to={"/clientes/cadastrar"}> Cadastrar Clientes</Link>
        //     <button onClick={sair}>Sair</button>
        //   </nav>
        // </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={senai} alt="Logo" width="100" height="30" className="d-inline-block align-text-top" /></a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

{/* Clientes */}
{/* <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Clientes
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/clientes">Listar Clientes</Link></li>
    <li><Link className="dropdown-item" to="/clientes/cadastrar">Cadastrar Cliente</Link></li>
  </ul>
</li> */}

{/* Alunos */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Alunos
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/alunos">Listar Alunos</Link></li>
    <li><Link className="dropdown-item" to="/alunos/cadastrar">Cadastrar Aluno</Link></li>
    <li><Link className="dropdown-item" to="/responsaveis">Listar Responsáveis</Link></li>
    <li><Link className="dropdown-item" to="/responsaveis/cadastrar">Cadastrar Responsável</Link></li>
  </ul>
</li>

{/* Professores */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Professores
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/professores">Listar Professores</Link></li>
    <li><Link className="dropdown-item" to="/professores/cadastrar">Cadastrar Professor</Link></li>
    <li><Link className="dropdown-item" to="/disciplinas-lecionadas">Disciplinas Lecionadas</Link></li>
    <li><Link className="dropdown-item" to="/disciplinas-lecionadas/cadastrar">Cadastrar Disciplina Lecionada</Link></li>
  </ul>
</li>

{/* Turmas */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Turmas
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/turmas">Listar Turmas</Link></li>
    <li><Link className="dropdown-item" to="/turmas/cadastrar">Cadastrar Turma</Link></li>
    <li><Link className="dropdown-item" to="/alocacao-alunos">Alocação de Alunos</Link></li>
    <li><Link className="dropdown-item" to="/alocacao-alunos/cadastrar">Cadastrar Alocação</Link></li>
  </ul>
</li>

{/* Notas e Avaliações */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Notas e Avaliações
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/avaliacoes">Listar Avaliações</Link></li>
    <li><Link className="dropdown-item" to="/avaliacoes/cadastrar">Cadastrar Avaliação</Link></li>
    <li><Link className="dropdown-item" to="/lancamento-notas">Lançamento de Notas</Link></li>
    <li><Link className="dropdown-item" to="/lancamento-notas/cadastrar">Cadastrar Nota</Link></li>
  </ul>
</li>

{/* Matrículas */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Matrículas
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/matriculas">Listar Matrículas</Link></li>
    <li><Link className="dropdown-item" to="/matriculas/cadastrar">Cadastrar Matrícula</Link></li>
    <li><Link className="dropdown-item" to="/rematriculas">Listar Rematrículas</Link></li>
    <li><Link className="dropdown-item" to="/rematriculas/cadastrar">Cadastrar Rematrícula</Link></li>
  </ul>
</li>

{/* Disciplinas */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Disciplinas
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/disciplinas">Listar Disciplinas</Link></li>
    <li><Link className="dropdown-item" to="/disciplinas/cadastrar">Cadastrar Disciplina</Link></li>
    <li><Link className="dropdown-item" to="/carga-horaria-serie">Carga Horária por Série</Link></li>
    <li><Link className="dropdown-item" to="/carga-horaria-serie/cadastrar">Cadastrar Carga Horária</Link></li>
  </ul>
</li>

{/* Horários */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Horários
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/horario-aulas">Horários de Aulas</Link></li>
    <li><Link className="dropdown-item" to="/horario-aulas/cadastrar">Cadastrar Horário</Link></li>
    <li><Link className="dropdown-item" to="/salas">Salas</Link></li>
    <li><Link className="dropdown-item" to="/salas/cadastrar">Cadastrar Sala</Link></li>
  </ul>
</li>

{/* Eventos Escolares */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Eventos Escolares
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/eventos">Listar Eventos</Link></li>
    <li><Link className="dropdown-item" to="/eventos/cadastrar">Cadastrar Evento</Link></li>
    <li><Link className="dropdown-item" to="/participacao-alunos">Participações</Link></li>
    <li><Link className="dropdown-item" to="/participacao-alunos/cadastrar">Cadastrar Participação</Link></li>
  </ul>
</li>

{/* Biblioteca */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Biblioteca
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/livros">Listar Livros</Link></li>
    <li><Link className="dropdown-item" to="/livros/cadastrar">Cadastrar Livro</Link></li>
    <li><Link className="dropdown-item" to="/emprestimos-livros">Empréstimos</Link></li>
    <li><Link className="dropdown-item" to="/emprestimos-livros/cadastrar">Cadastrar Empréstimo</Link></li>
  </ul>
</li>

</ul>

              <button onClick={sair} type="button" class="btn btn-outline-danger">Sair </button>

            </div>

          </div>
        </nav>
      )
      }


      <Routes>
        
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Clientes */}
        {/* <Route path="/clientes" element={<ListarCliente />} />
        <Route path="/clientes/cadastrar" element={<CadastrarCliente />} />
        <Route path="/clientes/editar/:id" element={<EditarCliente />} /> */}

        {/* Alunos */}
        <Route path="/alunos" element={<ListarAluno />} />
        <Route path="/alunos/cadastrar" element={<CadastrarAluno />} />
        <Route path="/alunos/editar/:id" element={<EditarAluno />} />

        {/* Responsáveis */}
        <Route path="/responsaveis" element={<ListarResponsavel />} />
        <Route path="/responsaveis/cadastrar" element={<CadastrarResponsavel />} />
        <Route path="/responsaveis/editar/:id" element={<EditarResponsavel />} />

        {/* Professores */}
        <Route path="/professores" element={<ListarProfessor />} />
        <Route path="/professores/cadastrar" element={<CadastrarProfessor />} />
        <Route path="/professores/editar/:id" element={<EditarProfessor />} />

        {/* Disciplinas Lecionadas */}
        <Route path="/disciplinas-lecionadas" element={<ListarDisciplinaLecionada />} />
        <Route path="/disciplinas-lecionadas/cadastrar" element={<CadastrarDisciplinaLecionada />} />
        <Route path="/professores/disciplinas/editar/:id" element={<EditarDisciplinaLecionada />} />

        {/* Turmas */}
        <Route path="/turmas" element={<ListarTurma />} />
        <Route path="/turmas/cadastrar" element={<CadastrarTurma />} />
        <Route path="/turmas/editar/:id" element={<EditarTurma />} />

        {/* Alocação de Alunos */}
        <Route path="/alocacao-alunos" element={<ListarAlocacao />} />
        <Route path="/alocacao-alunos/cadastrar" element={<CadastrarAlocacao />} />
        <Route path="/alocacao-alunos/editar/:id" element={<EditarAlocacao />} />

        {/* Avaliações */}
        <Route path="/avaliacoes" element={<ListarAvaliacao />} />
        <Route path="/avaliacoes/cadastrar" element={<CadastrarAvaliacao />} />
        <Route path="/avaliacoes/editar/:id" element={<EditarAvaliacao />} />

        {/* Lançamento de Notas */}
        <Route path="/lancamento-notas" element={<ListarNota />} />
        <Route path="/lancamento-notas/cadastrar" element={<CadastrarNota />} />
        <Route path="/lancamento-notas/editar/:id" element={<EditarNota />} />

        {/* Matrículas */}
        <Route path="/matriculas" element={<ListarMatricula />} />
        <Route path="/matriculas/cadastrar" element={<CadastrarMatricula />} />
        <Route path="/matriculas/editar/:id" element={<EditarMatricula />} />

        {/* Rematrículas */}
        <Route path="/rematriculas" element={<ListarRematricula />} />
        <Route path="/rematriculas/cadastrar" element={<CadastrarRematricula />} />
        <Route path="/rematriculas/editar/:id" element={<EditarRematricula />} />

        {/* Disciplinas */}
        <Route path="/disciplinas" element={<ListarDisciplina />} />
        <Route path="/disciplinas/cadastrar" element={<CadastrarDisciplina />} />
        <Route path="/disciplinas/editar/:id" element={<EditarDisciplina />} />

        {/* Carga Horária por Série */}
        <Route path="/carga-horaria-serie" element={<ListarCargaHoraria />} />
        <Route path="/carga-horaria-serie/cadastrar" element={<CadastrarCargaHoraria />} />
        <Route path="/carga-horaria-serie/editar/:id" element={<EditarCargaHoraria />} />

        {/* Horário das Aulas */}
        <Route path="/horario-aulas" element={<ListarHorario />} />
        <Route path="/horario-aulas/cadastrar" element={<CadastrarHorario />} />
        <Route path="/horario-aulas/editar/:id" element={<EditarHorario />} />

        {/* Salas */}
        <Route path="/salas" element={<ListarSala />} />
        <Route path="/salas/cadastrar" element={<CadastrarSala />} />
        <Route path="/salas/editar/:id" element={<EditarSala />} />

        {/* Eventos */}
        <Route path="/eventos" element={<ListarEvento />} />
        <Route path="/eventos/cadastrar" element={<CadastrarEvento />} />
        <Route path="/eventos/editar/:id" element={<EditarEvento />} />

        {/* Participação de Alunos */}
        <Route path="/participacao-alunos" element={<ListarParticipacao />} />
        <Route path="/participacao-alunos/cadastrar" element={<CadastrarParticipacao />} />
        <Route path="/participacao-alunos/editar/:id" element={<EditarParticipacao />} />

        {/* Livros */}
        <Route path="/livros" element={<ListarLivro />} />
        <Route path="/livros/cadastrar" element={<CadastrarLivro />} />
        <Route path="/livros/editar/:id" element={<EditarLivro />} />

        {/* Empréstimos de Livros */}
        <Route path="/emprestimos-livros" element={<ListarEmprestimo />} />
        <Route path="/emprestimos-livros/cadastrar" element={<CadastrarEmprestimo />} />
        <Route path="/emprestimos-livros/editar/:id" element={<EditarEmprestimo />} />
      </Routes>

    </>
  )
}

export default App;