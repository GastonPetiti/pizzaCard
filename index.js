const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const container = document.querySelector('#container')
const form = document.getElementById('form')
const inputNumber = document.querySelector('#number-input')
const btnSubmit = document.querySelector('#btn-submit')
const pizzaContainer = document.querySelector('#pizza-container')
const error = document.getElementById('error')

/*const localPizza = (pizza)=>{
  localStorage.setItem('ultimaPizza',JSON.stringify(pizza))
};

const ultimaPizza = localStorage.getItem('ultimaPizza')

const recuperLocalPizza = ()=>{
  if (ultimaPizza){

  }
}*/


//funcion para buscar la pizza con el id ingresado
const buscarPizza = (e)=>{
  e.preventDefault()
  const pizza = pizzas.find((pizza) => pizza.id == inputNumber.value)

  if(inputNumber.value == ""){
    pizzaContainer.innerHTML = ""
    error.style.display = "flex"
    const textError = error.textContent = `No se ingreso ningún número. Tenes que ingresar un número`

    const sessionError = sessionStorage.setItem('error',JSON.stringify(textError))
    sessionStorage.getItem('error',JSON.parse(sessionStorage.getItem(sessionError)))
    
    return    
  }

  
  if(pizza){
   const cardPizza = pizzaContainer.innerHTML=`<div id="card-pizza">
    <h2>${pizza.nombre}</h2>
    <img src=${pizza.imagen} alt="${pizza.name}" class="img-container"/>
    <p>$${pizza.precio}</p>
    </div> `
    inputNumber.value=""
    error.style.display ="none"

    const localPizza = localStorage.setItem("pizza", JSON.stringify(pizza))
  }
  
  if(!pizza){
    pizzaContainer.innerHTML = ""
    error.style.display = "flex"
    error.classList.add('alert-msj')
    const textError = error.textContent = `No hay una pizza con el número ingresado`
    inputNumber.value=""

    const sessionError = sessionStorage.setItem('error',JSON.stringify(textError))
    JSON.parse(sessionStorage.getItem(sessionError))

    return
  }
}

//funcion para traer la pizza del localStorage

const pizzaStorage = () => {
  const ultimaPizza = JSON.parse(localStorage.getItem("pizza"))

  if(ultimaPizza){
    pizzaContainer.innerHTML=`<div id="card-pizza">
    <h2>${ultimaPizza.nombre}</h2>
    <img src=${ultimaPizza.imagen} alt="${ultimaPizza.name}" class="img-container"/>
    <p>$${ultimaPizza.precio}</p>
    </div> `
    inputNumber.value=""
    error.style.display ="none"
  } else{
    pizzaContainer.innerHTML = ""
  }
}



//funcion inicializadora
function init () {
  document.addEventListener("DOMContentLoaded",pizzaStorage)
  form.addEventListener('submit', buscarPizza)
}

init()