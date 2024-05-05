window.sr = ScrollReveal({reset: true});

sr.reveal('.intro', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 1500
});

sr.reveal('.experience', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 1500
});

sr.reveal('.education', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 1500
});

sr.reveal('.portfolio', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000
});

sr.reveal('.contact', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000
});

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Role para baixo
        document.getElementById("main-header").classList.add("hide");
    } else {
        // Role para cima
        document.getElementById("main-header").classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para o caso de o usuário estar no topo da página
}, false);
