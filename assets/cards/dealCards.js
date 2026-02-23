const dealProducts = [
    {
        name: "Trenbolone",
        image: "/assets/images/trenbolone.png",
        oldPrice: 100.00,
        price: 79.99
    },
    {
        name: "Creatine X",
        image: "/assets/images/creatinex.png",
        oldPrice: 60.00,
        price: 39.99
    },
    {
        name: "Elite Whey Protein",
        image: "/assets/images/elitewhey.png",
        oldPrice: 120.00,
        price: 89.99
    },
    {
        name: "Ultra Mass Gainer",
        image: "/assets/images/ultramassgainer.png",
        oldPrice: 140.00,
        price: 109.99
    },
    {
        name: "Pre-Workout Ignition",
        image: "/assets/images/preworkoutignition.png",
        oldPrice: 70.00,
        price: 49.99
    },
    {
        name: "BCAA Recovery Blend",
        image: "/assets/images/bcaarecoveryblend.png",
        oldPrice: 55.00,
        price: 34.99
    },
    {
        name: "Testosterone Booster Max",
        image: "/assets/images/testosteroneboostermax.png",
        oldPrice: 95.00,
        price: 69.99
    }
];

const dealRow = document.getElementById("supx-deal-row");

dealProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">
            <span class="old">$${product.oldPrice.toFixed(2)}</span>
            <span class="new">$${product.price.toFixed(2)}</span>
        </div>
    `;

    dealRow.appendChild(card);
});