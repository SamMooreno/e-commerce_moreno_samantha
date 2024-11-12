class Producto {
    constructor (titulo, detalle, precio, stock, imagen) {
        this.titulo= titulo;
        this.detalle= detalle;
        this.precio= precio;
        this.stock= stock;
        this.imagen= imagen;
    }
}
const auto = new Producto ("Audi", "Sportback 2024", "$609,900.00", 202, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")
let etiquetas=  ` <div>
<h1> Descripción </h1>
<h2> Titulo: ${auto.titulo}</h2>
<p> Detalle: ${auto.detalle}</p>
<p> Precio: ${auto.precio}</p>
<p> Stock: ${auto.stock}</p>
<img src="${auto.imagen}" alt="Imagen del auto widht="150" height="150" />

</div>
`
let main= document.querySelector ("main");
main.innerHTML= etiquetas;