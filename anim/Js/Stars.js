function createTwinklingStars() {
    const container = document.getElementById('stars-container');
    const starCount = 250;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            top: ${top}%;
            animation-delay: ${delay}s;
            transition: opacity 0.5s ease;
        `;
        
        container.appendChild(star);
    }
    
    function handleScroll() {
        const scrollY = window.scrollY;
        const hideThreshold = 200; // Высота в px когда звезды исчезают
        const stars = document.querySelectorAll('.star');
        
        if (scrollY > hideThreshold) {
            // Прячем звезды
            stars.forEach(star => {
                star.style.opacity = '0';
            });
        } else {
            // Показываем звезды
            stars.forEach(star => {
                star.style.opacity = '1';
            });
        }
    }
    
    window.addEventListener('scroll', handleScroll);
}

document.addEventListener('DOMContentLoaded', createTwinklingStars);