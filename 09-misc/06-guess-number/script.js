/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var choixOrdi = Math.floor((Math.random() * 100) + 1),
    choixUtilisateur;


 
var fin = true;
choixUtilisateur = prompt("choisissez un nombre entre 0 et 100");
 i=0

while (choixOrdi != choixUtilisateur) {
    i=i+1
 

 
    if (choixUtilisateur < choixOrdi)
        console.log("plus grand , vous êtes à votre " + i + " essai");
    else
        console.log("plus petit , vous êtes à votre " + i + " essai");
 
    choixUtilisateur = prompt("choisissez un nombre entre 0 et 100");
}
 

console.log("vous avez trouvé le bon chiffre bravo !");



})();
