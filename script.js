// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add a subtle parallax effect to the bento cards based on mouse movement
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.bento-item');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    // Only apply parallax on larger screens
    if (window.innerWidth > 768) {
        cards.forEach((card, index) => {
            // vary the parallax amount slightly per card for a dynamic feel
            const depth = (index % 3) + 1;
            const moveX = mouseX * (10 / depth);
            const moveY = mouseY * (10 / depth);

            // Don't override hover transforms from CSS, just add subtle base translation
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});

// Reset transform on mouse leave window
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.bento-item');
    cards.forEach(card => {
        card.style.transform = `translate(0px, 0px)`;
    });
});
