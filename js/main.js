function toggleTabs() {

    const firstTab = document.getElementById('tab-1'),
          secondTab = document.getElementById('tab-2'),
          thirdTab = document.getElementById('tab-3'),
          firstCont = document.getElementById('cont-1'),
          secondCont = document.getElementById('cont-2'),
          thirdCont = document.getElementById('cont-3');
    
    firstTab.addEventListener('click', () => {
        firstTab.classList.add('is-active');
        secondTab.classList.remove('is-active');
        firstCont.classList.add('show');
        secondCont.classList.remove('show');
        thirdTab.classList.remove('is-active');
        thirdCont.classList.remove('show');
        });        
          
    secondTab.addEventListener('click', () => {
        firstTab.classList.remove('is-active');
        secondTab.classList.add('is-active');
        firstCont.classList.remove('show');
        secondCont.classList.add('show');
        thirdCont.classList.remove('show');
        thirdTab.classList.remove('is-active');
    });

    thirdTab.addEventListener('click', () => {
        secondTab.classList.remove('is-active');
        thirdTab.classList.add('is-active');
        secondCont.classList.remove('show');
        thirdCont.classList.add('show');
        firstTab.classList.remove('is-active');
        firstCont.classList.remove('show');
    });
}

toggleTabs();


const panelItem = document.querySelectorAll('.panel-title'),
  active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('panel-active'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('panel-active');
  
  });
});




/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
