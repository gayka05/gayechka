
// Хранит выбранные блюда
const selectedDishes = {
    soup: null,
    main: null,
    drink: null
};

// Функция для обновления заказа
function updateOrder(dish) {
    const category = dish.category;
    const selectionId = `${category}-selection`;
    const selectionElement = document.getElementById(selectionId);

    // Обновляем текст в соответствующем разделе
    selectionElement.textContent = `${dish.name} - ${dish.price} руб.`;
    
    // Сохраняем выбранное блюдо
    selectedDishes[category] = dish;

    // Обновляем селект в форме заказа
    updateSelectOptions();
}

// Функция для обновления селектов в форме заказа
function updateSelectOptions() {
    const soupSelect = document.getElementById('soup');
    const mainDishSelect = document.getElementById('main-dish');
    const drinkSelect = document.getElementById('drink');

    // Обновляем значения селектов
    soupSelect.value = selectedDishes.soup ? selectedDishes.soup.name : "";
    mainDishSelect.value = selectedDishes.main ? selectedDishes.main.name : "";
    drinkSelect.value = selectedDishes.drink ? selectedDishes.drink.name : "";

    // Проверяем, нужно ли показывать стоимость заказа
    updateTotalCost();
}

// Функция для обновления общей стоимости
function updateTotalCost() {
    const totalCostElement = document.getElementById('total-cost');
    const costValueElement = document.getElementById('cost-value');

    const totalCost = (selectedDishes.soup?.price || 0) + (selectedDishes.main?.price || 0) + (selectedDishes.drink?.price || 0);
    
    costValueElement.textContent = `${totalCost} руб.`;
    
    if (totalCost > 0) {
        totalCostElement.style.display = 'block'; // Показываем блок с общей стоимостью
    } else {
        totalCostElement.style.display = 'none'; // Скрываем блок, если нет выбранных блюд
    }
}

// Обработчик клика на кнопку "Добавить"
function handleAddButtonClick(event) {
    const dishItem = event.currentTarget.closest('.dish-item');
    
    const name = dishItem.querySelector('.name').textContent;
    const priceText = dishItem.querySelector('.price').textContent;
    
    const price = parseInt(priceText.replace(/\D/g, ''), 10); // Извлекаем цену из текста

    // Определяем категорию блюда
    let category;
    
    if (dishItem.closest('#soups')) {
        category = 'soup';
    } else if (dishItem.closest('#main-dishes')) {
        category = 'main';
    } else if (dishItem.closest('#drinks')) {
        category = 'drink';
    }

    // Создаем объект блюда и обновляем заказ
    const dish = { name, price, category };
    
    updateOrder(dish);
}

// Добавляем обработчики событий на кнопки "Добавить"
function addDishClickHandlers() {
    const addButtons = document.querySelectorAll('.dish-item button');
    
    addButtons.forEach(button => {
        button.addEventListener('click', handleAddButtonClick);
    });
}

// Запускаем добавление обработчиков после загрузки страницы
window.onload = function() {
    addDishClickHandlers(); // Добавляем обработчики кликов на кнопки "Добавить"
};
