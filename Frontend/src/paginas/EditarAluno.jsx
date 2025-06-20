import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:3000/alunos";

const EditarAluno = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState({
    nome: '',
    data_nascimento: '',
    turma: '',
    email: '',
    telefone: ''
  });

  useEffect(() => {
    const buscarAluno = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setAlunos(data);
      } catch (error) {
        console.error("Erro ao buscar aluno:", error);
      }
    };
    buscarAluno();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlunos(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alunos), // Alterado para 'alunos'
      });
      alert('Aluno atualizado com sucesso!');
      navigate('/alunos');
    } catch (error) {
      console.error("Erro ao atualizar aluno:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Editar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={alunos.nome} // Alterado para 'alunos'
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Data de Nascimento</label>
          <input
            type="date"
            className="form-control"
            name="data_nascimento"
            value={alunos.data_nascimento} // Alterado para 'alunos'
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Turma</label>
          <input
            type="text"
            className="form-control"
            name="turma"
            value={alunos.turma} // Alterado para 'alunos'
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={alunos.email} // Alterado para 'alunos'
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            name="telefone"
            value={alunos.telefone} // Alterado para 'alunos'
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Salvar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/alunos')}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditarAluno;
