const showMenu = function(toggleId, menuId){
    const knopka = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(knopka && menu){
        knopka.addEventListener('click', () =>{
         menu.classList.toggle('show-menu')
        })
    }
}
showMenu('toggle', 'header-menu');

const swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: '.mainscreen_button-right',
        prevEl: '.mainscreen_button-left'
    },
})


const scrollAnimation = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    reset: true,
})

scrollAnimation.reveal('.discount_card-item, .footer-item, footer-social',{
    interval: 200,
    rotate: {
        x: 0,
        y: 90,
        z: 0
    },
    scale: .5,
})
scrollAnimation.reveal('.discount_tittle',{
    origin: 'left',
    delay: 1800
})
scrollAnimation('.discount_button',{
    origin: 'right',
    delay: 1800
})
