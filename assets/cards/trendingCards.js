const trendingProducts = [
    {
        name: "Probiotic Gut Balance",
        image: "/assets/images/probioticgutbalance.png",
        price: 75.00
    },
    {
        name: "Vitamin D3 + K2",
        image: "/assets/images/vitamind3k2.png",
        price: 32.00
    },
    {
        name: "Iron Boost Capsules",
        image: "/assets/images/ironboostcapsules.png",
        price: 28.00
    },
    {
        name: "Magnesium Recovery",
        image: "/assets/images/magnesiumrecovery.png",
        price: 38.00
    },
    {
        name: "L-Carnitine Liquid",
        image: "/assets/images/lcarnitineliquid.png",
        price: 82.00
    },
    {
        name: "Ultimate Pump Stack",
        image: "/assets/images/ultimatepumpstack.png",
        price: 160.00
    }
];

const trendingRow = document.getElementById("supx-trending-row");

trendingProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">
            <span class="new">$${product.price.toFixed(2)}</span>
        </div>
    `;

    trendingRow.appendChild(card);
});