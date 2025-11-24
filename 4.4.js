let learners = [
    "thelichkinge", "ethan", "Hetaska", "Enrique2802", "Trollman341",
    "Kisame25021990", "Léandre Mpore-Ghozzo", "Abdoul", "Aucouturier Jason",
    "xam1712", "Dodo-31", "MattWare", "Thomas", "lalbecade",
    "Gaetan", "Dimitri Gillain", "TyberCusa", "Johan"
];

let picked = pickLearner(learners, 3);
console.log("Les apprenants sélectionnés sont :", picked);
function pickLearner(inputAr, n) {
    if (n <= 0 || n > inputAr.length) {
        return []; // retourne un tableau vide si n invalide
    }

    let selected = [];
    let usedIndices = new Set();

    while (selected.length < n) {
        let index = Math.floor(Math.random() * inputAr.length);
        if (!usedIndices.has(index)) {
            selected.push(inputAr[index]);
            usedIndices.add(index);
        }
    }

    return selected;
}

