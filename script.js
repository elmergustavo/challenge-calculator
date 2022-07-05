const numeros = [...document.querySelectorAll("#btn")]
// const numeros = document.querySelectorAll(".btns div")
// const numeros = document.querySelectorAll("#btn")
box = document.querySelectorAll(".box")


c = console.log

for(let i=0; i < numeros.length; i++){
    numeros[i].addEventListener('click', function(e) {
        // Añadiendo el numero al html
        // let txtenhtml = box.innerHTML;
        // let ultimocaracter = txtenhtml
        // console.log(ultimocaracter)
        // console.log(txtenhtml)
        console.log(e.value)
    })
}

// let txt = `Hola`
// numeros.innerHTML = txt;


// botones.forEach(e =>{
//     e.addEventListener('click', () =>{
//         console_num(e)
//     })
// })

// const console_num = (numero) => {
//     console.log(numero)
// }

// console_num()
