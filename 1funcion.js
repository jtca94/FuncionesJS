function example(a, b, c){
    return a+b+c
};

//Transforma esta declaración de función a una función de expresión. El ejercicio debe
//quedar en un archivo nombrado `1 funcion.js`

const example = function (a, b, c) {
    let resultado = a+b+c;
    return resultado
}
console.log(example(3,4,5))