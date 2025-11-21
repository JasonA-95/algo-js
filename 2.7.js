let saisie = prompt("Entrez un nombre :"); // demande à l'utilisateur
let nombre = Number(saisie); // convertit la saisie en nombre

let sommes = 0; // initialisation de la somme

for (let i = 1; i <= nombre; i++) { // demander un nombre a l'utilisateur
    //convertir en nombre
    // ajoute à la somme
  let saisie = prompt("Entrez un nombre :")
  let nouveaunombre = Number(saisie);
  sommes += nouveaunombre;
}
console.log("La somme des nombres nombre saisis est " + sommes); // affiche le résultat