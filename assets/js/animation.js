function revealToSpan() {
    document.querySelectorAll("#reveal")
    .forEach(function(elem){
    // Create two span.
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    // add two class their parent and child.
    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
    })
}


function valuestatters() {
    gsap.set("#nav a", {y : "-100%", opacity: 0})
    gsap.set("#home .parent .child", {y: "100%"})
    gsap.set("#home .row img", {opacity: 0})

    document.querySelectorAll("#Visual>g")
    .forEach(function(e) {
        var character = e.childNodes[0].childNodes[0];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}


// Create Animation Of Page Loader. 
function LoaderAnimation() {
    let tl = gsap.timeline();
    tl
    .from("#loader .child span", {
        x: 100,
        stagger: .2,
        duration: 1.5,
        ease: Power3.easeInOut
    })
    .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -.8,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "0%",
        top: 0,
        duration: 1,
        delay: -.5,
        ease: Circ.easeInOut,
        onComplete: function() {
            animationHomePage();
        }
    });
}


// Animation HomePage
function animationHomePage() {

    var tl = gsap.timeline();
    tl
    .to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to("#home .row img", {
        opacity: 1,
        delay: -.5,
        ease: Expo.easeInOut,
        onComplete: function() {
            animationSvg();
        }
    })

}


// Create Animation Of VISUAL Text
function animationSvg() {
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset : 0,
        duration : 2,
        ease : Expo.easeInOut,
    })
}


// Card Show Works
function cardOneShow() {
    document.querySelectorAll(".box").forEach(function(e) {
        let showImg;
        e.addEventListener("mousemove", function(dets) {
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showImg = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            showImg.style.filter = "grayscale(0.8)";
            document.querySelector("#works").style.backgroundColor = "#" + dets.target.dataset.color;
        })
        e.addEventListener("mouseleave", function(dets) {
            document.querySelector("#cursor").children[showImg.dataset.index].style.opacity = 0;
            showImg.style.filter = "grayscale(0)";
            document.querySelector("#works").style.backgroundColor =  "#f2f2f2";
        })
    })
}


// Animation With ScrollReveal Of Sections
function animateScrollReveal() {
    ScrollReveal({
        reset: true,
        distance: "60px",
        delay: 400,
        duration: 2500
    });
    // Animation With Any HeadTitle.
    ScrollReveal().reveal('.hands-clapping, .skul-project, .eye-project, .skills-head', { delay: 50, origin: "top" });
    ScrollReveal().reveal('.title-ready, .title-work, .head-client-title, .head-profile-title, .info-project, .box-project-info, .box-skills-info, #faqs .head-faqs, #faqs .faq', { delay: 300, origin: "top" });
    // Animation With Boxes in Home Section.
    ScrollReveal().reveal('.home-boxright, .box-project-info .left h2, .box-skills-info .left h2, #footer .box-left', { delay: 500, origin: "left" });
    ScrollReveal().reveal('.home-boxleft, #footer .box-right', { delay: 500, origin: "right" });
    // Animation With Boxes in Works Section.
    ScrollReveal().reveal('#imgs-works .box1, #imgs-works .box2', { delay: 500, });
    // Animation With AboutUs Section.
    ScrollReveal().reveal('#about-us .about-video', { delay: 700, origin: "top" });
    ScrollReveal().reveal('#about-us .about-info', { delay: 700, origin: "left" });
    // Animation With Any Span.
    ScrollReveal().reveal('.span-title-work, .span-title-ready, .span-title-home', { delay: 600, origin: "top" });
}





// ========== All Callback Function ========== //
revealToSpan();
valuestatters();
LoaderAnimation();
cardOneShow();
animateScrollReveal()

// ======== Ending Coding Elhamdullah ========