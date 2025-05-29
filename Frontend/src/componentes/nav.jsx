   <nav>
            <Link to={"/clientes"}> Listar Clientes</Link>
            <Link to={"/clientes/cadastrar"}> Cadastrar Clientes</Link>
            <button onClick={sair}>Sair</button>
          </nav>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Gerencimento de Clientes</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

{/* Clientes */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Clientes
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/clientes">Listar Clientes</Link></li>
    <li><Link className="dropdown-item" to="/clientes/cadastrar">Cadastrar Cliente</Link></li>
  </ul>
</li>

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