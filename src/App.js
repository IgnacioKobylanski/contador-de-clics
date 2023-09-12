
import './App.css';
import Boton from './componentes/Boton';
import contadorLogo from './imagenes/contador-logo.png'
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {
  
  const[numClics, setNumClics] = useState(0);
  
  const manejarClick = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='contenedor-logo'>
        <img className='logo-app'
        src={contadorLogo}
        alt='logo-de-la-pagina'
        />
      </div>
      <div className='contenedor-principal'>
      
      <Contador numClics={numClics}
      />

        <Boton
          texto={'Clic'}
          esBotonDeClic={true}
          manejarClick={manejarClick}/>
        <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
