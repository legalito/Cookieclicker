// player/player.js

// Classe représentant le joueur
class Player {
    constructor() {
        // Propriétés du joueur
        this.username = '';
        this.points = 0;
        this.lastLogin = null;
    }

    // Méthode d'initialisation du joueur
    init() {
        // Récupérez les informations du joueur depuis le backend (utilisez l'API)
        // Vous devrez implémenter la logique d'API appropriée dans le fichier api.js
        this.fetchPlayerInfo();
    }

    // Méthode pour récupérer les informations du joueur depuis le backend
    fetchPlayerInfo() {
        // Utilisez l'API pour récupérer les données du joueur
        // Vous devrez implémenter la logique appropriée dans le fichier api.js
        // Par exemple :
        // this.username = API.getUsername();
        // this.points = API.getPoints();
        // this.lastLogin = API.getLastLogin();
    }

    // Méthode pour mettre à jour les informations du joueur
    updatePlayerInfo() {
        // Utilisez l'API pour mettre à jour les données du joueur
        // Vous devrez implémenter la logique appropriée dans le fichier api.js
        // Par exemple :
        // API.updateUsername(this.username);
        // API.updatePoints(this.points);
        // API.updateLastLogin(this.lastLogin);
    }

    // Méthode pour gérer les points gagnés par le joueur
    earnPoints(amount) {
        this.points += amount;

        // Mettez à jour les informations du joueur après avoir gagné des points
        this.updatePlayerInfo();
    }
}

// Exportez la classe pour l'utiliser ailleurs
export default Player;
