function contagem(){
    var inicio = Number(document.getElementById('inicio').value)    
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var texto = document.getElementById('texto')

    if (fim == '' || passo == ''){
        window.alert('[ERRO]\nVocê precisa preencher todos os espaços para fazer a contagem')
    }else{
        texto.innerHTML = ''
        if (fim>inicio){
            for (var c = inicio; c <= fim; c+= passo){
                texto.innerHTML += c
                if (c + passo <= fim){
                    texto.innerHTML += ' \u{1F449} '
                }
            }
        } else if (inicio > fim){
            for (var c = inicio; c >= fim; c-= passo){
                texto.innerHTML += c
                if (c - passo >= fim){
                    texto.innerHTML += ' \u{1F449} '
                }
            }
        } else {
            window.alert('[ERRO]\nVocê precisa começar e terminar a contagem com números diferentes')
        }

        
    }
}