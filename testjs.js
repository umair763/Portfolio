window.addEventListener('resize', () => {
    const patternLeftPercentage = 49; // Left percentage of the background pattern
    const patternTopPercentage = 48; // Top percentage of the background pattern

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const leftPosition = (windowWidth * patternLeftPercentage) / 100;
    const topPosition = (windowHeight * patternTopPercentage) / 100;

    const tracedImage = document.getElementById('traced-image');
    tracedImage.style.top = `${topPosition}px`;
    tracedImage.style.left = `${leftPosition}px`;
});
