import { useEffect, useState } from "react";

const DisciplinaLecionadaFormEditar = ({ aoEnviar, dadosIniciais }) => {
    const [professor_id, setProfessor] = useState('');
    const [disciplina_id, setDisciplina] = useState('');
    const [turno, setTurno] = useState('');

    useEffect(() => {
        if (dadosIniciais) {
            setProfessor(dadosIniciais.professor_id || '');
            setDisciplina(dadosIniciais.disciplina_id || '');
            setTurno(dadosIniciais.turno || '');
        }
    }, [dadosIniciais]);

    const enviar = (e) => {
        e.preventDefault();
        console.log("Enviando disciplina:", { professor_id, disciplina_id, turno });

        aoEnviar({ professor_id, disciplina_id, turno });
    };

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <form onSubmit={enviar}>
                <input
                    className="form-control mb-3"
                    type="text"
                    value={professor_id}
                    placeholder="Professor"
                    required
                    onChange={(e) => setProfessor(e.target.value)}
                />
                <input
                    className="form-control mb-3"
                    type="text"
                    value={disciplina_id}
                    placeholder="Disciplina"
                    required
                    onChange={(e) => setDisciplina(e.target.value)}
                />
                <input
                    className="form-control mb-3"
                    type="text"
                    value={turno}
                    placeholder="Turno"
                    required
                    onChange={(e) => setTurno(e.target.value)}
                />
                <div className="container d-flex flex-column align-items-center">
                    <button className="btn btn-primary" type="submit">
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DisciplinaLecionadaFormEditar;
