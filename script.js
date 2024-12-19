document.querySelectorAll('.moving-image').forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const movement = (mouseX / rect.width) * 20 - 10;
        image.style.transition = 'none';
        image.style.transform = `translateX(${movement}px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transition = 'transform 0.3s ease';
        image.style.transform = 'translateX(0)';
    });
});

document.querySelectorAll('.moving-image').forEach(image => {
    image.addEventListener('click', () => {
        const altSrc = image.getAttribute('data-alt-src');
        if (altSrc) {
            const currentSrc = image.getAttribute('src');
            image.dataset.originalSrc = currentSrc;
            image.setAttribute('src', altSrc);
        } else {
            console.warn("data-alt-src 속성이 없습니다.");
        }
    });
});
