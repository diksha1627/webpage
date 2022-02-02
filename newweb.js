burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist');
logo = document.querySelector('.logo')
burger.addEventListener('click',()=>{
     navlist.classList.toggle('v-class-resp');
     rightnav.classList.toggle('v-class-resp');
     logo.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
})