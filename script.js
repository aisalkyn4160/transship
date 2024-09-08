const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const navMenuLi = document.querySelectorAll(".nav-menu li");

burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})
navMenuLi.forEach((li) => {
    li.addEventListener("click", () => {
        header.classList.remove("mobile-header");
        document.body.classList.remove("no-scroll");
    })
})

// -------------------------------------popup--------------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
             popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});
// -----------------------------file-upload-----------------------------

function ready(){
    const inputs = document.querySelectorAll(".input-file");
    Array.prototype.forEach.call(inputs, function(input){
        const label = input.nextElementSibling;
        const fileNameSpan = label.nextElementSibling;
        let labelVal = fileNameSpan.innerHTML;

        input.addEventListener("change", function(e){
            let fileName = "";
            if(this.files && this.files.length > 1)
                fileName = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length);
            else
                fileName = e.target.value.split("\\").pop();

            if(fileName)
                fileNameSpan.innerHTML = fileName;
            else
                fileNameSpan.innerHTML = labelVal;
            
    })
})
}

ready();


// ----------------------------------swiper------------------------------------
const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 24,
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    }
  });

const reviewsBtn = document.querySelector('.reviews .btn');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

prevBtn.style.display = 'none';
nextBtn.style.display = 'none';

reviewsBtn.addEventListener('click', () => {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    reviewsBtn.style.display = 'none';
})