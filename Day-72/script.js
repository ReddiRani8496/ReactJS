const images = [
  "https://res.cloudinary.com/dj9xjcqnh/image/upload/v1741105588/zerafi_vcuue3.avif",
  "https://res.cloudinary.com/dj9xjcqnh/image/upload/v1741105587/elephant_memdvi.avif",
  "https://res.cloudinary.com/dj9xjcqnh/image/upload/v1741105588/deer_jnqvrf.avif",
  "https://res.cloudinary.com/dj9xjcqnh/image/upload/v1741105588/lion_ubbdin.avif",
];

let currentIndex = 0;

const imageElement = document.getElementById("image");

function updateImage() {
  imageElement.src = images[currentIndex];
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

updateImage();
