import React from 'react';

function Boton({texto, esBotonDeClic}){
  return (
    <button className={esBotonDeClic ? 'botonClic' : 'boton-reiniciar' }>
      {texto}
    </button>
  );
}