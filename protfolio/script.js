/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   NAVBAR ACTIVE LINK
========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================= */

const navLinksMobile =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");

navLinksMobile.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            navbarCollapse.classList.contains("show")
        ) {

            new bootstrap.Collapse(
                navbarCollapse
            ).hide();

        }

    });

});