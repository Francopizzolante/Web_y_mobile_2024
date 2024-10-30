import React from 'react';

function Header() {
  return (
    <div className="text-center mb-4">
      <img src="/Foto.jpg" alt="Foto de perfil" className="rounded-circle img-fluid" style={{ width: "150px" }} />
      <h2>Franco Pizzolante</h2>
      <p>Ingeniero en sistemas</p>
      <hr />
    </div>
  );
}

export default Header;
