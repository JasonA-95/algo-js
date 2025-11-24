let nombre = rand10();
console.log("Le nombre aléatoire est : " + nombre);
function rand10() { // fonction pour générer un nombre aléatoire entre 1 et 10
return Math.floor(Math.random() * 10) + 1;
}