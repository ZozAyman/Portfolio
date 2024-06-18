// Hover Boxes Section Projects And Show ImgProjects
let docBox = document.querySelectorAll(".box-project-info");
docBox.forEach(function(x) {
  x.addEventListener("mouseenter", () => {
    gsap.to(x.childNodes[5],{
      opacity: 0.8,
      scale: 1,
      x: 50
    })
  })
  x.addEventListener("mouseleave", () => {
    gsap.to(x.childNodes[5],{
      opacity: 0,
      scale: 0
    })
  })

})

// Questions???
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

// Dark Mode???
let btnDark = document.querySelector("#icon");
btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    // btnDark.textContent = "Light Mode";
    btnDark.src = "assets/imgs/sun-line.png";
  } else {
    // btnDark.textContent = "Dark Mode";
    btnDark.src = "assets/imgs/moon-line.png";
  }
})

// ======== Ending Coding Elhamdullah ========