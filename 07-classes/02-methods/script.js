/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
        
    
    class person {

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
          }

          sayHello(firstname, lastname){
              return "hello "+this.firstname+this.lastname+"!";
          }
        }
        
        document.getElementById("run").addEventListener("click", () => {
            
         const nom = new person("Simon "," Du Jardin");
         console.log(nom.sayHello());
            

                  
            });
        

    
    


})();
