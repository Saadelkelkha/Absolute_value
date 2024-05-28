function valeur_absolue(){
    var n = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("p")[0].innerHTML = "Valeur absolue:" + Math.abs(n);
    
}