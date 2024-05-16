const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c0440a58f0081d32.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f6459b86b7458f57.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/215b17eb96e19180.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4b0762342e0f4dc3.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4b0762342e0f4dc3.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ae9a1349fe262071.png?q=20",
];

let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');

function showSlide() {
    slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function changeAndStartSlide(direction) {
    currentSlide = (currentSlide + direction) % images.length;
    showSlide();
}

setInterval(() => changeAndStartSlide(1), 1000);

images.forEach(imageSrc => {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    slidesContainer.appendChild(imgElement);
});

showSlide();
