import React from "react";

function NavBar() {
    const padding = {
        padding : 50
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="h1">Creana 3D</div>
      <ul className="navbar navbar-nav col align-items-center justify-content-center" >
        <li style ={padding}><a className ="nav-link" href= "#.html">Home</a></li>
        <li style ={padding}><a className ="nav-link" href= "#.html">Productos propios</a></li>
        <li style ={padding}><a className ="nav-link" href= "#.html">Piezas personalizadas</a></li>
        <li style ={padding}><a className ="nav-link" href= "#.html">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
