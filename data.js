var faker = require("faker");
var data = [];
var categories = ["Watersports", "Soccer", "Chess", "Running"];
faker.seed(100);
for (let i = 1; i <= 503; i++) { // its a good idea to use numbers of object not divisible by the size of the page
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
}

module.exports = function () {
    return {
        categories: categories,
        products: data,
        orders: [],
        marvyCodes: { name: "olowookere marvellous", university: "The Federal University of Technology, Akure."}
    }
}
/*
module.exports = function () {
    return { 
        categories: ["Watersports", "Soccer", "Chess"],
        products: [
            { id: 1, name: "Kayak", category: "Watersports", 
                description: "A boat for one person", price: 275 },
            { id: 2, name: "Lifejacket", category: "Watersports", 
                description: "Protective and fashionable", price: 48.95 },
            { id: 3, name: "Soccer Ball", category: "Soccer", 
                description: "FIFA-approved size and weight", price: 19.50 },
            { id: 4, name: "Corner Flags", category: "Soccer", 
                description: "Give your playing field a professional touch", price: 34.95 },
            { id: 5, name: "Stadium", category: "Soccer", 
                description: "Flat-packed 35,000-seat stadium", price: 79500 },
            { id: 6, name: "Thinking Cap", category: "Chess", 
                description: "Improve brain efficiency by 75%", price: 16 },
            { id: 7, name: "Unsteady Chair", category: "Chess", 
                description: "Secretly give your opponent a disadvantage", price: 29.95 },
            { id: 8, name: "Human Chess Board", category: "Chess", 
                description: "A fun game for the family", price: 75 },
            { id: 9, name: "Bling Bling King", category: "Chess", 
                description: "Gold-plated, diamond-studded King", price: 1200 }
        ],
        orders: []
    }
}
*/