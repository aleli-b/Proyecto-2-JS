// let pagina = 1;
// const btnAnterior = document.getElementById('btnAnterior');
// const btnSiguiente = document.getElementById('btnSiguiente');
const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
<<<<<<< HEAD
const searchInput = document.getElementById('searchBar');
const searchButton= document.getElementById('searchButton');



=======
let current_page = 1;
let rows = 6;
>>>>>>> development

// btnSiguiente.addEventListener('click', () => {
//     if(pagina <1000){
//         pagina += 1;
//         obtenerJuegos();

//     }
// })

// btnAnterior.addEventListener('click', () => {
//     if(pagina > 1){
//         pagina -= 1;
//         obtenerJuegos();

//     }
// })

// const cargarJuegos = async() => {
//     try {
//         const respuesta = await fetch('https://my-json-server.typicode.com/qpmjcv/GamesApi/db');
//         console.log(respuesta);
//         if(respuesta.status === 200){
//             const datos = await respuesta.json();

//             let juegos = '';
//             datos.juegos.forEach(juego => {
//                 juegos += `
//                     <div class="juego">
//                         <img class="poster" src="${juego.url}">
//                         <h3 class="titulo">${juego.title}</h3>
//                     </div>    
//                     `;
                               
//             });

//             document.getElementById('contenedor').innerHTML = juegos;
            
//         } else if(respuesta.status === 401, 402, 403, 404, 405){
//             console.log('El arreglo es demasiado largo');
//         }

//     } catch(error){
//         console.log(error);
//     }
// }

// cargarJuegos();

const renderCarousel = ()=>{
    const juegosCortos = juegos.slice(0, 5)
    // juegosCortos.forEach(juego =>{       
    //     const contenedor = document.getElementById('carouselContainer');
    //     const item = document.createElement('div');
    //     item.classList = 'carousel-item';
    //     item.innerHTML = `
    //         <img src="${juego.url}" class="d-block w-100" alt="${juego.title}">
    //         <div class="carousel-caption d-none d-md-block">
    //         <h5>${juego.title}</h5>
    //         <p>${juego.description}</p>
    //     `
    //     contenedor.appendChild(item)
    // }) 
    for(let i = 0; i < juegosCortos.length; i++){
        const contenedor = document.getElementById('carouselContainer');
        const item = document.createElement('div');
        item.classList = 'carousel-item';
        if(i === 0){
            item.classList = 'carousel-item active'
        };
        // if(juegosCortos[i].description.length < 117){
        //     let descripcion = juegosCortos[i].description.slice(0, 117);
        //     console.log(descripcion)
        // }
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
            <a href="#">
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
        gameDetail(juegos);
    })
    
    return button;
}

renderGames(juegos, rows, current_page);
setupPagination (juegos, rows);


