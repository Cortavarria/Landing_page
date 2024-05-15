const nombreForm = document.getElementById('nombreForm')
const apellidoForm = document.getElementById('apellidoForm')
const correoForm = document.getElementById('correoForm')
const telefonoForm = document.getElementById('telefonoForm')
const msjForm = document.getElementById('msjForm')
const formData = document.getElementById('formData')


const validarForm = (e) => {
    e.preventDefault()
    console.log(e.target.id)
}

formData.addEventListener('click', validarForm)


