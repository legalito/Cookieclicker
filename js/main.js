// main.js

// Importez les modules nécessaires
import Game from './game.js';

// Fonction principale d'initialisation
function initializeGame() {
    // Créez une instance du jeu
    const game = new Game();

    // Initialisez le jeu
    game.init();

    // Démarrez le jeu
    game.start();
    console.log('Game initialized and started!');
}

// Appelez la fonction d'initialisation lorsque la page est entièrement chargée
document.addEventListener('DOMContentLoaded', initializeGame);
