document.addEventListener("DOMContentLoaded", () => {
    const soupsSection = document.getElementById("soups");
    const mainDishesSection = document.getElementById("main-dishes");
    const drinksSection = document.getElementById("drinks");

    dishes.forEach(dish => {
        const dishItem = document.createElement("div");
        
        dishItem.className = 'dish-item';
        
        // Добавление data-атрибута
        dishItem.setAttribute('data-dish', dish.keyword);
        
        // Создание HTML содержимого
        dishItem.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <p class="name">${dish.name}</p>
            <p class="price">Цена: ${dish.price} руб.</p>
            <p class="weight-volume">Объем: ${dish.count}</p>
            <button>Добавить</button>
        `;

        // Добавление элемента в соответствующий раздел
        if (dish.category === 'soup') {
            soupsSection.querySelector('.dish').appendChild(dishItem);
        } else if (dish.category === 'main dish') {
            mainDishesSection.querySelector('.dish').appendChild(dishItem);
        } else if (dish.category === 'drink') {
            drinksSection.querySelector('.dish').appendChild(dishItem);
        }
    });
});