/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // vdocument.body.onload = addElement;

    
      let Tableau = document.getElementsByTagName("div")[2];
      let tab = document.createElement("table");
      let table = document.createElement("tbody");
      
      for (let i=0 ; i<10 ; i++){
        let row = document.createElement("tr");

        for (let j=0; j<1 ; j++) {
          let cell = document.createElement("td");
          let celltxt = document.createTextNode("cellule n " +(i+1) );
          cell.appendChild(celltxt);
          row.appendChild(cell);
        }
         table.appendChild(row);

      }
      tab.appendChild(table);
      Tableau.appendChild(tab);


    /*
	for (i=0;i<=nbre_lignes; i++)
	{
		document.write.setAttribute("target" ,"<tr>");
		document.write.setAttribute("taget" ,"<td>col 1 </td>");

		document.write.setAttribute("target" ,"</tr>");
	}
    document.write.setAttribute("src" ,"</table>");
    */
})();
