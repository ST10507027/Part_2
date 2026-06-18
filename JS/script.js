const galleryImages =
document.querySelectorAll(".image-card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close-btn");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";

        lightboxImg.src = this.src;

        lightboxImg.alt = this.alt;

    });

});

closeBtn.addEventListener("click", function () {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

})

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENU SEARCH
    ========================= */

    const menuSearch = document.getElementById("menuSearch");
    const menuItems = document.querySelectorAll(".menu-category li");
    const noResults = document.getElementById("noMenuResults");

    if (menuSearch) {

        menuSearch.addEventListener("keyup", function () {

            const searchValue = menuSearch.value.toLowerCase();

            let resultsFound = 0;

            menuItems.forEach(function (item) {

                const itemText = item.textContent.toLowerCase();

                if (itemText.includes(searchValue)) {
                    item.style.display = "list-item";
                    resultsFound++;
                }
                else {
                    item.style.display = "none";
                }

            });

            if (noResults) {

                if (resultsFound === 0) {
                    noResults.textContent = "No menu items found.";
                }
                else {
                    noResults.textContent = "";
                }

            }

        });

    }

    /* =========================
       GALLERY LIGHTBOX
    ========================= */

    const galleryImages = document.querySelectorAll(".image-card img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentImage = 0;

    if (
        galleryImages.length > 0 &&
        lightbox &&
        lightboxImg &&
        closeBtn &&
        prevBtn &&
        nextBtn
    ) {

        function displayImage(index) {

            lightboxImg.src = galleryImages[index].src;
            lightboxImg.alt = galleryImages[index].alt;

        }

        galleryImages.forEach(function (image, index) {

            image.addEventListener("click", function () {

                currentImage = index;

                lightbox.style.display = "flex";

                displayImage(currentImage);

            });

        });

        nextBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            currentImage++;

            if (currentImage >= galleryImages.length) {
                currentImage = 0;
            }

            displayImage(currentImage);

        });

        prevBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            currentImage--;

            if (currentImage < 0) {
                currentImage = galleryImages.length - 1;
            }

            displayImage(currentImage);

        });

        closeBtn.addEventListener("click", function () {

            lightbox.style.display = "none";

        });

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }

        });

    }

    /* =========================
       CONTACT FORM VALIDATION
    ========================= */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            if (name.length < 2) {

                formMessage.textContent =
                    "Please enter a valid name.";

                formMessage.style.color = "red";

                return;
            }

            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color = "red";

                return;
            }

            if (message.length < 10) {

                formMessage.textContent =
                    "Please enter at least 10 characters.";

                formMessage.style.color = "red";

                return;
            }

            formMessage.textContent =
                "Thank you, " +
                name +
                ". Your message has been sent.";

            formMessage.style.color = "green";

            contactForm.reset();

        });

    }

    /* =========================
       HOME PAGE GREETING
    ========================= */

    const homeSection =
        document.querySelector("#home .section-content");

    if (homeSection) {

        const greeting =
            document.createElement("p");

        const hour =
            new Date().getHours();

        let greetingText = "";

        if (hour < 12) {
            greetingText = "Good Morning and welcome to Brew Haven!";
        }
        else if (hour < 18) {
            greetingText = "Good Afternoon and welcome to Brew Haven!";
        }
        else {
            greetingText = "Good Evening and welcome to Brew Haven!";
        }

        greeting.textContent = greetingText;

        greeting.style.fontWeight = "bold";
        greeting.style.marginTop = "1rem";
        greeting.style.color = "#5c3d2e";

        homeSection.appendChild(greeting);

    }

    /* =========================
       SCROLL ANIMATION
    ========================= */

    const cards =
        document.querySelectorAll(
            ".page-section, .menu-category, .image-card, .about-block, .contact-intro, .contact-form-section, .contact-details"
        );

    function showCards() {

        cards.forEach(function (card) {

            const position =
                card.getBoundingClientRect().top;

            const screen =
                window.innerHeight - 100;

            if (position < screen) {
                card.classList.add("show");
            }

        });

    }

    window.addEventListener("scroll", showCards);
    showCards();

    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const topButton =
        document.createElement("button");

    topButton.id = "backToTop";
    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        }
        else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});