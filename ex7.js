function verific(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('numero')
    var idade = ano - Number(nas.value)
    var radsex = document.getElementsByName('radsex')
    var texto1 = document.querySelector('div#texto1')
    var genero = ''
    var img = document.getElementById('imagem')

    if (nas.value > ano){
        window.alert('[ERRO]\nÉ impossível você ter nascido em um ano que ainda não chegou')

    } else {       
        if (radsex[0].checked){
            genero = 'homem'

            if (idade<=12){
                img.src = 'HomemCriança.webp'
            } else if(idade > 12 && idade < 30){
                img.src = 'HomemJovem.webp'
            } else if (idade >= 30 && idade < 60){
                img.src = 'HomemdeMeiaIdade.webp'
            } else {
                img.src = 'HomemVelho.jpeg'
            }
                
        } else {
            genero = 'mulher'
        }
    }

    texto1.innerHTML =`Você tem ${idade} anos de idade e é ${genero}`
}