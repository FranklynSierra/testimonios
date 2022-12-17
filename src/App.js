
import './App.css';
import Testimonio from './componentes/testimonio.js';

function App() {
  return (

    <div className="App">
      <div className='contenedor-principal'>
         <h1>mejores frases de algunos personajes populares</h1>
         <Testimonio
         nombre='kyojuro rengoku'
         pais='japon'
         imagen='rengoku'
         cargo='cazador de demonio'
         testimonio='Los bendecidos con más talento que otros deben usar esa fuerza por el bien del mundo. Es imperdonable usar una fuerza concebida por el cielo para herir a otros y empoderarse' />
        <Testimonio
        nombre="ezio euditore"
       pais="italia"
       imagen="ezio"
      cargo="asesino"
      testimonio=" Mejor ser feliz en esta vida, que aspirar a serlo en la venidera. Requiescat in Pace."/>
     <Testimonio
      nombre="vass montenegro"
      pais="island rook"
      imagen="vaas"
     cargo="contrabandista"
     testimonio="¿Sabes la definición de locura? Locura... Es hacer las mismas cosas una y otra vez, esperando un cambio. Eso... Es estar loco." />
     
     </div>
    </div>
  );
}

export default App;
