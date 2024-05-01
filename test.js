// function determineNumber(angle, maxNumber) {
//     // Convertir l'angle en une valeur entre 0 et 360 degrés
//     let normalizedAngle = (angle % 360 + 360) % 360;

//     // Calculer le nombre en fonction de l'angle et du nombre maximum
//     let calculatedNumber = Math.ceil((normalizedAngle / 360) * maxNumber);

//     // Si le nombre calculé est égal à 0, le mettre à la valeur maximale
//     if (calculatedNumber === 0) {
//         calculatedNumber = maxNumber;
//     }

//     return calculatedNumber;
// }

// // Exemple d'utilisation
// let angle1 = 45; // Angle pour la roue de 1 à 5
// let number1 = determineNumber(angle1, 5);
// console.log("Roue de 1 à 5 :", number1);

// let angleA = 300; // Angle pour la roue de 1 à 5
// let numberA = determineNumber(angleA, 5);
// console.log("Roue de 1 à 5 :", numberA);

// let angle2 = 120; // Angle pour la roue de 1 à 12
// let number2 = determineNumber(angle2, 12);
// console.log("Roue de 1 à 12 :", number2);

// let angle3 = 240; // Angle pour la roue de 1 à 15
// let number3 = determineNumber(angle3, 15);
// console.log("Roue de 1 à 15 :", number3);

// let angle4 = 300; // Angle pour la roue de 1 à 10
// let number4 = determineNumber(angle4, 10);
// console.log("Roue de 1 à 10 :", number4);
























// function determineNumberMain(angle, winningNumbers) {
//     // Convertir l'angle en une valeur entre 0 et 360 degrés
//     let normalizedAngle = (angle % 360 + 360) % 360;

//     // Calculer l'indice correspondant à l'angle dans la liste des numéros gagnants
//     let index = Math.floor((normalizedAngle / 360) * winningNumbers.length);

//     // Récupérer le numéro gagnant à partir de la liste
//     let winningNumber = winningNumbers[index];

//     return winningNumber;
// }

// // Exemple d'utilisation avec une liste prédéterminée de numéros gagnants
// let winningNumbers1 = [1, 2, 3, 4, 5];
// let angle1 = 45; // Angle pour la roue de 1 à 5
// let number1 = determineNumberMain(angle1, winningNumbers1);
// console.log("Roue de 1 à 5 :", number1);

// let winningNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let angle2 = 120; // Angle pour la roue de 1 à 12
// let number2 = determineNumberMain(angle2, winningNumbers2);
// console.log("Roue de 1 à 12 :", number2);

// let winningNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let angle3 = 240; // Angle pour la roue de 1 à 15
// let number3 = determineNumberMain(angle3, winningNumbers3);
// console.log("Roue de 1 à 15 :", number3);

// let winningNumbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angle4 = 300; // Angle pour la roue de 1 à 10
// let number4 = determineNumberMain(angle4, winningNumbers4);
// console.log("Roue de 1 à 10 :", number4);




// function determineWinningNumber(winningNumbers, angleRanges, currentAngle) {
    // for (let i = 0; i < angleRanges.length; i++) {
    //     const { number, startAngle, endAngle } = angleRanges[i];

    //     // Vérifier si l'angle actuel est compris dans la plage spécifiée
    //     if (currentAngle >= startAngle && currentAngle <= endAngle) {
    //         // Vérifier si le numéro correspondant à l'angle est un numéro gagnant
    //         if (winningNumbers.includes(number)) {
    //             return number; // Retourner le numéro gagnant
    //         }
    //     }
    // }

    // return null; // Retourner null si aucun numéro gagnant n'est trouvé pour l'angle donné
// }

// // Exemple d'utilisation
// const winningNumbers = [1, 2, 3, 4, 5];
// const angleRanges = [
//     { number: 1, startAngle: 0, endAngle: 72 },
//     { number: 2, startAngle: 73, endAngle: 144 },
//     { number: 3, startAngle: 145, endAngle: 216 },
//     { number: 4, startAngle: 217, endAngle: 288 },
//     { number: 5, startAngle: 289, endAngle: 360 },
// ];

// const currentAngle = 200; // Remplacez par l'angle actuel de votre roue

// const result = determineWinningNumber(winningNumbers, angleRanges, currentAngle);
// console.log(result);




















// const generateResultValue = (angle, winningAngles, winningNumbers) => {
//     let winningNumber;

//     // Convertir l'angle en une valeur entre 0 et 360 degrés
//     let normalizedAngle = (angle % 360 + 360) % 360;

//     // Parcourir les plages d'angles
//     for (let i of winningAngles) {
//         if (normalizedAngle > i.minDeg && normalizedAngle < i.maxDeg) {
//             // Si l'angle est dans la plage, retourner le numéro correspondant
//             return i.valA;
//         }
//     }

//     // Si l'angle ne correspond à aucune plage, calculer l'indice correspondant à l'angle dans la liste des numéros gagnants
//     let index = Math.floor((normalizedAngle / 360) * winningNumbers.length);

//     // Retourner le numéro gagnant correspondant à l'indice calculé
//     winningNumber = winningNumbers[index];

//     return winningNumber;
// };

// // Exemple d'utilisation
// const angle = 200; // Angle obtenu à partir de votre animation de roue
// const winningNumbers = [1, 2, 3, 4, 5]; // Remplacez par vos numéros gagnants
// const winningAngles = [
//     { minDeg: 0, maxDeg: 72, valA: /* Valeur correspondante pour la plage */ },
//     // Ajoutez les autres plages d'angles avec les valeurs correspondantes
// ];

// const resultValue = generateResultValue(angle, winningAngles, winningNumbers);
// console.log("Résultat de la fonction :", resultValue);



const numberOfSections = 5;
const anglePerSection = 360 / numberOfSections;

const wheelSections = Array.from({ length: numberOfSections }, (_, index) => {
  const startAngle = index * anglePerSection;
  const endAngle = (index + 1) * anglePerSection;

  return {
    number: index + 1,
    startAngle,
    endAngle,
  };
});

// Utilisation des sections définies
wheelSections.forEach(section => {
  console.log(`Numéro ${section.number}: de ${section.startAngle} à ${section.endAngle} degrés`);
});
