function factorial(a) {
    if (a === 0) return 1;       // condition de base
    return a * factorial(a - 1); // appel récursif
}
let num = Number(prompt("Entrez un nombre entier positif pour calculer sa factorielle :"));
let result = factorial(num);
console.log("La factorielle de " + num + " est : " + result);
