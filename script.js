function showSection(sectionId) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function openForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function toggleCustomization() {
    const customizationSelect = document.getElementById('customization');
    const customFields = document.getElementById('customFields');
    if (customizationSelect.value === 'custom') {
        customFields.style.display = 'block';
    } else {
        customFields.style.display = 'none';
    }
}

function submitJerseyOrder() {
    const customization = document.getElementById('customization').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const size = document.getElementById('size').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentScreenshot = document.getElementById('paymentScreenshot').files[0];

    if (customization === "custom") {
        if (!name || !number) {
            alert("Veuillez remplir tous les champs!");
            return;
        }
        alert(`Votre commande de maillot personnalisé a été soumise!\nNom: ${name}\nNuméro: ${number}\nTaille: ${size}\nMoy