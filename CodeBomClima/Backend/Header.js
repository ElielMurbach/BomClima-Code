let lastScrollTop = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  let scrollTop = window.scrollY;

  if(scrollTop > lastScrollTop && scrollTop > 100){

    header.style.transform = "translateY(-100%)";

  }else{

    header.style.transform = "translateY(0)";

  }

  lastScrollTop = scrollTop;

});