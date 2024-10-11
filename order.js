document.addEventListener("DOMContentLoaded", () => {
    const orderSections = {
        soup: document.querySelector("#soup-order"),
        mainDish: document.querySelector("#main-dish-order"),
        drink: document.querySelector("#drink-order"),
    };
    const totalCostElement = document.getElementById("total-cost");
    let totalCost = 0;

    // Обработчик клика по карточкам блюд
    document.querySelectorAll('.dish-item button').forEach(button => {
        button.addEventListener('click', () => {
            const dishItem = button.closest('.dish-item');
            const name = dishItem.querySelector('.name').textContent;
            const price = parseInt(dishItem.querySelector('.price').textContent.match(/\d+/)[0]);
            const category = dishItem.closest('section').id;

            // Обновление заказа
            updateOrder(category, name, price);
        });
    });

    function updateOrder(category, name, price) {
        // Удаление предыдущего блюда в этой категории
        if (orderSections[category].firstChild) {
            orderSections[category].innerHTML = '';
        }

        // Добавление нового блюда в заказ
        orderSections[category].innerHTML = `<p>${name} - ${price} руб.</p>`;
        
        // Обновление общей стоимости
        totalCost += price;
        totalCostElement.textContent = `Итоговая стоимость: ${totalCost} руб.`;

        // Проверка на пустые категории
        checkEmptyCategories();
    }

    function checkEmptyCategories() {
        for (const category in orderSections) {
            if (!orderSections[category].firstChild) {
                orderSections[category].innerHTML = `<p>Блюдо не выбрано</p>`;
            }
        }
    }
});