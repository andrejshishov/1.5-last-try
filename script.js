const slider = document.querySelector('.swiper');


  let mySwiper;

  


  function mobileSlider() {

  if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },

      slideToClickedSlide: true,

    spaceBetween:16,

    slidesPerView:1.3,

    speed:800,

    slideClass: 'swiper-slide',

    });


slider.dataset.mobile = 'true';




  }

if (window.innerWidth >= 767) {
  slider.dataset.mobile = 'false';


  if (slider.classList.contains('swiper-initialized')) {
  mySwiper.destroy();
  }

}

}



mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
})




let brandsList = document.querySelector('.brands__list')
let showButton = document.querySelector('.brands__show-button')




showButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (window.innerWidth >= 767) {
    brandsList.classList.toggle('brand__list--geometry');
    showButton.classList.toggle('reverse');
    this.textContent = this.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
  
  }
});










