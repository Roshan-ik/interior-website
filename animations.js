let currentImages = [];
let currentIndex = 0;

function openModal(images) {
    currentImages = images;
    currentIndex = 0;
    document.getElementById("modalImage").src = currentImages[currentIndex];
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function nextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        document.getElementById("modalImage").src = currentImages[currentIndex];
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById("modalImage").src = currentImages[currentIndex];
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal();
    }
}
