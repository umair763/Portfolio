const zoomingImage = document.getElementById('zooming-image');
const zoomingOutImage = document.getElementById('zooming-out-image');

// Function to trigger the scroll event after the page is loaded
function triggerScrollEvent() {
    window.scrollTo(0, 1); // Scroll down by 1 pixel
    window.scrollTo(0, 0); // Scroll back to the top
}

// Trigger the scroll event after the page is loaded
window.onload = function () {
    triggerScrollEvent();
};
// Wait for the page to fully load
window.addEventListener('load', () => { 
    // Add a class to the images to trigger the transition effect
    document.getElementById('zooming-image').classList.add('final-position');
    document.getElementById('zooming-out-image').classList.add('final-position');
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollRatio = scrollPosition / viewportHeight;

    const maxScroll = document.documentElement.scrollHeight - viewportHeight; // Maximum scroll position
    const scrollThreshold = maxScroll * 0.20; // Define the scroll threshold (e.g., 90% of the page height)

    // Check if the scroll position has reached the scroll threshold
    if (scrollPosition >= scrollThreshold) {
        // Redirect to main.html
        window.location.href = 'index.html';
    }

    // Check if the scroll position is at the top of the page
    if (scrollPosition === 0) {
        // Go back to the previous page without reloading
        history.back();
    }

    // Zooming in the first image
    const maxZoom = 63; // Maximum zoom multiplier
    const zoomFactor = scrollRatio * maxZoom + 1; // Calculate zoom based on scroll progress (starts at 1)
    zoomingImage.style.transform = `translate(-50%, -50%) scale(${zoomFactor}) rotate(${scrollPosition * 6}deg)`; // Apply zoom and rotation

    // Zooming in the second image
    const maxZoomIn = 350; // Maximum zoom out multiplier
    const zoomOutFactor = scrollRatio * maxZoomIn + 1; // Calculate zoom out based on scroll progress
    zoomingOutImage.style.transform = `translate(-50%, -50%) scale(${1 + zoomOutFactor})`; // Apply zoom in
});
