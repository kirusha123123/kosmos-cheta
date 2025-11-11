document.addEventListener('DOMContentLoaded', function() {
    const rocket = document.getElementById('rocket-svg');
    let lastScrollY = 0;
    
    function handleScroll() {
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / 800, 1);
        
        // Движение вверх-вправо по диагонали
        const diagonalProgress = progress * 1.2;
        const moveX = diagonalProgress * 80; // Право
        const moveY = -diagonalProgress * 100; // Вверх
        const scale = 1 - progress * 0.7; // Отдаление
        const opacity = 1 - progress; // Исчезновение
        
        rocket.style.transform = `translate(${moveX}vw, ${moveY}vh) scale(${scale})`;
        rocket.style.opacity = opacity;
        
        lastScrollY = scrollY;
    }
    
    window.addEventListener('scroll', handleScroll);
});