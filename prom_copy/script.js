const productsData = [
    {
        id: 1,
        title: "Акумуляторна газонокосарка Bosch UniversalRotak 2x18V-37-550 36В 37см",
        price: "18 741",
        oldPrice: null,
        img: "https://images.prom.ua/7623644373_w200_h200_akkumulyatornaya-gazonokosilka-bosch.jpg",
        badge: "ТОП ПРОДАЖІВ"
    },
    {
        id: 2,
        title: "Акумуляторна газонокосарка (тример) PARKSIDE PRTA 20-Li D3 (20 В, 25 см, АКБ 2 Аг + ЗП)",
        price: "3 299",
        oldPrice: "3 999",
        img: "https://images.prom.ua/7573625242_w200_h200_akkumulyatornaya-gazonokosilka-trimmer.jpg",
        badge: "АКЦІЯ"
    },
    {
        id: 3,
        title: "Газонокосарка механічна ручна LIDER GSS30-B 30 см",
        price: "3 999",
        oldPrice: null,
        img: "https://images.prom.ua/4358520408_w200_h200_gazonokosarka-mehanichna-ruchna.jpg",
        badge: null
    },
    {
        id: 4,
        title: "Дровокол горизонтальний AL-KO LSH 520/5",
        price: "19 600",
        oldPrice: "24 500",
        img: "https://images.prom.ua/3952220239_w200_h200_drovokol-gorizontalnij-al-ko.jpg",
        badge: "ЗНИЖКА -20%"
    },
    {
        id: 5,
        title: "Газонокосарка електрична Parkside PRM 1300 B2, 1.3 кВт, з мідною обмоткою",
        price: "2 930",
        oldPrice: "3 730",
        img: "https://images.prom.ua/7449908618_w200_h200_gazonokosilka-elektricheskaya-parkside.jpg",
        badge: "АКЦІЯ"
    },
    {
        id: 6,
        title: "Газонокосарка акумуляторна Bosch AdvancedRotak 36V-44-750 44 см",
        price: "24 103",
        oldPrice: null,
        img: "https://images.prom.ua/7489424709_w200_h200_gazonokosilka-akkumulyatornaya-bosch.jpg",
        badge: null
    }
];

const gridContainer = document.getElementById('products-grid');

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const badge = document.createElement('div');
    badge.classList.add('product-badge');
    if (product.badge) {
        badge.textContent = product.badge;
    } else {
        badge.classList.add('badge-hidden');
    }

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.title;
    img.classList.add('product-img');

    const title = document.createElement('h4');
    title.classList.add('product-title');
    title.textContent = product.title;

    const oldPrice = document.createElement('div');
    oldPrice.classList.add('product-old-price');
    if (product.oldPrice) {
        oldPrice.textContent = `${product.oldPrice} ₴`;
    }

    const priceRow = document.createElement('div');
    priceRow.classList.add('price-row');

    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `${product.price} ₴`;

    const buyBtn = document.createElement('button');
    buyBtn.classList.add('buy-btn');
    buyBtn.textContent = '🛒';

    priceRow.appendChild(price);
    priceRow.appendChild(buyBtn);

    card.appendChild(badge);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(oldPrice);
    card.appendChild(priceRow);

    return card;
}

productsData.forEach(product => {
    const cardElement = createProductCard(product);
    gridContainer.appendChild(cardElement);
});
