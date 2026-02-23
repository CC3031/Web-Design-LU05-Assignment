const popularProducts = [
    {
        name: "Omega-3 Pro",
        image: "/assets/images/omega3pro.png",
        price: 45.00
    },
    {
        name: "Daily Multivitamin+",
        image: "/assets/images/dailymultivitamin.png",
        price: 40.00
    },
    {
        name: "Glutamine Recovery",
        image: "/assets/images/glutaminerecovery.png",
        price: 50.00
    },
    {
        name: "Nitric Pump Extreme",
        image: "/assets/images/nitricpumpextreme.png",
        price: 85.00
    },
    {
        name: "Hydration Electro Mix",
        image: "/assets/images/hydrationelectromix.png",
        price: 35.00
    },
    {
        name: "Lean Burn Thermogenic",
        image: "/assets/images/leanburnthermogenic.png",
        price: 90.00
    },
];

const popularRow = document.getElementById("supx-popular-row");

popularProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">
            <span class="new">$${product.price.toFixed(2)}</span>
        </div>
    `;

    popularRow.appendChild(card);
});