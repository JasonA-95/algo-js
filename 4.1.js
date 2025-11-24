function calcSurface(longueur, largeur) {
let surface = longueur * largeur  // calculer la surface
  return surface; // retourner le résultat
}
// demander la longueur et la largeur du rectangle
let saisie = prompt(" veuillez entrer la longeur et la largeur du rectangle separer par une virgule (ex: 5,3) :");
let dimensions = saisie.split(","); // on split la chaine de caractere en un tableau        
let longueur = Number(dimensions[0]); // on convertit la longeur en nombre
let largeur = Number(dimensions[1]); // on convertit la largeur en nombre
let surface = calcSurface(longueur, largeur);
console.log("La surface du rectangle est : " + surface);