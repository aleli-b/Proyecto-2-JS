const juegos = JSON.parse(localStorage.getItem('juegos')) || [];

const searchInput = document.getElementById('searchBar');
const searchButton= document.getElementById('searchButton');

let current_page = 1;
let rows = 6;

const renderCarousel = ()=>{
    const juegosCortos = juegos.slice(0, 5)
    for(let i = 0; i < juegosCortos.length; i++){
        const contenedor = document.getElementById('carouselContainer');
        const item = document.createElement('div');
        item.classList = 'carousel-item';
        if(i === 0){
            item.classList = 'carousel-item active'
        };
        item.innerHTML = `
            <img src="${juegosCortos[i].url}" class="d-block w-100" alt="${juegosCortos[i].title}">
            <div class="carousel-caption d-none d-md-block">
            <h5>${juegosCortos[i].title}</h5>
            <p>${juegosCortos[i].description.slice(0, 90)}</p>
        `;
        contenedor.appendChild(item);        
    }
}

renderCarousel()

const search = () => {
    const input = document.getElementById('searchBar').value;
    const gameCard = document.querySelectorAll('#gameCard');
    
    for (let i = 0; i < gameCard.length; i++){
        const title = gameCard[i].querySelector('h3').innerText
        if (!title.toLowerCase().includes(input)){
            gameCard[i].style.display = "none";
        } else {
            gameCard[i].style.display = ""
        };
    };
};

const renderGames = (items, rows_per_page, page) => {
    page--;
    let contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = "";
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginated_items = items.slice(start, end);
    for (let i = 0; i < paginated_items.length; i++){
        const tarjeta = document.createElement('div');
        tarjeta.id = "gameCard"
        tarjeta.innerHTML = `
            <a href="./pages/gameDetails.html?id=${i}">
            <img class="img-fluid" src="${paginated_items[i].url}">
            <h3 class="title">${paginated_items[i].title}</h3>
            <a>       
            `;
        contenedor.appendChild(tarjeta);
    }
}


const modalRender1 = (() =>{
    juegos.slice(20, 26).forEach(juego =>{
        const modalContainer = document.getElementById('modal1')
        const modalCard = document.createElement('div')
        modalCard.innerHTML=`
        <img class="img-fluid" src="${juego.url}">
        <h3 class="title">${juego.title}</h3>        
        `;
        modalContainer.appendChild(modalCard);
   })
})()

const modalRender2 = (() =>{
    juegos.slice(5, 11).forEach(juego =>{
        const modalCard = document.createElement('div')
        const modalContainer = document.getElementById('modal2')
        modalCard.innerHTML=`
        <img class="img-fluid" src="${juego.url}">
        <h3 class="title">${juego.title}</h3>        
        `;
        modalContainer.appendChild(modalCard);
    })
}) ()

const modalRender3 = (() =>{
    juegos.slice(14, 20).forEach(juego =>{
        const modalCard = document.createElement('div')
        const modalContainer = document.getElementById('modal3')
        modalCard.innerHTML=`
        <img class="img-fluid" src="${juego.url}">
        <h3 class="title">${juego.title}</h3>        
        `;
        modalContainer.appendChild(modalCard);
    })
}) ()

function setupPagination (items, rows_per_page) {
    let page_count = Math.ceil(items.length / rows_per_page);
    const pageNumbers = document.getElementById('pagination')
    pageNumbers.innerHTML = "";
    for (let i = 1; i < page_count + 1; i++){
        let btn = paginationButton(i, items);
        pageNumbers.appendChild(btn);
    }
    
}

function paginationButton (page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    if (current_page == page) button.classList.add('active');
    
    button.addEventListener('click', function(){
        current_page = page;
        renderGames(juegos, rows, current_page);
        let current_btn = document.querySelector('.pageNumbers button.active');
        current_btn.classList.remove('active');
        button.classList.add('active');
        gameDetail();
    });
    return button;
}



// const gameDetail = () => {
//     const main = document.getElementById('main');
//     const card = document.querySelectorAll("#gameCard").forEach((card) => {
//         card.addEventListener('click', () => {
//             console.log('2')
//         main.innerHTML = ""
//         main.innerHTML = `
//         <main>
//         <div id="main">
        
//       </div>
      
//       <!-- Portada-->
//       <div class="col">
//       <img src="/assets/img/gameDetails/portada.png" alt="Portada cyberpunk 2077">
//       </div>
      
      
//       <div class="row p-2">
//           <div class="col-3 m-3" >
//             <img class=" col-xl-12 col-md-12 col-sm-3 portada" src="/assets/img/gameDetails/caratula.png" alt="Caratula Cyberpunk 2077">
//             <p class="text-white mt-3"> Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro 
//               sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, 
//               el glamur y las incesantes modificaciones corporales.</p>
//             <p class="text-white mt-3"> Reseñas generales: <span class="span"> Mayormente positivas (425,103)</span></p> 
//             <p class="text-white mt-3"> Fecha de lanzamiento: 9 DIC 2020.</p>
//             <p class="text-white mt-3"> Desarrollador: <span class="span">CD PROYECT RED</span> </p>
//             <p class="text-white mt-3"> Editor: <span class="span">CD PROYECT RED</span> </p>
//             <button class="btn span my-1 mx-1 boton">Cyberpubk</button>
//             <button class="btn span my-1 mx-1 boton">Mundo abierto</button>
//             <button class="btn span my-1 mx-1 boton">Rol</button>
//             <button class="btn span my-1 mx-1 boton">FPS</button>
//             <br>
//             <hr>
//             <button class="btn btn-primary fw-bold mx-2">Comprar</button>
//             <button class="btn btn-primary fw-bold mx-2">Añadir al carrito</button>
//           </div>
//           <div class="col-5 col-md-8 col-sm-4">
//               <iframe width="720" height="360" 
//               src="https://www.youtube.com/embed/Q_v3ttvCVfA" 
//               title="YouTube video player" frameborder="0" 
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
//             picture-in-picture" allowfullscreen></iframe>
//             </div>
//             </div>
//             </main>
//             `;
          
//         });
//     });
//     }

renderGames(juegos, rows, current_page);
setupPagination(juegos, rows);








