/* 
  Seleccionar elementos HTML desde JS
  Existen diversos metodos para obtener la referencia de elementos HTML desde JavaScript. No obstante, las mas extendidas y utilizadas son:

   - document.querySelector(SELECTOR) ==> Obtiene UN UNICO ELEMENTO HTML que cumpla con el selector dado. Si existen multiples elementos que cumplen con el selector, obtiene el primero.

   - document.querySelectorAll(SELECTOR) ===> Obtiene TODOS LOS ELEMENTOS HTML que cumplen con el selector dado. Devuelve como resultado un NODE LIST (una especie de array) con todos los elementos del selector.
*/

// Obtenemos la referencia al elemento LI que queremos eliminar
const liRefElement = document.querySelector('li')

// A partir de esa referencia, llamamos al metodo remove(), el cual se encarga de eliminar el elemento HTML de dicha referencia ( en este caso, el elemento LI )
liRefElement.remove()

const spanRefElement = document.querySelector("span")

spanRefElement.remove()

const postlist = document.querySelectorAll("article")
const lastPostRefElement = postlist[ postlist.length - 1 ]

lastPostRefElement.remove()

const titlesRefList = document.querySelectorAll("main .posts h3") // NodeList !== Array
titlesRefList.forEach(titleRef => titleRef.remove())