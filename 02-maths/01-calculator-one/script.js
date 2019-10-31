/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


     
    
    document.getElementById("addition").addEventListener("click", ()=> {

           var plus = parseFloat(document.getElementById("op-one").value) + parseFloat(document.getElementById("op-two").value);
           alert(plus);
    });
          

    document.getElementById("substraction").addEventListener("click", () => {

        var sub = parseFloat(document.getElementById("op-one").value) - parseFloat(document.getElementById("op-two").value);
        alert(sub);
    });

    document.getElementById("multiplication").addEventListener("click", () => {

        var mult = parseFloat(document.getElementById("op-one").value) * parseFloat(document.getElementById("op-two").value);
        alert(mult);
    });

    document.getElementById("division").addEventListener("click", () => {
        var div = parseFloat(document.getElementById("op-one").value) / parseFloat(document.getElementById("op-two").value);
        alert(div);


    });
})();
