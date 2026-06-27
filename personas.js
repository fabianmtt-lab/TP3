const formulario = document.getElementById('form-persona');
const tablaCuerpo = document.getElementById('cuerpo-tabla');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaM = alturaCm / 100;
    const imc = (peso / (alturaM * alturaM)).toFixed(2);


    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${alturaCm}</td>
        <td>${peso}</td>
        <td>${imc}</td>
        <td><button class="btn-eliminar">Eliminar</button></td>
    `;


    fila.querySelector('.btn-eliminar').addEventListener('click', () => {
        fila.remove();
    });


    tablaCuerpo.appendChild(fila);


    formulario.reset();
})