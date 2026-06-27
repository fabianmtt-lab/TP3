const datos = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Elemento 6"];
const elementos = [...datos];

const contenedor = document.getElementById('contenedor-flex');
const boton = document.getElementById('btn-interaccion');

function renderizar() {

    contenedor.innerHTML = '';


    elementos.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;

        contenedor.appendChild(div);
    })
}

boton.addEventListener('click', () => {
    elementos.reverse();
    renderizar();
});
  
renderizar();