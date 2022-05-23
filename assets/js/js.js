function hora(){
    var manha = document.querySelector('.manha')
    var tarde = document.querySelector('.tarde')
    var noite = document.querySelector('.noite')

    var corpo = document.getElementsByTagName ('body') [0]
    var txt = document.querySelector ('.cabecalho')

    var hora = new Date ()
    var agora = hora.getHours()
    var agoraM = hora.getMinutes()

    let agoraS = hora.getSeconds()
    

    if (agora >= 1 && agora <=11  ){
        noite.style.display = 'none'
        tarde.style.display = 'none'

        txt.innerText = `Agora é de manhã as ${agora}:${agoraM}:${agoraS}` 
        manha.style.display = 'flex'
        corpo.style.backgroundColor = '#e08200'

    }else if (agora >=12 && agora <=18 ){
        noite.style.display = 'none'
        manha.style.display = 'none'

        txt.innerText = `Agora é de tarde as ${agora} : ${agoraM} : ${agoraS}`
        tarde.style.display = 'flex' 
       
    }else{
        tarde.style.display = 'none'
        manha.style.display = 'none'

        txt.innerHTML = `Agora é de noite as ${agora}:${agoraM}:${agoraS}`
        noite.style.display = 'flex'
        corpo.style.backgroundColor = '#00003c'
    }
    
}

function start(){
    setInterval (hora,1000)
}

