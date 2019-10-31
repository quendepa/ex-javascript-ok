/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        
          switch (operation) {
              case 'addition':
                var plus = parseFloat(document.getElementById("op-one").value) + parseFloat(document.getElementById("op-two").value);
                alert(plus);
              break;

              case 'substraction':
                var sub = parseFloat(document.getElementById("op-one").value) - parseFloat(document.getElementById("op-two").value);
                alert(sub);
              break;

              case 'multiplication':
                 var mult = parseFloat(document.getElementById("op-one").value) * parseFloat(document.getElementById("op-two").value);
                 alert(mult);
              break;

              case 'division':
                    var mult = parseFloat(document.getElementById("op-one").value) / parseFloat(document.getElementById("op-two").value);
                    alert(mult);
              break;

              default:
                    alert('nope')
  
              }

           }



    

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
