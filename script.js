// script.js

function displayDishes() {
    const categories = {};

    // Sort dishes alphabetically within each category
    dishes.sort((a, b) => a.name.localeCompare(b.name));

    // Group dishes by category
    dishes.forEach(dish => {
        if (!categories[dish.category]) {
            categories[dish.category] = [];
        }
        categories[dish.category].push(dish);
    });

    // Create HTML for each category
    for (const [category, items] of Object.entries(categories)) {
        const section = document.createElement('section');
        const header = document.createElement('h2');
        header.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        section.appendChild(header);
        
        const grid = document.createElement('div');
        grid.className = "dish-grid";

        items.forEach(item => {
            const dishDiv = document.createElement('div');
            dishDiv.className = "dish";
            dishDiv.setAttribute("data-dish", item.dataDish);
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            
            const price = document.createElement('p');
            price.className = "price";
            price.textContent = `${item.price} ₽`;
            
            const dishName = document.createElement('p');
            dishName.className = "dish-name";
            dishName.textContent = item.name;

            const weight = document.createElement('p');
            weight.className = "dish-weight";
            weight.textContent = item.weight;

            const button = document.createElement('button');
            button.className = "add-to-cart";
            button.textContent = "Добавить";
            button.onclick = () => addToOrder(item);

            dishDiv.appendChild(img);
            dishDiv.appendChild(price);
            dishDiv.appendChild(dishName);
            dishDiv.appendChild(weight);
            dishDiv.appendChild(button);
            grid.appendChild(dishDiv);
        });

        section.appendChild(grid);
        document.body.appendChild(section);
    }
}

function addToOrder(item) {
    const orderContainer = document.getElementById("order");
    const dishCategory = item.category + "s"; // e.g., "soups"
    const categoryDiv = document.getElementById(dishCategory);
    
    // Clear existing message if there is one
    const existingMessage = categoryDiv.querySelector("p");
    if (existingMessage) {
        existingMessage.remove();
    }

    const dishDiv = document.createElement('div');
    dishDiv.textContent = `${item.name} - ${item.price} ₽`;
    categoryDiv.appendChild(dishDiv);
    
    updateTotalPrice();
}

/** 
function updateTotalPrice() {
    const orderItems = document.querySelectorAll("#order div");
    let total = 0;
    
    orderItems.forEach(item => {
        const priceText = item.textContent.split(" - ")[1];
        total += parseInt(priceText);
    });

    const totalPriceDiv = document.getElementById("total-price");
    totalPriceDiv.textContent = `${total} ₽`;
}*/

// Initialize the dish display
displayDishes();

// Giỏ hàng
const cart = [];
let totalPrice = 0;

// Hàm thêm món vào giỏ hàng
function addToCart(name, price) {
    document.getElementById('order').style.display = 'block';
    document.getElementById('no-dishes').style.display = 'none';
    cart.push({ name: name, price: price });
    totalPrice += price;
    updateCart();
}

// Cập nhật giỏ hàng hiển thị
function updateCart() {
    // Cập nhật tổng tiền
    document.getElementById('total-price').textContent = `${totalPrice} ₽`;
}

// Tìm tất cả các nút "Добавить" và thêm sự kiện cho chúng
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Lấy thông tin tên món và giá từ các phần tử tương ứng
        const dishName = button.previousElementSibling.previousElementSibling.textContent;
        const dishPrice = parseInt(button.previousElementSibling.textContent.replace(' ₽', ''));

        // Gọi hàm thêm vào giỏ hàng
        addToCart(dishName, dishPrice);
    });
});
