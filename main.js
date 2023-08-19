const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const navbar = document.getElementById('navbar')

menu.addEventListener('click', ()=>{
    navbar.style.display = 'block'
})

closeBtn.addEventListener('click', ()=>{
    navbar.style.display = 'none'
}) 