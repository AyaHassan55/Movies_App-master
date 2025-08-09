

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");




menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
});
// -------------------------------------------------------
module.exports = {
  theme: {
    extend: {
      screens: {
        'max-774': { 'max': '774px' }, // applies when width ≤ 774px
      }
    }
  }
}

