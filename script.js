// script.js

// Fonction pour gérer l'envoi du formulaire de demande de design
document.querySelector('#request form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher l'envoi du formulaire par défaut
    alert('Votre demande de design a été envoyée avec succès !'); // Message de confirmation
});

// Fonction pour gérer l'envoi du formulaire de contact
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher l'envoi du formulaire par défaut
    alert('Votre message a été envoyé avec succès !'); // Message de confirmation
});