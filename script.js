document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la soumission normale du formulaire
    
    const webhookUrl = 'https://discord.com/api/webhooks/1298030387439734824/4_-i0OxRlmzHWWB4KWlFhsBaOI9z9bLlbLQiTVpnfH3CX0JeGA5jK0fbfLN2w3HMHxm4'; // Colle ton Webhook ici
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format du message à envoyer à Discord
    const payload = {
        content: `Nouveau message de contact :\nNom : ${name}\nEmail : ${email}\nMessage : ${message}`
    };
    
    // Envoie les données à Discord
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Message envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message.');
    });
});
