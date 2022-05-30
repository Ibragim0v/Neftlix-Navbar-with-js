const elOpenBtn = document.querySelector(".open-btn");
const elCloseBtn = document.querySelector(".close-btn");
const elNavs = document.querySelectorAll(".nav");

elOpenBtn.addEventListener("click", function (evt) {
  elNavs.forEach((nav) => nav.classList.add("visible"));
});

elCloseBtn.addEventListener("click", () => {
  elNavs.forEach((nav) => nav.classList.remove("visible"));
});
