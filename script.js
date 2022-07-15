const numeros = document.querySelectorAll(".btn")
const changePosition = document.querySelector('#change_position')
const box = document.querySelector('.box')
const section1 = document.querySelector('.sec1')
const buttons = document.querySelectorAll('.btn')
const shuffleButton = document.querySelector('#shuffle_buttons')
const clear = document.querySelector('.C')
const result = document.querySelector('.igual')
const btnContainer = document.querySelector('.btn-container')
const historyContainer = document.querySelector('.history')
const rtlButton = document.querySelector('#rtl_button')
let input = ''
const defaultElements = buttons
const shuffleElements = []

const addHistory = (operation, result) => {
    const div = document.createElement('div')
    const operationBox = document.createElement('h5')
    operationBox.append(operation)
    const resultBox = document.createElement('h1')
    resultBox.append(result)
    div.appendChild(operationBox)
    div.appendChild(resultBox)
    historyContainer.append(div)
}

numeros.forEach(element => {
    element.addEventListener('click', e => {
        input+=e.target.dataset.number
        box.innerHTML=input
    })
})

changePosition.addEventListener('click', () => {
    section1.classList.toggle('reverse')
})

result.addEventListener('click', e => {
    try {
        let operation = input
        input=eval(input)
        if(input === Infinity){
            input = 'No puedes dividir por 0'
        }
        addHistory(operation, input)
    } catch (error) {
        console.log(error)
        input = error.name
    }finally {
        box.innerHTML=input
    }
})

clear.addEventListener('click', e => {
    input=''
    box.innerHTML=input
})

const shuffle = ( () => {
    btnContainer.innerHTML = ''
    if (btnContainer.classList.contains('shuffle')) {
        buttons.forEach(element => shuffleElements.push(element))
        shuffleElements.sort(() => 0.5 - Math.random())
        shuffleElements.forEach(element => btnContainer.appendChild(element))

    }else{
        defaultElements.forEach(element => btnContainer.appendChild(element))
    }
    
})

shuffleButton.addEventListener('click', () => {
    btnContainer.classList.toggle('shuffle')
    shuffle()
})

rtlButton.addEventListener('click', () => {
    historyContainer.classList.toggle('rtl')
})
