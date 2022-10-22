//Código del cuadrado
console.group ("Cuadrados");
const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
    }

function areaCuadrado(lado) {
    return lado * lado;
    }

console.groupEnd();



//Código del triángulo
console.group ("Triangulos");
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;

console.log (
    "Los lados del triángulo miden: "
     + lado1 
     + "cm, " 
     + lado2 
     + "cm, " 
     + base + "cm"
);

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();



//código del círculo
console.group("Círculos");

function diametroCirculo (radio){
    return radio * 2;
}

const Pi = Math.PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}

function areaCirculo (radio) {
    return (radio * radio * Pi);
}

console.groupEnd();

//Código triángulo isósceles
function alturaTriangulo (a,b,c){
    if (a===b && b===c){
        console.log("No es un triángulo isósceles");
    } else {
        if (a!=b && b!=c && a!=c) {
            console.log("No es un triángulo isósceles");
            } else {
                if (a===b){
                    const base = (c/2);
                    return (Math.sqrt((a*a)-(base*base)));
                } if(a===c){
                    const base = (b/2);
                    return (Math.sqrt((a*a)-(base*base)));
                } else {
                    const base = (a/2);
                    return (Math.sqrt((b*b)-(base*base)));
                }
            }
        }
}

//Interacción con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const inputLado = document.getElementById("InputLadoTriangulo");
    const base = inputBase.value;
    const lado = inputLado.value;
    const perimetro = perimetroTriangulo (lado, lado, base);
    alert(perimetro);
}