const divFor = document.querySelector('#div-for')

for( i = 0; i < 10; i++){
    divFor.innerHTML += `${i} - Amor <br>`
}

//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> A SOMA DOS NÚMERO É: ${acum}`

    inputNum.value = ''
})

//CONTROLADOR FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt)=>{
    let numRepeti = Number(inputNumRepeticao.value)
    let frase = inputFrase.value

    for(i = 0; i < numRepeti; i++){
        divFrase.innerHTML += `${i} - ${frase} <br>`
    }
})

//COLEÇÂO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa do Mengão', 'Doleira', 'Tenis Adidas']

const divArray = document.querySelector('#div-array')

divArray.innerHTML = presentes [0]

for (i = 0;i < 5; i++){
    divArray.innerHTML += `${presentes[i]} <br>`
}

//FOR IN
const divForin = document.querySelector('#div-forin')

for(let posicao in presentes){
    divArray.innerHTML += 
    }
