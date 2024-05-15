const carroComprasMod = document.getElementById("carro-compras")
const close = document.getElementById("close")
const carCompras = document.getElementById("car-compras")
const productos = document.getElementsByClassName('product')
const productosContenedor = document.getElementById('productoContenedor')
const unity = document.getElementById('unity')

console.log(productos[0])
 
carCompras.addEventListener("click", function(){
    carroComprasMod.classList.toggle("hidden")
    console.log(carroComprasMod.classList);
})
 
close.addEventListener("click", function(){
    carroComprasMod.classList.toggle("hidden")
    console.log("click");
})



const seleccionProducto = (e) => {
    let contenedorImg = e.target.parentElement

    idProduct = contenedorImg.parentElement
    unity.appendChild(idProduct)
    console.log(idProduct)

}

// const costoXProducto = () => {

//     for(ele in productos) {
//         console.log(productos[ele].id)
//         if(productos[ele].id === idProduct) {
//             console.log(' si entre')
//         }
        
//     }
// }



productosContenedor.addEventListener('click', seleccionProducto)
