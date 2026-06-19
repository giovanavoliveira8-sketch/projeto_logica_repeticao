
function mensagem (){
     console.log('Uma mensagem')
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Brasil vai dar um pau no Haiti')

function somaNumeros(num1, num2){
    return num1 + num2
}

console.log('As soma dos números ', somaNumeros(10, 50))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao (64, 5))

console.log('-------> ARRROW FUCTION <--------')

const msgArrow = () => {
    console.log('Outra mensagem na arrow fuction')
}

msgArrow()

const divisaoNum = (valor1, valor2) => {

    let respostas 

    if ((valor1 > 0) && (valor2 > 0)){
        respostas = valor1/ valor2
    }else{
       respostas = 'NÃO É POSSÍVEL DIVISÃO POR ZERO'
    }

    return respostas
}

console.log(divisaoNum(10,8000))

console.log(Math.random())

console.log('O número sorteado ====> ', parseInt (Math.random() * 100))

setTimeout(()=>{
    console.log('Executou após 5s')
    msgArrow()
}, 5000)

/*let cont = 0

const intervalo = setInterval(()=>{
    cont ++
    console.log(cont, 'Repetição da setInterval')

    if(cont == 5){
        clearInterval(intervalo)
    }

},3000)*/

const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolta = 0, numSorteado = 0, contPar = 0 , contImpar = 0

const Sorteio = setInterval(() => {
    contVolta++

    numSorteado = parseInt(Math.random() * 60)

    console.log(`${contVolta}º número sorteado ${numSorteado}`)

    if (numSorteado % 2 == 0) {
        contPar++
    }else{
        contImpar++
    }

    divNumSorteio.innerHTML += `${contVolta}º número gerado ${numSorteado} - ${numSorteado % 2 == 0 ? 'PAR' : 'ÍMPAR'} <br>`

    if (numSorteado == 6) {
        console.log('-----> SORTEIO ENCERRADO <------')

        divNumSorteio.innerHTML += `------------> SORTEIO ENCERRADO <------- <br> 
        TOTAL DE NÚMEROS GERADOS: ${contVolta} <br>
        TOTAL DE NÚMEROS PAR: ${contPar} <br>
        TOTAL DE NÚMEROS IMPAR: ${contImpar} <br>`

        clearInterval(sorteio)
        contVolta = 0
        numSorteado = 0
    }
}, 2000)

