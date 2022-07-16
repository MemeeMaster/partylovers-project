document.addEventListener('DOMContentLoaded', function(){
    const nav = document.getElementById('navbar');
    const navExpand = document.getElementById('navbarNavAltMarkup');
    const navLinks = document.querySelectorAll('.nav-link');

    function navScroll(){
        if(window.scrollY>=200){
            nav.classList.add("nav-shadow");
        }
        else{
            nav.classList.remove("nav-shadow");
        }
    }
  
    document.addEventListener('scroll',navScroll);
    navLinks.forEach(item => item.addEventListener('click', () => navExpand.classList.remove('show')))

})