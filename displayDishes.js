// Функция для создания карточки блюда
function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.setAttribute('data-dish', dish.keyword); // Установка data-атрибута

    const img = document.createElement('img');
    img.src = dish.image;
    img.alt = dish.name;

    const title = document.createElement('h3');
    title.textContent = dish.name;

    const price = document.createElement('p');
    price.textContent = `Цена: $${dish.price.toFixed(2)}`;

    const category = document.createElement('p');
    category.textContent = `Категория: ${dish.category}`;

    const count = document.createElement('p');
    count.textContent = `Объем/Вес: ${dish.count}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(category);
    card.appendChild(count);

    return card;
}

// Функция для отображения всех блюд на странице
function displayDishes() {
    const dishesContainer = document.getElementById('dishes-container');

    dishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        dishesContainer.appendChild(dishCard);
    });
}

// Запускаем отображение блюд после загрузки страницы
window.onload = displayDishes;