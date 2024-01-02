function randomk(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1) + min);
} 
function GenererCaptcha(){
    ch="";
    ascii_de_a=97;
    for(let i=0;i<10;i++){
        k=randomk(1,25);
        if(k%2==0){
            caractere=ascii_de_a+Number(k);
            if(caractere==123){
                ch=ch+"Z"
            }else{
                majus_carac=String.fromCharCode(caractere).toUpperCase();
                ch=ch+majus_carac;
            }

        }else
        {
            caractere=ascii_de_a+Number(k);
            ch=ch+String.fromCharCode(caractere); 
        }
    }
    document.getElementById("capt").value=ch; 
}
function nbr_majus(ch){
    sum_majus=0
    for(i=0;i<ch.length;i++){
        if(ch.charAt(i)>="A" && ch.charAt(i)<="Z"){
            sum_majus++
        }
    }
    return sum_majus
}
function Verif(){
    opt=document.getElementById("opt").selectedIndex;
    a1=document.getElementById("a1").checked;
    a2=document.getElementById("a2").checked;
    a3=document.getElementById("a3").checked;
    r1=document.getElementById("r1").checked;
    r2=document.getElementById("r2").checked;
    r3=document.getElementById("r3").checked;
    capt=document.getElementById("capt").value;
    rep=document.getElementById("rep").value;
    if(opt==0){
        alert("Choix de Hotel OBLIGATOIRE s'il vous plait")
    }else if(a1==false && a2==false  && a3==false )
    {
        alert("Evaluer un critère d'ACCEUIL s'il vous plait")
    }else if(r1==false && r2==false  && r3==false )
    {
        alert("Evaluer un critère d'RESTAURANT s'il vous plait")
    }else if(nbr_majus(capt)!=Number(rep))
    {
        alert("Le nombre des lettres majuscules dans la zone Captcha est INCORRECT ")
    }
}
