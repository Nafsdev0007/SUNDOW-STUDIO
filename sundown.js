

function wholeJS() {
  let elemC = document.querySelector("#elem-container");
  let fixPhoto = document.querySelector("#fixed-image");
  let div2 = document.querySelectorAll(".div2 h1");
  let img2 = document.querySelector(".img");
  let p4H4 = document.querySelector(".page4-p1 h4");

  elemC.addEventListener("mouseenter", () => {
    fixPhoto.style.display = "block";
  });
  elemC.addEventListener("mouseleave", () => {
    fixPhoto.style.display = "none";
  });

  let elems = document.querySelectorAll(".element");

  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      let image = e.getAttribute("set-image");
      fixPhoto.style.backgroundImage = `url(${image})`;
    });
  });

  div2.forEach((f) => {
    f.addEventListener("click", () => {
      let images = f.getAttribute("h1-image");
      img2.style.backgroundImage = `url(${images})`;
    });
  });
}
function swiperJS() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 80,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
function cursoreffect() {
  var swiperPage = document.querySelector(".page5");
  var cursor = document.querySelector("#cursor");

  swiperPage.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      y: dets.y,
      x: dets.x,
    });
  });
  swiperPage.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

  swiperPage.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
}
function menuAnimation() {
  var flag = 0;
  var flag2 = 2;
  var menu = document.querySelector("nav h3");
  var scr = document.querySelector("#full-scr");
  var navImg = document.querySelector("nav img");
  menu.addEventListener("click", () => {
    if (flag === 0 && flag2 === 2) {
      scr.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
      flag2 = 3;
    } else {
      scr.style.top = "-100%";
      navImg.style.opacity = "1";
      flag = 0;
      flag2 = 2;
    }
  });
}

function loader(){
  var loader = document.querySelector('.loader');
setTimeout(()=>{
  loader.style.top = '-100%';
},1000);2700

}
swiperJS();
wholeJS();
menuAnimation();
cursoreffect();
loader();