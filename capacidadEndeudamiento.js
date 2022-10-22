//Capacidad media de endeudamiento

//Capacidad de Deuda = (Ingresos - gastos) * 0.35
//Calcular capacidad de Deuda individual

const capacidadDeDeudadCol = colombia.map(
    function (capacidadDeDeuda) {
        return (capacidadDeDeuda.salary - capacidadDeDeuda.gastos) *0.35;
    }
);

//Obtener el promedio de las CDI
const sumaCapacidadMediaDeDeuda = capacidadDeDeudadCol.reduce(
    function (suma=0, capacidadDeDeuda){
        return suma = suma + capacidadDeDeuda;
    }
);

const promedioDeCapacidadDeDeuda = sumaCapacidadMediaDeDeuda/capacidadDeDeudadCol.length;