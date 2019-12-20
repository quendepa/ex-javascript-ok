/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    var chaine = '"coucou petite perruche , je suis l élan derrière toi dans la forêt"';
          
var nb_car = chaine.length;
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}
 
actual_texte = 0;
function changeMessage()
{
document.getElementById("target").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementById)
 
setInterval("changeMessage()",100) 

    /*
    let nouveau =  "coucou petite perruche , je suis l'élan derrière toi dans la forêt";
    let copy = nouveau.split();
    let nb_car = nouveau.length;
    let copy = nb_car - 1;
    let txt = '';
    let nb_msg = nb_car - 1;

    for (i=0; i<nb_car; i++) {
        copy[i] = txt+copy[i];
        var txt = copy[i];
        }

        actual_texte = 0;
function changeMessage()
{
document.getElementById("target").innerHTML = copy[actual_texte];
actual_texte++;
if(actual_texte >= copy.length)
actual_texte = nb_msg;
}

*/

        /*
    console.log(copy);
    document.getElementById('target').item(0).innerHTML += nouveau;
    */
    
    

   
    

    /*
    (() => {
    let tab =["J", "e ", "s","u","i","s ","d","i","e","u."];
    let div = document.getElementById('target');

    function typeWriter() {
        interval = setInterval(() =>{
            div.innerHTML += tab.splice(0, 1);
        }, 200)
            console.log(tab);

    }
    typeWriter();
    */
})();




   