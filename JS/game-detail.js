const juegos = JSON.parse(localStorage.getItem('juegos'));
const main = document.querySelector('main');

function getQueryParams() {
  const params = window.location.search;
  console.log(params.split('='))
  
  const paramsUrl = new URLSearchParams(params);
  const paramsEntries = Object.fromEntries(paramsUrl);
  const index = paramsEntries.id;
  console.log(index)
  return index;
};

const gameDetail = () => {
  const idx = getQueryParams();
  const juego = juegos[idx];
  main.innerHTML = `
    <main>
      <div id="main">
      </div>
      <!-- Portada-->
      <div class="col">
      <img src="${juego.background}" alt="${juego.title}">
      </div>
      <div class="row p-2">
          <div class="col-3 m-3" >
            <img class=" col-xl-12 col-md-12 col-sm-3 portada" src="${juego.url}" alt="${juego.title}">
            <p class="text-white mt-3"> ${juego.description}</p>
            <p class="text-white mt-3"> Reseñas generales: <span class="span"> Mayormente positivas (425,103)</span></p> 
            <p class="text-white mt-3"> Fecha de lanzamiento: ${juego.date}</p>
            <p class="text-white mt-3"> Desarrollador: <span class="span">${juego.developer}</span> </p>
            <p class="text-white mt-3"> Editor: <span class="span">${juego.editor}</span> </p>
            <button class="btn span my-1 mx-1 boton">Cyberpubk</button>
            <button class="btn span my-1 mx-1 boton">Mundo abierto</button>
            <button class="btn span my-1 mx-1 boton">Rol</button>
            <button class="btn span my-1 mx-1 boton">FPS</button>
            <br>
            <hr>
            <button class="btn btn-primary fw-bold mx-2">Comprar</button>
            <button class="btn btn-primary fw-bold mx-2">Añadir al carrito</button>
          </div>
          <div class="col-5 col-md-8 col-sm-4">
              <iframe width="720" height="360" 
              src="https://www.youtube.com/embed/Q_v3ttvCVfA" 
              title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
    </main>
            `; 
        };



gameDetail();