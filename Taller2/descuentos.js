const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = ( precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("price");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("priceDiscount");
    const priceDiscountValue = inputDiscount.value;

    const resultDescuento = calcularPrecioConDescuento(priceValue, priceDiscountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+resultDescuento;
}
