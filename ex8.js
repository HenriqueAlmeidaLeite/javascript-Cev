function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]\nVerifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'masculino'
            
            if (idade <= 12){
                img.setAttribute('src', 'HomemCriança.webp')
            } else if (idade > 12 && idade <=30){
                img.setAttribute('src', 'HomemJovem.webp')
            } else if (idade > 30 && idade <= 60){
                img.setAttribute('src', 'HomemdeMeiaIdade.webp')
            } else {
                img.setAttribute('src', 'HomemVelho.jpeg')
            }
        
        } else {
            genero = 'feminino'

            if (idade <= 12){
                img.setAttribute('src', 'MulherCriança.webp')
            } else if (idade > 12 && idade <=30){
                img.setAttribute('src', 'MulherJovem.jpeg')
            } else if (idade > 30 && idade <= 60){
                img.setAttribute('src', 'MulherdeMeiaIdade.jpeg')
            } else {
                img.setAttribute('src', 'MulherVelha.jpeg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos de idade`
        res.appendChild(img)
        
    }
}