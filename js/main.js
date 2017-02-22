var nombre = $("#name");
var apellido = $("#lastname");
var emailX = $("#input-email");
var password = $("#input-password");
var tipo = $("#select");
var mensajito = $("#mensaje");

function validateForm(){
    
    
    if(nombre.val().length==0 || apellido.val().length==0 || emailX.val().length==0 || password.val().length==0 || tipo.val()==0) {
        
        validateName();
        validateLastname();
        validateEmail();
        validatePassword();
        validateType();
        //mensajito.fadeOut(2000);
        
    } else {
        
        if(nombre.val().length>0 && apellido.val().length>0 && emailX.val().length>0 && password.val().length>0 && tipo.val() !=0){
            
            console.log(mensajito);
            
            mensajito.html("<br><h3 style='color:green'>¡Formulario completado!</h3>");
            //mensajito.fadeIn(2000);
            //if(mensajito.contents().length == 0) {
            
            //}   
            
        } else {
            
            //mensajito.fadeOut(2000);
        }  
    } 
}

function validateName(_evt){
    
    var textoNombre = "Debe ingresar su nombre";
    var textoNumero = "Los números no son válidos";
 
    if(nombre.val() != ""){ 
        
        nombre.val(convertirMayus(nombre.val()));
        
        if(/([0-9])/g.test(nombre.val())){
            mensaje(nombre,textoNumero);
        } else {
            eliminar(nombre);
        }
    } else {
        mensaje(nombre,textoNombre);
    }    
}

function validateLastname(_evt) {
    
    var textoApellido = "Debe ingresar su apellido";
    var textoNumero = "Los números no son válidos";
    
    if(apellido.val() != ""){;
                             
        apellido.val(convertirMayus(apellido.val()));
                             
        if(/([0-9])/g.test(apellido.val())){
            mensaje(apellido,textoNumero)  
        } else {
            eliminar(apellido);
        } 
    } else {
        mensaje(apellido,textoApellido);    
    }
}

function validateEmail(_evt){
    
    var textoEmail = "Verifique su e-mail";

    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(emailX.val())){
        eliminar(emailX); 
    } else {
        if(emailX.val().length >= 0){
            mensaje(emailX,textoEmail);  
        }
    }
}

function validatePassword(_evt) {
    
    var textoPassword = "La contraseña debe tener al menos 6 caracteres";
    
    if(password.val() === "098754" || password.val().length <= 6 || password.val() === "123456" || password.val().toLowerCase() === "password" ) {
        mensaje(password,textoPassword); 
        
    } else {
        eliminar(password);
    }
}

function validateType(_evt) {

    var textoTipo = "Debes seleccionar al menos un tipo de bici";
    
    if(tipo.val() == 0){
          mensaje(tipo,textoTipo);
    } else { 
        if(tipo.val() == "urbana" || tipo.val() == "treking" || tipo.val() == "electrica" || tipo.val() == "estatica"){
           eliminar(tipo);
        }   
    }   
}

function mensaje(elemento,texto){
    
    //El span no existe
    if(elemento.next().length == 0) {
        crearSpan(elemento,texto);
    //El span si existe    
    } else { 
        
        if(elemento.next() == elemento.parent().find('span')){
            elemento.next().append(texto);
            
        } else {
            elemento.next().remove();
            crearSpan(elemento,texto);
        }        
    }
}

function eliminar(elemento){
    
    if(elemento.next() != null) {
        elemento.next().remove();
    }   
}

function convertirMayus(texto){
    
    //MAYUSCULA
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}

function crearSpan(elementoInput,textoInput){
    
    var padre = elementoInput.parent();
    var cajaNegra = $(document.createElement('span')).html(textoInput).appendTo(padre);
}














