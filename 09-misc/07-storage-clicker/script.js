/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let i=0 ;
    
    document.getElementById("increment").addEventListener("click", () => {
        i+=1
        document.getElementsByClassName('counter').item(0).innerHTML =i;

    });
    
})();
