function nacimiento(usuarioedad){
    const anio=fecha.getFullYear();
let r=anio-usuarioedad
return r
}
function random(min,max){
return Math.random()*(max-min)+min;
}
let usuario=prompt("ingrese su edad: ")
alert("Usted nacio en el año "+ toString(nacimiento(usuario)))


nro=random(1,100)
let nroUsuario;
let intentos;
while (nroUsuario!=nro){
nroUsuario=prompt("adivine el nro secreto: ")
if (nroUsuario<nro){
    alert("el nro secreto es mas bajo")
}else{alert("el nro secreto es mas alto")
}
++intentos
nroUsuario=prompt("adivine el nro secreto: ")
}
alert ("Felicitaciones lo lograste en: "+intentos+" intentos")






