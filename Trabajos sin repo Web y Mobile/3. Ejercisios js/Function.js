let num1 = 5;
let num2 = -5;
arreglo = [1,2,3,5,4]
let cadena = "Hola mundo!";
let min = 1;
let max = 100;
let palindromo = "anana"
let numero = 10;

const sumaDosNumeros = (num1, num2) => num1 + num2;
console.log(sumaDosNumeros(num1, num2))

const contarElementos = (arreglo) => arreglo.length;
console.log(contarElementos(arreglo))

const calcularPromedio = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma / arreglo.length;
};
console.log(calcularPromedio(arreglo))

const parimpar = (num1) => {
    while(num1 > 0)
    {
        num1 -= 2;
    }
    if (num1 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};
console.log(parimpar(num1))

const encontrarMaximo = (arreglo) => {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
};
console.log(encontrarMaximo(arreglo))

const encontrarMaximoConMax = (arreglo) => {
    return Math.max(...arreglo);
};
console.log(encontrarMaximoConMax(arreglo))

const convertirAMinusculas = (cadena) => {
    return cadena.toLowerCase();
};
console.log(convertirAMinusculas(cadena))


const invertirCadena = (cadena) => {
    return cadena.split('').reverse().join('');
};
console.log(invertirCadena(cadena))

const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(generarNumeroAleatorio(min, max))

const esPalindromo = (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('');
    return cadena === cadenaInvertida;
};
console.log(esPalindromo(cadena))
console.log(esPalindromo(palindromo))

const generarArregloPares = (numero) => {
    let arregloPares = [];
    for (let i = 0; i <= numero; i += 2) {
        arregloPares.push(i);
    }
    return arregloPares;
};
console.log(generarArregloPares(numero))