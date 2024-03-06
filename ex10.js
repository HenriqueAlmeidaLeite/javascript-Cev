function calcular(){
    var numero = Number(document.getElementById('numero').value)
    var tabuada1 = document.getElementById('tabuada1')     
    tabuada1.innerHTML = '' 

    if (numero == ''){
        window.alert('[ERRO]\nVocê precisa difitar algum número para ver a tabuada dele')
    } else {
        for (var c = 1; c <= 10; c++){
            tabuada1.innerHTML += `${numero} X ${c} = ${c*numero}<br>`
        } 
        
    }
}