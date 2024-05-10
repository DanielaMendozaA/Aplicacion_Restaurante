let clientesDB = []
let repartidoresDB = []

class UtilityUser{
    static validarNombre = function (nombre) {
        let nombreValido = true
        let regex = /^[a-zA-Z]+ [a-zA-Z]+$/
        if(!regex.test(nombre)){
            document.getElementById('nombre-error').textContent = "Nombre inválido"
            nombreValido = false
            return
        }else{
            document.getElementById('nombre-error').textContent = ""
        }
        return nombreValido
    }

    static validarCorreo = function(correo){
        let correoValido = true
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!regex.test(correo)){
            document.getElementById('correo-error').textContent = "Correo inválido"
            correoValido = false
            return
        }else{
            document.getElementById('correo-error').textContent = ""
        }
        return correoValido
    }

    static validarContrasenia = function(contrasenia){
        let contraseniaValida = true
        if(contrasenia.length < 8){
            document.getElementById('pass-error').textContent = "Contraseña inválida"
            contraseniaValida = false
            return
        }else{
            document.getElementById('pass-error').textContent = ""
        }
        return contraseniaValida
    }

}//Cierre class UtilityUser

function GeneralUser(nombre,correo,clave){
    this.nombre = nombre
    this.correo = correo
    this.clave = clave
}

function Cliente(nombre,correo,clave,direccion,telefono){
    GeneralUser.call(this,nombre,correo,clave)
    this.direccion = direccion
    this.telefono = telefono
}

Cliente.prototype = Object.create(GeneralUser.prototype)
Cliente.prototype.constructor = Cliente

function Repartidor(nombre,correo,clave,vehiculo,disponibilidad){
    GeneralUser.call(this,nombre,correo,clave)
    this.vehiculo = vehiculo
    this.disponibilidad = disponibilidad
}

Repartidor.prototype = Object.create(GeneralUser.prototype)
Repartidor.prototype.constructor = Repartidor




document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('formulario-registro').addEventListener('submit',function(event){
        event.preventDefault()

        let nombre = document.getElementById('nombre').value
        let nombreValido = UtilityUser.validarNombre(nombre)
        let correo = document.getElementById('correo').value
        let correoValido = UtilityUser.validarCorreo(correo)
        let contrasenia = document.getElementById('contrasenia').value
        let passValido = UtilityUser.validarContrasenia(contrasenia)

        let cliente = new Cliente(nombre,correo,contrasenia)
    
        if(nombreValido && correoValido && passValido){
            clientesDB.push(cliente)
        }

        console.log(clientesDB);
    
    })
})
