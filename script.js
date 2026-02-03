/**
 * Логика для сайта "Калининград: География и Наследие"
 * Автор: Ichimoku
 */

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Reveal Animation Observer
    // Этот код отслеживает появление элементов в области видимости при скролле
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserverOptions = {
        threshold: 0.15 // Элемент начнет появляться, когда 15% его площади станут видимы
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс .active для запуска CSS анимации
                entry.target.classList.add('active');
                
                // Перестаем наблюдать за элементом после того, как он один раз появился
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => revealObserver.observe(el));
});