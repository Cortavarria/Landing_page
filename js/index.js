// variables que alojan los elementos HTML
const carroComprasMod = document.getElementById("carro-compras")
const close = document.getElementById("close")
const carCompras = document.getElementById("car-compras")
const productos = document.getElementsByClassName('product')
const productosContenedor = document.getElementById('productoContenedor')
const unity = document.getElementById('unity')


//  mostrar carro de compras
carCompras.addEventListener("click", function(){
    carroComprasMod.classList.toggle("hidden")

})
 
// cerrar carro de compras desde el botón X
close.addEventListener("click", function(){
    carroComprasMod.classList.toggle("hidden")

})


// seleccionar producto para comprar
const seleccionProducto = (e) => {
    let contenedorImg = e.target.parentElement

    idProduct = contenedorImg.parentElement
    unity.appendChild(idProduct)


}

productosContenedor.addEventListener('click', seleccionProducto)



// const costoXProducto = () => {

//     for(ele in productos) {
//         console.log(productos[ele].id)
//         if(productos[ele].id === idProduct) {
//             console.log(' si entre')
//         }
        
//     }
// }



