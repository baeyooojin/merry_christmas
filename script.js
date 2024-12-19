// 마우스 움직임 효과
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

// 모든 이미지 요소 가져오기
const images = document.querySelectorAll('.moving-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        // 현재 이미지의 대체 이미지 경로 가져오기
        const altSrc = image.getAttribute('data-alt-src');
        const currentSrc = image.getAttribute('src');

        if (currentSrc === altSrc) {
            // 대체 이미지가 현재 상태라면 원래 이미지로 복원
            image.setAttribute('src', image.dataset.originalSrc);
            image.classList.remove('hidden'); // 숨김 클래스 제거
        } else {
            // 원래 이미지를 대체 이미지로 변경
            image.dataset.originalSrc = currentSrc;
            image.setAttribute('src', altSrc);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // 모든 모바일 이미지를 선택
    const images = document.querySelectorAll(".mobile-only-image");

    images.forEach((image) => {
        // 초기 상태를 저장
        const originalSrc = image.src;
        const altSrc = image.getAttribute("data-alt-src");

        // 클릭 이벤트 추가
        image.addEventListener("click", () => {
            if (image.src === originalSrc && altSrc) {
                // 원래 이미지일 경우, 대체 이미지로 변경
                image.src = altSrc;
            } else {
                // 대체 이미지를 다시 클릭하면 원래 이미지로 복구
                image.src = originalSrc;
            }
        });
    });
});

if (altSrc) {
    image.src = altSrc;
} else {
    console.error("data-alt-src 속성이 없습니다.");
}

