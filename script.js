window.addEventListener('scroll', ()=>{
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
    navbar.style.backgroundColor = '#1e1e1e';
    }else{
        navbar.style.backgroundColor = 'transparent';
    }
});

