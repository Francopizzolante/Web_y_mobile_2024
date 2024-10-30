import React from 'react';

function Projects() {
  return (
    <div>
      <h4>Proyectos:</h4>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Aplicación de Seguridad para Redes Wi-Fi:</h5>
              <p className="card-text">Una aplicación para la evaluación de seguridad en redes Wi-Fi, que escanea y reporta vulnerabilidades como contraseñas débiles y configuraciones incorrectas.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Videojuego de Plataforma 2D:</h5>
              <p className="card-text">Un videojuego de plataforma 2D con temática retro, incorporando mecánicas de juego como recolección de ítems, resolución de puzzles y combate.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Projects;
