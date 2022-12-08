function gerar(){
    let nivel=document.getElementsByName("opçoes")
    let senhas= document.getElementById("senhas")
    let facil=[]
    let l=[]
    let s=[]
    var itens=["a","1","b","2","c","3","d","4","A","8","B","6","C","9","u","Z"]
    if(nivel[0].checked){
    for(let i=0;i<5;i++){
        s=Math.floor(Math.random()*10)
        l+=itens[s]
        
    }

    senhas.innerHTML=`Sua senha foi gerada com sucesso <br><br>${l}`
    }
    else if(nivel[1].checked){
        for(let i=0;i<7;i++){
            s=Math.floor(Math.random()*10)
            l+=itens[s]
        }
    
        senhas.innerHTML=`Sua senha foi gerada com sucesso <br><br>${l}`
        }
        else if(nivel[2].checked){
            for(let i=0;i<9;i++){
                s=Math.floor(Math.random()*10)
                l+=itens[s]
            }
        
            senhas.innerHTML=`Sua senha foi gerada com sucesso <br><br>${l}`
        }
}