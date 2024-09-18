const h1 = document.querySelector("h1");
h1.innerText="Productos";
const section = document.querySelector("section");


let arraycards =[];

function card () {
for(let i=1; i<10; i++){
let carta= `<div class="card pt-4 d-flex flex-wrap" style="width: 18px">
<img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top4" alt="Interactiva">
<div class="card-body">
<h5 class="card-title4">Carro ${i}</h5>
<p class="card-text4"> Producto ${i} </p>
</div></div>`;
arraycards.push(carta);
}
document.querySelector("section").innerHTML= arraycards.join('');}

card ()