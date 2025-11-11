document.addEventListener('DOMContentLoaded', function() {
            const navPanel = document.getElementById('navPanel');
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', function() {
                // Проверяем направление прокрутки
                if (window.scrollY > lastScrollY) {
                    // Прокрутка ВНИЗ - скрываем панель
                    navPanel.classList.add('hidden');
                } 
                else { 
                    // Прокрутка ВВЕРХ - показываем панель
                    navPanel.classList.remove('hidden');
                }
                
                // Сохраняем текущую позицию прокрутки
                lastScrollY = window.scrollY;
            });
        });