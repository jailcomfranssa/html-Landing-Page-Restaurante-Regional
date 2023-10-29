let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
};


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    let top = window.scrollY;

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    sections.forEach(sec => {
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelector('header .navbar a[href*="' + id + '"]').classList.add('active');
        }
    });
};



document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

const swiper1 = new Swiper('.home-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:240,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },

    autoplay:{
        delay:7500,
        disableOnInteraction: false,

    },
    
});

const swiper2 = new Swiper('.review-slider', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween:20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },

    autoplay:{
        delay:1900,
        disableOnInteraction: false,

    },
    loop: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
    
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;