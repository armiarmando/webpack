 import '../css/componentes.css';


export const saludar = (nombre) => {
    console.log('creando etiqueta h1, en el html');
    const h1 = document.createElement('h1');
    h1.innerText= `Hola, ${nombre}, como estas perrote mayor?`;
    document.body.append(h1);
}

