let chiffrefavoris = prompt("Quel est ton chiffre favoris ?"); // récupère la saisie utilisateur
chiffrefavoris = Number(chiffrefavoris); // convertir en nombre

console.log("Mon chiffre favoris est le " + chiffrefavoris + " !");

if (chiffrefavoris !== 42) {
    let confirmation = confirm("Es-tu sûr ?");
    console.log(confirmation); // true si OK, false si Annuler
}