function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var horas = data.getHours();

    msg.innerHTML = `Agora são ${horas} horas;`

    if (horas>6 && horas <12){
        img.src= 'fotoManhã.jpeg'
        document.body.style.background = 'yellow';

    } else if(horas >12 && horas <18){
        img.src = 'fotoTarde.webp';
        document.body.style.background = 'blue';

    } else {
        img.src = 'fotoNoite.webp';
        document.body.style.background = 'purple';
    }
}