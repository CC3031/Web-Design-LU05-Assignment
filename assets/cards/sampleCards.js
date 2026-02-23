const sampleProducts = [
    {
        name: "Casein Night Protein",
        image: "/assets/images/caseinnightprotein.png",
        price: 11.00
    },
    {
        name: "Vegan Protein Fusion",
        image: "/assets/images/veganproteinfusion.png",
        price: 10.50
    },
    {
        name: "Joint Support Complex",
        image: "/assets/images/jointsupportcomplex.png",
        price: 6.50
    },
    {
        name: "ZMA Recovery Stack",
        image: "/assets/images/zmarecoverystack.png",
        price: 4.80
    },
    {
        name: "Focus & Energy Nootropic",
        image: "/assets/images/focusandenergynootropic.png",
        price: 8.80
    },
    {
        name: "Electrolyte Reload",
        image: "/assets/images/electrolytereload.png",
        price: 3.00
    },
];

const sampleRow = document.getElementById("supx-sample-row");

sampleProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">
            <span class="new">$${product.price.toFixed(2)}</span>
        </div>
    `;

    sampleRow.appendChild(card);
});