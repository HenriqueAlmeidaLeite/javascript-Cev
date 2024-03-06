var valores = []
var cont = -1

function adcnum(){
    let numero = Number(document.getElementById('numero').value)
    let total = document.getElementById('total')

    if (numero < 1 || numero >100 ){
        window.alert('[ERRO]\nO número tem de estar entre 1 e 100')
    } else {
        let option = document.createElement('option')
        option.text = `Valor ${numero} adicionado`
        total.appendChild(option)
        valores.push(numero)
        cont++

    }
}

function finalizar(){
    let adiçoes = document.getElementById('adiçoes')
    adiçoes.innerHTML = `Ao todo, temos ${valores.length} valores cadastrados. <br> `   
    valores.sort(function(a, b) {
        return a - b;
    });
    adiçoes.innerHTML += `O maior número informado foi ${valores[cont]}<br>`
    adiçoes.innerHTML += `O menor número informado foi ${valores[0]}<br>`
    let tot = 0
    for (elementos of valores){
        tot += elementos
    }
    adiçoes.innerHTML += `A soma de todos os valores digitados foi ${tot}<br>`
    let media = tot / (cont + 1)
    adiçoes.innerHTML += `A média de todos os valores digitados é ${media}<br>`

}