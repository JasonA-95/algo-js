let A = [1, 1];
let B = [2, 2];
let C = [3, 3];
let distance = calcDistanceAB(A, B);
console.log("La distance entre A et B est :", distance);

distance = calcDistanceAB(B, C);
console.log("La distance entre B et C est :", distance);

distance = calcDistanceAB(A, C);
console.log("La distance entre A et C est :", distance);

function calcDistanceAB(A, B) {
    let deltaX = B[0] - A[0];
    let deltaY = B[1] - A[1];
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}