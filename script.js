document.querySelector("#menu button").onclick = function() {
        this.nextElementSibling.classList.toggle("visible");


        /*
        
        "this" fait réf au bouton en lui-même, car on se trouve dans une fonction (ou méthode) qui "lui apprtient".

        "nextElementSibling" : propriété de tous les éléments HTML, désignant l'éventuel élément suivant(dans le même parent)

        "classList.toggle()" : permet d'appliquer automatiquement classList.add() ou classList.remove() selon le cas - basculement entre pr
         
        
        */
}