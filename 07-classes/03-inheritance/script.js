/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name, greeting) {
            this.name = name;
            this.greeting = greeting;
        }

            sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;

             }
            }
            class Cat extends Animal {
         
                greeting='miaou';

             
            }

            class Dog extends Animal {
         
                greeting='wouf';

             
            }

      

          


    document.getElementById("run").addEventListener("click", () => {

            const cat1 = new Cat("samuel ");
                  console.log(cat1.sayHello());
            const dog1 = new Dog("fiona");
                  console.log(dog1.sayHello());
});         

})();
