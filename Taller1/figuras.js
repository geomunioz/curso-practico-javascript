//Código del cuadrado
console.group("Cuadrado");

    function perimetroCuadrado(lado){
        return lado * 4;
    } 

    function areaCuadrado(lado){
        return lado * lado;
    }

console.groupEnd();

//Código del triángulo
console.group("Triángulo")

    function perimetroTriangulo(lado1, lado2, base){
        return lado1+lado2+base;
    }
    

    function areaTriangulo(base, altura){
        return (base * altura)/2;
    }
    
console.groupEnd();

console.group("Circulo");
    const pi = Math.PI;
    console.log("PI: "+pi);

    function diametroCirculo(radio){
        return radio * 2;
    }

    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return pi * diametro;
    };


    function areaCirculo(radio){
        return pi * (radio * radio);
    }


console.groupEnd();

//Interaccion con HTML
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}