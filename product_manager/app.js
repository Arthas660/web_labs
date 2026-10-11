"use strict";
const addButton = document.getElementById("addButton");
const editButton = document.getElementById("editButton");
const deleteButton = document.getElementById("deleteButton");
const cancelButton = document.getElementById("cancelButton");
const form = document.getElementById("productForm");
const formTitle = document.getElementById("formTitle");
const nameInput = document.getElementById("name");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const imageInput = document.getElementById("imageInput");
const cards = document.getElementById("cards");
const message = document.getElementById("message");
const emptyMessage = document.getElementById("emptyMessage");
// 0 означає, що товар не вибраний або не редагується
let selectedId = 0;
let editingId = 0;
let nextId = 11;
const defaultImage = "img/default.jpg";
let products = [
    { id: 1, name: "Ноутбук Lenovo", category: "Електроніка", price: 24500, quantity: 5, image: defaultImage },
    { id: 2, name: "Смартфон Samsung", category: "Електроніка", price: 12000, quantity: 8, image: defaultImage },
    { id: 3, name: "Навушники JBL", category: "Аксесуари", price: 1800, quantity: 15, image: defaultImage },
    { id: 4, name: "Мишка Logitech", category: "Аксесуари", price: 650, quantity: 20, image: defaultImage },
    { id: 5, name: "Клавіатура", category: "Аксесуари", price: 1200, quantity: 12, image: defaultImage },
    { id: 6, name: "Монітор LG", category: "Електроніка", price: 6500, quantity: 7, image: defaultImage },
    { id: 7, name: "Флешка 64 ГБ", category: "Накопичувачі", price: 350, quantity: 30, image: defaultImage },
    { id: 8, name: "Колонка Bluetooth", category: "Аудіотехніка", price: 2100, quantity: 10, image: defaultImage },
    { id: 9, name: "Вебкамера", category: "Аксесуари", price: 950, quantity: 9, image: defaultImage },
    { id: 10, name: "Зовнішній SSD 1 ТБ", category: "Накопичувачі", price: 3900, quantity: 6, image: defaultImage }
];
function renderProducts() {
    cards.replaceChildren();
    emptyMessage.hidden = products.length > 0;
    editButton.disabled = selectedId === 0;
    deleteButton.disabled = selectedId === 0;
    for (const product of products) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "card";
        if (product.id === selectedId) {
            card.classList.add("selected");
        }
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.className = "product-image";
        image.onerror = () => {
            image.hidden = true;
        };
        const title = document.createElement("span");
        title.className = "product-name";
        title.textContent = product.name;
        const category = document.createElement("span");
        category.textContent = "Категорія: " + product.category;
        const price = document.createElement("span");
        price.textContent = "Ціна: " + product.price + " грн";
        const quantity = document.createElement("span");
        quantity.textContent = "Кількість: " + product.quantity;
        card.append(image, title, category, price, quantity);
        card.onclick = () => {
            selectedId = product.id;
            editingId = 0;
            form.hidden = true;
            message.textContent = "";
            renderProducts();
        };
        cards.appendChild(card);
    }
}
addButton.onclick = () => {
    editingId = 0;
    form.reset();
    formTitle.textContent = "Новий товар";
    form.hidden = false;
    message.textContent = "";
};
cancelButton.onclick = () => {
    form.hidden = true;
    editingId = 0;
};
editButton.onclick = () => {
    const product = products.find(item => item.id === selectedId);
    if (!product)
        return;
    editingId = product.id;
    nameInput.value = product.name;
    categoryInput.value = product.category;
    priceInput.value = String(product.price);
    quantityInput.value = String(product.quantity);
    imageInput.value = "";
    formTitle.textContent = "Редагування товару";
    form.hidden = false;
    message.textContent = "";
};
deleteButton.onclick = () => {
    if (!confirm("Видалити вибраний товар?"))
        return;
    products = products.filter(item => item.id !== selectedId);
    selectedId = 0;
    editingId = 0;
    form.hidden = true;
    message.textContent = "Товар видалено.";
    renderProducts();
};
form.onsubmit = (event) => {
    var _a;
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name === "") {
        message.textContent = "Введіть назву товару.";
        return;
    }
    const oldProduct = products.find(item => item.id === editingId);
    let image = oldProduct ? oldProduct.image : defaultImage;
    const file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        if (!file.type.startsWith("image/")) {
            message.textContent = "Виберіть файл зображення.";
            return;
        }
        image = URL.createObjectURL(file);
    }
    const product = {
        id: editingId,
        name: name,
        category: categoryInput.value.trim(),
        price: Number(priceInput.value),
        quantity: Number(quantityInput.value),
        image: image
    };
    if (editingId === 0) {
        product.id = nextId;
        nextId++;
        products.push(product);
    }
    else {
        const index = products.findIndex(item => item.id === editingId);
        products[index] = product;
    }
    selectedId = product.id;
    editingId = 0;
    form.hidden = true;
    message.textContent = "Товар збережено.";
    renderProducts();
};
renderProducts();
