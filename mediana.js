function calcularMediaAritmetica (lista){
  
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = (sumaLista / lista.length);
    return promedioLista;
}

const lista1 = [
    500,
    200,
    100,
    40000000,
];

function compareNumbers(a,b){
    return a - b;
}

lista1.sort(compareNumbers);


const mitadLista1 = parseInt(lista1.length/2);

function esPar(numero){
    if (numero % 2 === 0){ //Módulo de dividir entre 2
        return true;
    }   else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1]; 

    const promedio = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    mediana = promedio;

}   else{
    mediana = lista1[mitadLista1]
}