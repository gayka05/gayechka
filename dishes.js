const dishes = [
    {
        keyword: "cheese_soup",
        name: "Сырный суп",
        price: 300,
        category: "soup",
        count: "300 мл",
        image: "soups/sirnisup.jpg"
    },
    {
        keyword: "tom_yum",
        name: "Том Ям",
        price: 250,
        category: "soup",
        count: "300 мл",
        image: "soups/tomyam.jpg"
    },
    {
        keyword: "chicken_soup",
        name: "Куриный суп",
        price: 200,
        category: "soup",
        count: "300 мл",
        image: "soups/kurinisup.jpg"
    },
    {
        keyword: "steak",
        name: "Стейк",
        price: 600,
        category: "main dish",
        count: "450 г",
        image: "mains/steik.jpg"
    },
    {
        keyword: "cabbage_rolls",
        name: "Голубцы",
        price: 550,
        category: "main dish",
        count: "300 г",
        image: "mains/голубцы.jpg"
    },
    {
        keyword: "shashlik",
        name: "Шашлык",
        price: 600,
        category: "main dish",
        count: "500 г",
        image: "mains/shashlyk.jpg"
    },
    {
        keyword: "orange_juice",
        name: "Апельсиновый сок",
        price: 150,
        category: "drink",
        count: "300 мл",
        image: "drinks/апельсин.jpg"
    },
    {
        keyword: "pomegranate_juice",
        name: "Гранатовый сок",
        price: 150,
        category: "drink",
        count: "300 мл",
        image: "drinks/гранат.jpg"
    }
];

dishes.sort((a, b) => a.name.localeCompare(b.name));
