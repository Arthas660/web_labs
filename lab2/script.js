function calculateTotal() {
    const checkedItems = document.querySelectorAll('.menu-item:checked');
    let sum = 0;
        checkedItems.forEach(item => {
        sum += Number(item.getAttribute('price')); 
    });
    
    document.getElementById('total-price').innerText = sum;
}

function clearMenu() {
    const allItems = document.querySelectorAll('.menu-item');
    
    allItems.forEach(item => {
        item.checked = false;
    });
    
    document.getElementById('total-price').innerText = 0;
}
