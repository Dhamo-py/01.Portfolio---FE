// toggle nav bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ********************Sticky Nav Bar*************

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


var typed = new Typed('.role',{
    strings:['Front End Developer','Backend Developer','Electronic Service'],
    typeSpeed:100,
    backSpeed:100,
    loop: true,
    cursorChar: '.',
})

var about = new Typed('.aboutme',{
    strings:['About Me'],
    loop: true,
    typeSpeed:1000,
    backSpeed:100,

})


window.onscroll = ()=>{
    document.querySelector('.show').textContent = 'Scroll : ' + window.scrollY;
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"').classList.add('active');
            })
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
