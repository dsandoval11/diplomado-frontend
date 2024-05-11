// Definicion de variables con var (EVITAR SU USO)
function varExample() {
  var nombre = 'David'

  if(true) {
    var nombre = 'luis';
    console.log(nombre);
  }
  console.log(nombre);
}

// varExample();

// Definicion de variables con const
const PI = 3.14;
// console.log(PI);

// Definicion de variables con let
function letExample() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // x 20
  }
  console.log(x);// x 10
}

// letExample();

// Uso del fetch
function fetchExample() {
  fetch('https://rickandmortyapi.com/api')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocurrió un error al realizar la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(console.log)
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    })
}

// fetchExample();

// Async - await
async function fetchExampleAsyncAwait() {
  try {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const data = await resp.json();
    const { results } = data;

    const [ rick,, summer ] = results;

    console.log(rick)
    console.log(summer)
    
    console.log(results)
    const { image } = results[0];
    const img = document.querySelector("#img");
    img.setAttribute('src', image);
  } catch (error) {
    console.log(error)
  }
}

fetchExampleAsyncAwait();

