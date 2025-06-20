import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:3000/responsaveis";

const EditarResponsavel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [responsavel, setResponsavel] = useState({
    nomeResponsavel: '',
    emailResponsavel: '',
    telefoneResponsavel: ''
  });

  useEffect(() => {
    const buscarResponsavel = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setResponsavel(data);
      } catch (error) {
        console.error("Erro ao buscar responsável:", error);
      }
    };
    buscarResponsavel();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponsavel(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responsavel),
      });
      alert('Responsável atualizado com sucesso!');
      navigate('/responsaveis');
    } catch (error) {
      console.error("Erro ao atualizar responsável:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Editar Responsável</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome do Responsável</label>
          <input
            type="text"
            className="form-control"
            name="nomeResponsavel"
            value={responsavel.nomeResponsavel}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="emailResponsavel"
            value={responsavel.emailResponsavel}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            name="telefoneResponsavel"
            value={responsavel.telefoneResponsavel}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Salvar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/responsaveis')}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditarResponsavel;
