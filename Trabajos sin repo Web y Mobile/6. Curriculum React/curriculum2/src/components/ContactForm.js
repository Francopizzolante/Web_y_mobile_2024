import React, { useState } from 'react';

function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const validarNombre = (event) => setNombre(event.target.value);
  const validarEmail = (event) => setEmail(event.target.value);
  const validarAsunto = (event) => setAsunto(event.target.value);
  const validarMensaje = (event) => setMensaje(event.target.value);

  const validarInformacion = (event) => {
    event.preventDefault();
    
    if (nombre === "") {
      alert("El nombre es obligatorio.");
      return false;
    }

    if (email === "") {
      alert("El email es obligatorio.");
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("El email no es válido.");
      return false;
    }

    if (asunto === "") {
      alert("El asunto es obligatorio.");
      return false;
    }

    if (mensaje === "") {
      alert("La descripción es obligatoria.");
      return false;
    }

    console.log("Formulario enviado:", { nombre, email, asunto, mensaje });
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={toggleForm}>
          {showForm ? 'Ocultar formulario' : 'Contacto'}
        </button>
      </div>

      {showForm && (
        <form className="mt-3" onSubmit={validarInformacion}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={(validarNombre)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" value={email} onChange={(validarEmail)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">Asunto:</label>
            <input type="text" className="form-control" id="asunto" placeholder="Ingresa el asunto" value={asunto} onChange={(validarAsunto)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje:</label>
            <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" value={mensaje} onChange={(validarMensaje)} required></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;