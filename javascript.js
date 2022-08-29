
//Boton ACERCADE//
//funcion que
//cambia el STYLE del input a visible
//toma el valor del texto del parrafo con id="text-acercade"


function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    
    //creo una variable
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);

};

function accept_text(valor){
    document.getElementById("text-acercade").innerText=valor;
};

function logMessage(message){
    console.log(message +"<br>");
};

//controla si se presiono un ENTER

let textarea = document.getElementById("edit-acercade")
textarea.addEventListener("keyup", (e) => {
logMessage('key "${e.key}" released [event: keyup]');
if(e.key =="Enter"){
    document.getElementById("edit-acercade").style.display="none"
}
});

//BOTON EXPERIENCIA//

function cambiar_parrafo_experiencia(){
    document.getElementById("edit-experiencia").style.display="block";
    
    //creo una variable
    let textoExpo = document.getElementById("text-experiencia").innerText;
    console.log(textoExpo);

};

function accept_text_experiencia(valor){
    document.getElementById("text-experiencia").innerText=valor;
};

function logMessage(message){
    console.log(message +"<br>");
};

//controla si se presiono un ENTER

let textareaExp = document.getElementById("edit-experiencia")
textareaExp.addEventListener("keyup", (e) => {
logMessage('key "${e.key}" released [event: keyup]');
if(e.key =="Enter"){
    document.getElementById("edit-experiencia").style.display="none"
}
});