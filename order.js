// Функция для обновления заказа
function updateOrder(dish) {
    const selectionId = `${dish.category}-selection`;
    const selectionElement = document.getElementById(selectionId);

    // Обновляем текст в соответствующем разделе
    selectionElement.textContent = `${dish.name} - $${dish.price.toFixed(2)}`;
}

// Обработчик клика на карточку блюда
function handleDishClick(event) {
    const dishKeyword = event.currentTarget.getAttribute('data-dish');
    
    // Находим выбранное блюдо по ключевому слову
    const selectedDish = dishes.find(dish => dish.keyword === dishKeyword);
    
    if (selectedDish) {
        updateOrder(selectedDish);
    }
}

// Добавляем обработчики событий на карточки блюд после загрузки страницы
function addDishClickHandlers() {
    const dishCards = document.querySelectorAll('.dish-card');
    
    dishCards.forEach(card => {
        card.addEventListener('click', handleDishClick);
    });
}

// Запускаем добавление обработчиков после загрузки страницы
window.onload = function() {
    displayDishes(); // Отображаем блюда
    addDishClickHandlers(); // Добавляем обработчики кликов
};