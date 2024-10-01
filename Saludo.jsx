


const Saludo = (props) => {
    const { nombre, idioma } = props;
  
    const saludoidioma = (idioma) => {
      switch (idioma) {
        case 'es':
          return 'Hola';
        case 'en':
          return 'Hello';
        case 'fr':
          return 'Bonjour';
        default:
          return 'Mala mia';
      }
    };
  
    return <h1>{saludoidioma(idioma)} {nombre}</h1>;
  };
  
  export default Saludo;
  