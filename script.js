function showSection(sectionId) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function openOptions(type) {
    const orderDetails = document.getElementById('orderDetails');
    if (type === 'standard') {
        orderDetails.innerHTML = "Vous avez choisi une Camiseta Standard - 800 MRU";
    } else {
        orderDetails.innerHTML = "Vous avez choisi une Camiseta Personnalisée - 1000 MRU";
    }
    document.getElementById('orderForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('orderForm').style.display = 'none';
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const size = document.getElementById('size').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentScreenshot = document.getElementById('paymentScreenshot').files[0];

    let orderSummary = `Votre commande a été soumise!\nNom: ${name}\nNuméro: ${number}\nTaille: ${size}\nMoyen de paiement: ${paymentMethod}`;
    
    alert(orderSummary);
    closeForm(); // Fermer le formulaire après soumission
}