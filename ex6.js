/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

Veremos el primer if ya que es el que se cumple , el segundo es falso 
*/

if (4 > 3 && 6 > 5) {
    console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
    console.log("Esta condición también se cumple?");

}