
const button = document.getElementById('inputButton');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    if(email === 'p@gmail' && password === 'p'){
        window.location = '../pages/admin.html';
    } else {
        alert('Usuario No Registrado! Manga de salchicha...');
    }
});

