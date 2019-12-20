/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error , articles)  => {
            articles.forEach((objet)=>{

            console.log(objet)
            lib.getComments(objet.id , (error , arrComments) => {
                objet.comments = arrComments;
            });
            
            console.log(articles);
            });
        });

    });
})();


