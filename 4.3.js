let n = Number(prompt("Entrez un nombre entier positif :"));
let nombre = multiRand(n);
console.log("les nombres générés sont : " +nombre);
function rand10() { // fonction pour générer un nombre aléatoire entre 1 et 10
return Math.floor(Math.random() * 10) + 1;
}
function multiRand(n) { // retourne un tableau de nombres entre 1 et 10

    if (n <= 0) 
        return [];

    let results = [];
    for (let i = 0; i < n; i++) {
        results.push(rand10());
    }
    return results;
}