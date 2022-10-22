const precioOriginal = 100;
const descuento = 18;
const coupons = [
    {name:"cupon 1", discount: 15},
    {name:"cupon 2", discount: 25},
    {name:"cupon 3", discount: 30},
];

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento/100)
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}

function couponDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue; //Devuelve el objeto del array que tenga la misma propiedad name que el valor input del usuario
        };

    const userCoupon = coupons.find(isCouponValueValid); 
    //array.find() busca elementos dentro del array que cumplan una condición (coupon.name === couponValue) y devuelve el primer objeto que la cumpla 
    //Se asigna a userCoupon el objeto dentro de coupons que cumpla la condición, o en su caso un valor 'false' cuando no haya coincidencias
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}