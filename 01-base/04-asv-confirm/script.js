/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var age = prompt("Quelle est votre age ? ");
    var sexe = prompt("Quelle est votre sexe ? ");
    var ville = prompt ("Ou habitez-vous ? ");
    var confirmation = ['age : ' + age + ' sexe : ' + sexe + ' ville : ' + ville]
    


    
     if (  confirm( "Ces données sont elles correctes ? "+confirmation) ) {
         alert("parfait !")
     }
     
})();
