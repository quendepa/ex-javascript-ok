/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
      const getRandomIntInclusive=(min=1, max=100) => {
        return Math.floor(Math.random() * (max - min +1)) + min;

      };

      const tableau =[];
      for (let i = 0; i < 10; i++) { 
           tableau.push(getRandomIntInclusive());
      }
      let min = tableau[0];
      for(let i = 0; i < 10; i++){
          if(tableau[i] <= min){
              min = tableau[i];
          }
      }

      let max = tableau[0];
      for(let i = 0; i < 10; i++){
          if(tableau[i] >= max){
              max = tableau[i];
          }
      }
      
      let add = 0;
      for(let i = 0; i < 10; i++){
          
              add = add+tableau[i];
          }
      
    
      
      

    document.getElementById("run").addEventListener("click", () => {

        let cellules_tableau = document.getElementsByTagName('td'); 
        //remplir les cellules 
        
        for(let i = 0; i < 10; i++){
            cellules_tableau[i].textContent = tableau[i];
        }   
        //inserer le minimum 
        document.getElementById('min').textContent = min;
        //inserer maximum
        document.getElementById('max').textContent = max;
        //inserer addition
        document.getElementById('sum').textContent = add;
        //inserer moyenne
        document.getElementById('average').textContent = add/10;


    });
})();
