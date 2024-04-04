// game/game.js

// Importez les modules nécessaires
// import Player from '../player/player.js';
// import Equipment from '../equipment/equipment.js';
// import Improvement from '../improvement/improvement.js';
// import Hero from '../hero/hero.js';
// import API from '../api/api.js';
// import Constants from '../constants/constants.js';
// import Animations from '../animations/animations.js';

// Classe principale du jeu
class Game {
    constructor() {
        // Créez des instances des différents modules
        // this.player = new Player();
        // this.equipment = new Equipment();
        // this.improvement = new Improvement();
        // this.hero = new Hero();
        // this.api = new API();
        // this.animations = new Animations();
        this.score = 0;
        this.clickableArea = document.getElementById('clickableArea');
    }

    // Méthode d'initialisation du jeu
    init() {
        // Initialisez les différents modules
        console.log('Game initialized!');
        // this.player.init();
        // this.equipment.init();
        // this.improvement.init();
        // this.hero.init();
        // this.api.init();
        // this.animations.init();
        //this.clickableArea.addEventListener('click', this.onClick.bind(this));
        console.log(this.clickableArea)
    }

    // Méthode de démarrage du jeu
    start() {
        // Démarrez la logique principale du jeu
        this.gameLoop();
    }

    // Boucle de jeu principale
    gameLoop() {
        this.clickableArea.addEventListener('click', () => {
            this.score++;
            this.updateScore();
            console.log(this.score);
        });
    }
    updateScore() {
        // Mettez à jour l'interface utilisateur avec le score actuel
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.textContent = `Score: ${this.score}`;
        }
    }
}

// Exportez la classe pour l'utiliser ailleurs
export default Game;
