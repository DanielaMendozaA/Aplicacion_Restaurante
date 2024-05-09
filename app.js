const options = {
    method: 'GET',
    url: 'https://beers-list.p.rapidapi.com/beers/italy',
    headers: {
      'X-RapidAPI-Key': '7fe86bd6f3mshb7f8320f0f43933p18904djsnc940b4e03823',
      'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
    }
  };
  
  
async function cargarDatos() {
  try {
    const response = await fetch(options.url, {
      headers: {
        'X-RapidAPI-Key': '7fe86bd6f3mshb7f8320f0f43933p18904djsnc940b4e03823',
        'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
      }
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
  }

}

let arrayDatos = []

const main = (data) => {
  arrayDatos = data
  console.log(arrayDatos)




}




async function modificarDatos(){
  try{
    const respuesta = await cargarDatos()
    main(respuesta)

  }catch(error){
    console.log("Error al recoger los datos");
  }
}

modificarDatos()


