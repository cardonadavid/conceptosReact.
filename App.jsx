import { Saludo1, Saludo, Contenedor, Contador } from './components';

const App = () => {
  return (
    <div>
      <Contenedor>
        <Saludo1 nombre="Cristian" idioma="es" />
      </Contenedor>
      <Contenedor>
      <Saludo nombre="Cristian" idioma="es" />
      <Saludo nombre="Tania" idioma="en" />
      <Saludo nombre="David" idioma="fr" />
      </Contenedor>
      <Contenedor>
        <Contador />
      </Contenedor>
    </div>
  );
};

export default App;