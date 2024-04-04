// Importer le module Express
const express = require('express');

// Créer une instance de l'application Express
const app = express();

// Définir un point de terminaison pour la route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre API !');
});

// Définir le port sur lequel le serveur écoutera les requêtes
const port = 3000;

// Lancer le serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
