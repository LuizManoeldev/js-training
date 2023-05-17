// Questao 1
const q1 = (a, b) => {
    console.log(a + b) // soma
    console.log(a - b) // sub
    console.log(a / b) // div
    console.log(a * b) // mult
}

// Questão 2
const q2 = (l1, l2, l3) => {
    if(l1 == l2 && l1 == l3 && l2 == l3){
        console.log("Equilatero")
        return   
    }if (l1 == l2 || l1 == l3 || l2 == l3){
        console.log("Isósceles") 
    } else {
        console.log("Escaleno")
    }
}

// Questao 3
const q3 = (base, expoente) => console.log(base ** expoente)

// Questao 4
const q4 = (dividendo, divisor) => {
    console.log(`Resultado = ${Math.round(dividendo / divisor)}`)
    console.log(`Resto = ${dividendo % divisor}`)
}

// Questao 5
const q5 = (valor) => {
    valor2 = valor.split(".")
    console.log(valor2)
    console.log(`R$0,${valor2[1].substring(0,2)}`)
}

// Questao 6
const param = { capital: 1000, taxa: 0.04, tempo: 12}

jurosSimples = (param) => {
    let juros = (param.capital * param.taxa * param.tempo)
    console.log(`Simples = ${juros + param.capital}`)
}
jurosComposto = (param) => {
    let juros = param.capital * ((1 + param.taxa)**param.tempo)
    console.log(`Composto =${Math.round(juros)}`)
    }

//jurosSimples(param)
//jurosComposto(param)

// Questao 7
//Muito grande

// Questao 8
const pontuacoes = [10, 8, 20, 22, 15, 2, 9, 50, 60]

function contagem(pontuacoes) {
    let qtdQuebraDeRecords = 0
    let piorPartida = 0
    let maiorPontuacao = pontuacoes[0]
    let menor = Math.min(...pontuacoes)

    for (let i = 1; i < pontuacoes.length; i++) {       
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }    
        
        if(pontuacoes[i] == menor) {
            piorPartida+= i
        }
           
    }       
    return `Quebras de maiorPontuacao Pontuação = ${qtdQuebraDeRecords}\nPartida com Menor Pontuação = ${piorPartida}`     
}
//console.log(contagem(pontuacoes))



// Questao 10
function divisivelPor3(valor) {
    let resultadoDivisao = valor % 3
    if (resultadoDivisao == 0){
        return true
    } else {
        return false
    }
}   

//console.log(divisivelPor3(10))

// Questao 11
function calcularAnoBissexto(ano) {
    if (ano <= 0){
        return false
    } else if (ano % 4 == 0){
        return true
    } else if(ano % 400 == 0){
        return true
    } else if (ano % 100 == 0){
        return false
    }else {return false}
}
//console.log(calcularAnoBissexto(2020))
//console.log(calcularAnoBissexto(2021))    

function Fatorial(numero){
    let resultadoFinal = numero
    let num = numero
    for (let i = 1; i < numero; i++) {
        num--
        resultadoFinal = resultadoFinal * num
    }
    console.log(resultadoFinal)
}
//Fatorial(7)

// Questao 19
function conta(produto, qtd){
    let valor = 0
    switch (produto) {
        case 100:
            valor = 3
            break;
        case 200:
            valor = 4
            break;
        case 300:
            valor = 5.50
            break;
        case 400:
            valor = 7.50
            break;
        case 500:
            valor = 3.50
            break;
        case 600:
            valor = 2.80
            break;
        default:
            valor = 0
            break;
    }
    console.log(`O total da sua conta foi R$${valor * qtd}`)
}


//conta(100,10)

//Questao 40
function conceito(nota) {
    let conceito = ""
    if(nota <= 10 && nota >= 9){
        conceito = "A"
    }else if(nota >= 7 && nota < 9){
        conceito = "B"
    }else if(nota >=5 && nota < 7){
        conceito = "C"
    }else if(nota >= 0 && nota < 5){
        conceito = "D"
    }else{conceito = "Invalido"}

    return conceito
}

//console.log(conceito(9))
//console.log(conceito(8))
//console.log(conceito(90))

