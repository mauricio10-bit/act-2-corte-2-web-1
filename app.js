function cambiarType() {
    var miInput = document.getElementById("contrasena");
    var cambiarTipoBoton = document.getElementById("togglePassword");

    if (miInput.type === "password") {
        miInput.type = "text";
        cambiarTipoBoton.textContent = "Ocultar";
    } else {
        miInput.type = "password";
        cambiarTipoBoton.textContent = "Mostrar";
    }
}

function alerta(tipo) {
    var alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-danger", "alert-dismissible", "fade", "show");

    var mensaje = ""

    alerta.innerHTML = `
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          ${mensaje.innerHTML = "<strong>Campo Obligatorio!</strong> " + tipo}
        `;

    alerta.querySelector(".btn-close").addEventListener("click", function () {
        alerta.remove();
    });

    document.body.prepend(alerta);

    window.scrollTo(0, 0);

    setTimeout(function () {
        alerta.classList.remove("show");
        setTimeout(function () {
            alerta.remove();
        },100);
    }, 3000);
}

let usuarios = [
    { cedula: "000", nombre: "Mauricio", apellido: "Pallares", direccion: "calle 58", vehiculo: "Ferrari", solteroa: "No", trabaja: "Si", profesional: "Si" },
    { cedula: "000", nombre: "Juan", apellido: "Perez", direccion: "calle 50", vehiculo: "Mazda", solteroa: "Si", trabaja: "Si", profesional: "No" },
    { cedula: "000", nombre: "Diogo", apellido: "Simanca", direccion: "cra 60", vehiculo: "Nissan", solteroa: "No", trabaja: "No", profesional: "No" },
    { cedula: "000", nombre: "Alex", apellido: "Martinez", direccion: "cra 8", vehiculo: "Lamborghini", solteroa: "Si", trabaja: "Si", profesional: "Si" },
    { cedula: "000", nombre: "Pedro", apellido: "Otero", direccion: "calle 72", vehiculo: "Honda", solteroa: "Si", trabaja: "Si", profesional: "No" }
]

let elemento = document.getElementById('tabla-body')

const listar = () => {
    let contenido = ""
    for (let i = 0; i < usuarios.length; i++) {
        contenido += `<tr><th scope="row">${i + 1}</th><td>${usuarios[i].cedula}</td><td>${usuarios[i].nombre}</td><td>${usuarios[i].apellido}</td><td>${usuarios[i].direccion}</td><td>${usuarios[i].vehiculo}</td><td>${usuarios[i].solteroa}</td><td>${usuarios[i].trabaja}</td><td>${usuarios[i].profesional}</td></tr>`
    }
    elemento.innerHTML = contenido
}

const registrar = () => {
    let i = 1
    const cedula = document.getElementById('cedula').value.trim()
    const nombre = document.getElementById('nombre').value.trim()
    const apellido = document.getElementById('apellido').value.trim()
    const direccion = document.getElementById('direccion').value.trim()
    const vehiculo = document.getElementById('vehiculo').value.trim()
    const solteroa = document.getElementById('solteroa').value.trim()
    const trabaja = document.getElementById('trabaja').value.trim()
    const profesional = document.getElementById('profesional').value.trim()

    if (!cedula) return alerta('Ingrese su cedula')
    if (!nombre) return alerta('Ingrese su nombre')
    if (!apellido) return alerta('Ingrese su apellido')
    if (!direccion) return alerta('Ingrese su direccion')
    if (!vehiculo) return alerta('Ingrese su marca de vehiculo')
    if (!solteroa) return alerta('Diga si está soltero/a')
    if (!trabaja) return alerta('Diga si trabaja')
    if (!profesional) return alerta('Diga si es profesional')

    elemento.innerHTML += `<tr><th scope="row">${i}</th><td>${cedula}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td><td>${vehiculo}</td><td>${solteroa}</td><td>${trabaja}</td><td>${profesional}</td></tr>`
    i++
    const nuevoUsuario = { cedula, nombre, apellido, direccion, vehiculo, solteroa, trabaja, profesional }
    usuarios.push(nuevoUsuario)
    document.getElementById('cedula').value = ""
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
    document.getElementById('direccion').value = ""
    document.getElementById('vehiculo').value = ""
    document.getElementById('solteroa').value = ""
    document.getElementById('trabaja').value = ""
    document.getElementById('profesional').value = ""
}

const iniciarSesion = () => {
    const correo = document.getElementById('correo').value.trim()
    const contraseña = document.getElementById('contrasena').value.trim()
    if (!correo) return alerta('Ingrese su correo electronico')
    if (!contraseña) return alerta('Ingrese su contraseña')
}

const limpiar = () => {
    document.getElementById('cedula').value = ""
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
    document.getElementById('direccion').value = ""
    document.getElementById('vehiculo').value = ""
    document.getElementById('solteroa').value = ""
    document.getElementById('trabaja').value = ""
    document.getElementById('profesional').value = ""
}

const limpiarLogin = () => {
    document.getElementById('correo').value = ""
    document.getElementById('contrasena').value = ""
}