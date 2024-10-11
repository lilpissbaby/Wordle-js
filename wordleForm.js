function verifForm(){
    campsObligatoris = document.getElementsByClassName("obligatori");
    
    for(i = 0; i < campsObligatoris.length; i++){
        if(campsObligatoris[i].value.trim() == ""){
            alert();
            return false;
        }
    }

    window.location.href = "wordleGame.html";
}