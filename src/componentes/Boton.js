import React from 'react';
import '../hojas-de-estilo/styles.css' 

function Boton({texto, esBotonDeClic, manejarClick}){
  return (
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClick}>
      
      {texto}
    </button>
  );
}

export default Boton;