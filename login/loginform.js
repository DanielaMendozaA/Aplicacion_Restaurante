
const dataUser = ['christian', '123'];


const mostrarData = () =>{
    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('password').value;
    const aux = validarUsuario(email, contrasenia);
    console.log(aux)
    mensaje(aux);
    if(aux === true) return email;
}

const validarUsuario = (email, contrasenia) => {
    if(email === dataUser[0] && contrasenia === dataUser[1]){
        alert('Ingreso')
        return true
    }else{
        return false;
    }
}

const mensaje = (aux) => {
    const cuadroBlanco = document.createElement('div');
    
    cuadroBlanco.style.cssText = `
    width: 30vw;
    height: 30vh;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 15px;
    display: flex;
    justify-content: center;
	align-items: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

    
    if (aux === false) {
        const mensajeHTML = '<h1>Mensaje de no email o password no coincide</h1>';
        cuadroBlanco.innerHTML = mensajeHTML;
        document.body.appendChild(cuadroBlanco);
        cuadroBlanco.style.display = 'block';
        document.body.appendChild(cuadroBlanco);

        setTimeout(() => {
            cuadroBlanco.style.display = 'none';
        }, 3000);
    }
    
    
    }
    
    