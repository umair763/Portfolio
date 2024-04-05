const circle = document.getElementById('expanding-circle');

// Function to expand the circle
function expandCircle() {
    circle.style.transform = 'scale(2)'; // Scale up to twice its size
}

// Function to move the circle in a circular motion
function moveCircle(event) {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition * 1.0; // Adjust the rotation speed here

    circle.style.transform = `rotate(${rotationAngle}deg) scale(2)`; // Rotate and scale simultaneously
}

// Expand the circle when the page loads
window.onload = function () {
    expandCircle();
};

// Move the circle in a circular motion when scrolling
window.addEventListener('scroll', moveCircle);
 