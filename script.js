const numeros = document.querySelectorAll("#btn")
const numer = [...document.querySelectorAll("#btn")]
const box = document.querySelector(".box")
const igual = document.querySelector(".igual")
const remove = document.querySelector(".delete")
const contain_num = document.querySelector(".numbers")
const history = document.querySelector(".history")
const sec1 = document.querySelector(".sec1")
const btn_container = document.querySelector(".btns")
const shuffleElements = []
botonesdefault = numeros

c = console.log
let nmr = '';

// BOTONES DE CAMBIO DE POSICION Y NUMERO
const switch_pos = document.querySelector("#switch_pos")
const random_num = document.querySelector("#random_num")
const switch_pos_history = document.querySelector("#switch_pos_history")

// CAMBIANDO LOS NUMEROS
const shuffle = ( () => {
    // btn_container.innerHTML = ''
    if (btn_container.classList.contains('shuffle')) {
        numeros.forEach(element => shuffleElements.push(element))
        shuffleElements.sort(() => 0.5 - Math.random())
        shuffleElements.forEach(element => btn_container.appendChild(element))

    }else{
        botonesdefault.forEach(element => btn_container.appendChild(element))
    }
    
})

random_num.addEventListener('click', () => {
    btn_container.classList.toggle('shuffle')
    shuffle()
})



// IMPRIMIENDO LOS NUMEROS EN .box
let txtenhtml = numeros.forEach((a) => {
    a.addEventListener('click', function(e){
        nmr += e.target.dataset.number
        box.innerHTML = nmr
    })
});

// CAMBIANDO DE POSICION SEC1
switch_pos.addEventListener('click',()=>{
    let cond = sec1.hasAttribute("style","flex-direction: row-reverse")
    if(cond === false){
        sec1.setAttribute("style","flex-direction: row-reverse")
        sec1.style.transition = "all 2s ease"
    } else {
        sec1.removeAttribute("style")
    }
})



// CONDICIONANDO LO QUE NO SE PUEDE OPERAR AL PRESIONAR LA TECLA IGUAL
igual.addEventListener('click',()=>{
    try {
        let operation = nmr
        nmr = eval(nmr)

        if(nmr === Infinity){
            nmr = 'No puedes dividir por 0'
        }

        if(nmr === 'SyntaxError'){
            box.innerHTML = "Error en los valores"
        }

        addHistory(operation, nmr)

    } catch (error) {
        console.log(error)
        nmr = error.name
        box.innerHTML = "<p>Error en los valores<p>"
    } finally {
        box.innerHTML=nmr
    }
})


// AÑADIENDO EL NUMERO AL HISTORIAL
const addHistory = (operation, nmr) => {
    const div = document.createElement('div')
    const operationBox = document.createElement('h5')
    operationBox.append(operation)
    operationBox.style.color = "#ff8952"
    // operationBox.style.overflow
    const resultBox = document.createElement('h2')
    resultBox.append(nmr)
    div.appendChild(operationBox)
    div.appendChild(resultBox)
    history.append(div)
}


// HACIENDO QUE LA TECLA C, BORRE LOS NUMEROS
remove.addEventListener('click', e =>{
    nmr=''
    box.innerHTML = nmr
})

// CAMBIANDO LA POSICION DEL HISTORIAL
switch_pos_history.addEventListener('click',()=>{
    let cond = history.hasAttribute("style")
    if(cond === false){
        history.setAttribute("style","align-items: flex-end")
    } else {
        history.removeAttribute("style")
    }
})