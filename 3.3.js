let tableauoriginal = [5, 10, 15, 20, 25]; // tableau original
let tableaucopie = []; // tableau vide pour la copie

for (let i = 0; i < tableauoriginal.length; i++) { // boucle à travers chaque élément du tableau original
    tableaucopie[i] = tableauoriginal[i]; // copie chaque élément dans le nouveau tableau
}




let tableaucopie = tableauoriginal.slice(); // copie du tableau original dans le nouveau tableau