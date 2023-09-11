
import './App.css';
import Boton from './componentes/Boton';
import contadorLogo from './imagenes/contador-logo.png'

function App() {
  const manejarClick = () =>{
    console.log('Clic');
  }

  const reiniciarContador = () =>{
    console.log('Reiniciando');
  }

  return (
    <div className='App'>
      <div className='contenedor-logo'>
        <img className='logo-app'
        src={contadorLogo}
        alt='logo-de-la-pagina'
        />
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto={'Clic'}
          esBotonDeClic={true}
          manejarClick={manejarClick}/>
        <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
