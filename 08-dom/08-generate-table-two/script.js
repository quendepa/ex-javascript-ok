/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let Tableau = document.getElementsByTagName("div")[2];
      let tab = document.createElement("table");
      let table = document.createElement("tbody");
      
      for (let i=0 ; i<10 ; i++){
        let row = document.createElement("tr");

        for (let j=0; j<10 ; j++) {
          let cell = document.createElement("td");
          let celltxt = document.createTextNode((i+1)*(j+1) );
          cell.appendChild(celltxt);
          row.appendChild(cell);
        }
         table.appendChild(row);
    }

      
      tab.appendChild(table);
      Tableau.appendChild(tab);
})();
