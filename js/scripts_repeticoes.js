//ESTRUTURA DE REPETIÇAO
const divFor = document.querySelector('#div-for')

for( i = 0; i < 10; i++){
    divFor.innerHTML += `${i + 1} - Amor <br>`
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
        divFrase.innerHTML += `${i + 1} - ${frase} <br>`
    }
})

//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'celular', 'camisa do Mengão', 'Doleira', 'Tenis Adidas']

console.log(presentes[2])

presentes [3] = 'Relógio'

const divArray = document.querySelector('#div-array')

for(i =0; i < 5;i++){
    console.log(presentes[i])
    divArray.innerHTML +=  `${presentes[i]} <br>`
}

//FOR IN
const divForIn = document.querySelector('#div-forin')

for(let posicao in presentes){
    divForIn.innerHTML += `${presentes[posicao]} <br>`
    
}
//FOR OF 
const divForOf = document.querySelector('#div-forof')

for(let elemento of presentes){
    divForOf.innerHTML += `${elemento} <br>`
}

//FOREACH
const divForeach = document.querySelector('#div-foreach')

presentes.forEach((elemento, posicao)=>{
    divForeach.innerHTML += `${posicao} - ${elemento} <br>`
})

//COLEÇÃO DE OBJETOS LITERAIS ARRAY
const pessoas = [
    {nome: 'Maria Flor', idade : 25, renda:8500},
    {nome: 'Joerdson Souza', idade : 75, renda:5000},
    {nome: 'Taoca', idade : 28, renda:500},
    {nome: 'Chicó', idade : 26, renda:100},
    {nome: 'João Grilo', idade : 32, renda:80},
       
]
//LISTANDO OBJETO LITERAL PELO FOR 
const divListaObjFor = document.querySelector('#div-listado-for')

for(let indice in pessoas){
    divListaObjForIn.innerHTML += `${indice} - ${pessoas [indice].nome}, ${pessoas [indice].idade}, R$ ${pessoas [indice].renda.toFixed(2).replace('.',',')} <br>`
}

//LISTANDO OBJETO LITERAL PELO FOR/OF
const divListaObjForOf = document.querySelector
('#div-listaobjt-forof')

let contForOf = 0

for (let elem of pessoas){
    contForOf++

    divListaObjForOf.innerHTML += `${contForOf} - ${elem.nome}, ${elem.idade}, R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
}

//LISTANDO OBJETO LITERAL PELO FOREACH
const divListaObjForEach = document.querySelector
('#div-lista-foreach')

pessoas.forEach((elem, i)=>{
    divListaObjForEach.innerHTML += `${i + 1}, ${elem.nome}, ${elem.idade} R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
})