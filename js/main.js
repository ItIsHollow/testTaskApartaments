// Свайпер
var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  grabCursor: false,
  allowTouchMove: false,
  navigation: {
    // nextEl: ".swiper-button-next",
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
    // prevEl: ".swiper-button-prev",
  },
});

// Определение переменных для различных манипуляций
let section = document.querySelector(".section");

// Кнопки управления слайдами
let prevSlideBtn = document.querySelector(".prev-slide");
let nextSlideBtn = document.querySelector(".next-slide");
let arrows = document.querySelector(".btn-box_img");

// Элементы улиц и компаса
let streets = document.querySelector(".section_streets");
let star = document.getElementById("star");
let cTop = document.querySelector(".c-top");
let cRight = document.querySelector(".c-right");

// Центральная надпись в верхушке
let headerInfo = document.querySelector(".header_info-area");
let penthause = document.getElementById("penthause");
let apartament = document.getElementById("apartament");
let cityhouse = document.getElementById("cityhouse");
let villa = document.getElementById("villa");

// Ивент на нажатие кнопок управления слайдами и разворот различных элементов
nextSlideBtn.addEventListener("click", () => {
  // Изменения вида надписи вид 1 или вид 2
  if (nextSlideBtn.classList.contains("next-slide--active")) {
    nextSlideBtn.classList.remove("next-slide--active");
  } else {
    nextSlideBtn.classList.add("next-slide--active");
  }
  if (prevSlideBtn.classList.contains("next-slide--active")) {
    prevSlideBtn.classList.remove("next-slide--active");
  } else {
    prevSlideBtn.classList.add("next-slide--active");
  }

  // Изменение задней картинки
  if (section.classList.contains("section-view1")) {
    section.classList.remove("section-view1");
    section.classList.add("section-view2");
  } else {
    section.classList.add("section-view1");
    section.classList.remove("section-view2");
  }

  // Поворот изображения улиц
  streets.classList.toggle("section_streets--rotate");
  star.classList.toggle("section_star-svg--rotate");
  cRight.classList.toggle("c-right--active");
  cTop.classList.toggle("c-top--active");
});

prevSlideBtn.addEventListener("click", () => {
  // Изменения вида надписи вид 1 или вид 2
  if (nextSlideBtn.classList.contains("next-slide--active")) {
    nextSlideBtn.classList.remove("next-slide--active");
  } else {
    nextSlideBtn.classList.add("next-slide--active");
  }
  if (prevSlideBtn.classList.contains("next-slide--active")) {
    prevSlideBtn.classList.remove("next-slide--active");
  } else {
    prevSlideBtn.classList.add("next-slide--active");
  }

  // Изменение задней картинки
  if (section.classList.contains("section-view1")) {
    section.classList.remove("section-view1");
    section.classList.add("section-view2");
  } else {
    section.classList.add("section-view1");
    section.classList.remove("section-view2");
  }

  // Поворот изображения улиц
  streets.classList.toggle("section_streets--rotate");
  star.classList.toggle("section_star-svg--rotate");
  cRight.classList.toggle("c-right--active");
  cTop.classList.toggle("c-top--active");
});

// Боковая панель
// Изменение центральной надписи
penthause.addEventListener("click", () => {
  penthause.classList.add("section_nav-item--active");
  apartament.classList.remove("section_nav-item--active");
  cityhouse.classList.remove("section_nav-item--active");
  villa.classList.remove("section_nav-item--active");
  headerInfo.textContent = "Пентхаусы";
});
apartament.addEventListener("click", () => {
  apartament.classList.add("section_nav-item--active");
  penthause.classList.remove("section_nav-item--active");
  cityhouse.classList.remove("section_nav-item--active");
  villa.classList.remove("section_nav-item--active");
  headerInfo.textContent = "Квартиры";
});
cityhouse.addEventListener("click", () => {
  cityhouse.classList.add("section_nav-item--active");
  apartament.classList.remove("section_nav-item--active");
  penthause.classList.remove("section_nav-item--active");
  villa.classList.remove("section_nav-item--active");
  headerInfo.textContent = "Ситихаусы";
});
villa.addEventListener("click", () => {
  villa.classList.add("section_nav-item--active");
  apartament.classList.remove("section_nav-item--active");
  penthause.classList.remove("section_nav-item--active");
  cityhouse.classList.remove("section_nav-item--active");
  headerInfo.textContent = "Виллы";
});

// Элементы появляющейся подсказки с данными квартир
let apartmentsFloor = document.querySelector(".apartaments-tip_floor");
let apartmentsNumberBlock = document.querySelector(".apartaments-tip_number");
let apartmentsNumber = document.querySelector(".apartaments-tip_title-number");
let apartamentSquare = document.querySelector(".apartaments-tip_title-square");
let apartamentsPrice = document.querySelector(".apartaments-tip_title-price");

// Следование за курсором
let swiperSlide = document.querySelector(".swiper-slide");
const followEl = document.querySelector(".apartaments-tip");

const followCursor = () => {
  window.addEventListener("mousemove", (e) => {
    const target = e.target;
    if (!target) return;

    if (headerInfo.textContent === "Пентхаусы") {
      apartmentsFloor.style.display = "none";
      apartmentsNumberBlock.style.display = "block";
      apartmentsFloor.textContent = "4 пентхауса";
    }
    if (headerInfo.textContent === "Квартиры") {
      apartmentsFloor.style.display = "block";
      apartmentsNumberBlock.style.display = "block";
      apartmentsNumber.textContent = "3 квартиры";
    }
    if (headerInfo.textContent === "Ситихаусы") {
      apartmentsFloor.style.display = "block";
      apartmentsNumberBlock.style.display = "block";
      apartmentsFloor.textContent = "1 этаж";
      apartmentsNumber.textContent = "3 ситихауса";
    }
    if (headerInfo.textContent === "Виллы") {
      apartmentsFloor.style.display = "none";
      apartmentsNumberBlock.style.display = "none";
      apartamentSquare.innerHTML = `120 м<sup>2</sup>`;
      apartamentsPrice.innerHTML = `310 000 000 &#8381;`;
    }

    followEl.style.left = e.pageX + 20 + "px";
    followEl.style.top = e.pageY + "px";
  });
};

// window.addEventListener("click", (e) => {
//   let clickTarget = e.target;
//   console.log(clickTarget);
//   let paramX = e.pageX;
//   let paramY = e.pageY;
//   console.log(paramX);
//   console.log(paramY);
// });

// followCursor();
swiperSlide.addEventListener("mouseover", () => {
  followEl.style.opacity = "1";
  followEl.style.zIndex = "10";
  followCursor();
});
swiperSlide.addEventListener("mouseout", () => {
  followEl.style.opacity = "0";
  followEl.style.zIndex = "-1";
});
