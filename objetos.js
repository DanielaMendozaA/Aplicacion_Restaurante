// function GeneralUser(nombre,correo,clave){
//     this.nombre = nombre
//     this.correo = correo
//     this.clave = clave
// }

// function Cliente(nombre,correo,clave,direccion,telefono){
//     GeneralUser.call(this,nombre,correo,clave)
//     this.direccion = direccion
//     this.telefono = telefono
// }

// Cliente.prototype = Object.create(GeneralUser.prototype)
// Cliente.prototype.constructor = Cliente

// function Repartidor(nombre,correo,clave,vehiculo,disponibilidad){
//     GeneralUser.call(this,nombre,correo,clave)
//     this.vehiculo = vehiculo
//     this.disponibilidad = disponibilidad
// }

// Repartidor.prototype = Object.create(GeneralUser.prototype)
// Repartidor.prototype.constructor = Repartidor


// document.getElementById('formulario-login').addEventListener('submit',function(event){
//     event.preventDefault()

//     let correo = document.getElementById('email').value
//     let contrasenia = document.getElementById('password').value

//     console.log(correo)
//     console.log(contrasenia)

// })

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('formulario-login').addEventListener('submit',function(event){
        event.preventDefault()

        let correo = document.getElementById('email').value
        let contrasenia = document.getElementById('password').value

        console.log(correo)
        console.log(contrasenia)
    })
})
