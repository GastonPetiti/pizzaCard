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

const localPizza = JSON.stringify('pizza', inputNumber) || '';


//funcion para buscar la pizza con el id ingresado
const buscarPizza = (e)=>{
  e.preventDefault()
  const pizza = pizzas.find((pizza) => pizza.id == inputNumber.value)

  if(inputNumber.value == ""){
    pizzaContainer.innerHTML = ""
    error.style.display = "flex"
    const textError = error.textContent = `No se ingreso ningún número. Tenes que ingresar un número`

    const sessionError = sessionStorage.setItem('error',JSON.stringify(textError))
    JSON.parse(sessionStorage.getItem(sessionError))
    
    return    
  }

  
  if(pizza){
    pizzaContainer.innerHTML=`<div id="card-pizza">
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

//funcion para verificar id que no es valido



//funcion inicializadora
function init () {
  form.addEventListener('submit', buscarPizza)
}

init()