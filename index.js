window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        document.getElementById("headerPrincipale").style = "height: 10%;";
        document.getElementById("headerLogo").style = "height: 0%;";
    }else{
        document.getElementById("headerPrincipale").style = "height: 20%;";
        document.getElementById("headerLogo").style = "height: 43%;";
    }
    
})