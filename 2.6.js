// Tableau avec les jours de la semaine
let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// Demande à l'utilisateur un chiffre
let saisie = prompt("Quel jour sommes-nous ? (1-7)");

// Convertit la saisie en nombre
let numeroJour = Number(saisie);

// Vérifie si le numéro est valide (entre 1 et 7)
if (numeroJour >= 1 && numeroJour <= 7) {
    // Affiche le jour correspondant
    console.log("Aujourd'hui, nous sommes " + jours[numeroJour - 1]);
} else {
    console.log("Jour invalide");
}