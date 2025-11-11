document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопки по ID
    const button1 = document.getElementById('Button1');
    const button2 = document.getElementById('Button2');
    
    // Функция для создания анимации матрицы
    function setupMatrixAnimation(button) {
        let animationInterval = null;

        function createMatrixStripe() {
            const stripe = document.createElement('div');
            const randomPosition = Math.random() * button.offsetWidth;
            
            stripe.style.position = 'absolute';
            stripe.style.top = '0px';
            stripe.style.left = randomPosition + 'px';
            stripe.style.width = '2px';
            stripe.style.height = '15px';
            stripe.style.backgroundColor = '#285657';
            stripe.style.opacity = '0.7';
            stripe.style.pointerEvents = 'none';
            
            button.appendChild(stripe);
            animateStripe(stripe, button);
        }

        function animateStripe(stripe, btn) {
            let position = 0;
            const speed = 2;
            
            function move() {
                position += speed;
                stripe.style.top = position + 'px';
                
                if (position > btn.offsetHeight) {
                    stripe.remove();
                } else {
                    requestAnimationFrame(move);
                }
            }
            move();
        }

        function startMatrixAnimation() {
            animationInterval = setInterval(createMatrixStripe, 150);
            this.style.backgroundColor = '#00ffff';
            this.style.boxShadow = '0 0 10px #00ffff';
        }

        function stopMatrixAnimation() {
            if (animationInterval) {
                clearInterval(animationInterval);
                animationInterval = null;
            }
            
            const allStripes = this.querySelectorAll('div');
            allStripes.forEach(stripe => {
                stripe.remove();
            });
            
            this.style.backgroundColor = '#285657';
            this.style.boxShadow = 'none';
        }

        // Добавляем обработчики для кнопки
        button.addEventListener('mouseenter', startMatrixAnimation);
        button.addEventListener('mouseleave', stopMatrixAnimation);
    }

    // Применяем анимацию к button1
    if (button1) {
        setupMatrixAnimation(button1);
    }
    
    // Применяем анимацию к button2
    if (button2) {
        setupMatrixAnimation(button2);
    }

    // СЛОЖНАЯ анимация для кнопки с классом electric-btn
    const electricButton = document.querySelector('.electric-btn');
    
    if (!electricButton) {
        console.error('Кнопка electric-btn не найдена!');
        return;
    }
    
    console.log('Кнопка electric-btn найдена!');
    setupMatrixAnimation(electricButton);
});