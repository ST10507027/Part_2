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

});