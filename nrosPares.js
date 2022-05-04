let numero =prompt("ingrese un numero del 1 al 10 para saber si es primo: ")
alert(primo(numero))
function primo(numero){
    let mensaje='es primo';
if(numero==0||numero==1||numero==4){
    mensaje ="no es primo"}
    for (let x =2;x<numero/2;x++){
        if (numero% x==0){
            mensaje='no es primo'
        }
    }
    return mensaje
}






