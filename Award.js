// Get all image containers
const imageContainers = document.querySelectorAll('.image-container');

// Loop through each image container
imageContainers.forEach(function (container) {
    // Get the image inside the current container
    const image = container.querySelector('img');

    // Add click event listener to each image
    image.addEventListener('click', function () {
        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        // Create image element inside overlay
        const overlayImage = document.createElement('img');
        overlayImage.src = this.src; // Set source of clicked image
        overlayImage.alt = this.alt; // Set alt text of clicked image

        // Append image to overlay
        overlay.appendChild(overlayImage);

        // Append overlay to body
        document.body.appendChild(overlay);

        // Show overlay
        overlay.style.display = 'block';

        // Hide overlay when clicked
        overlay.addEventListener('click', function () {
            overlay.style.display = 'none';
            // Remove overlay element from the DOM after hiding
            document.body.removeChild(overlay);
        });
    });
});
