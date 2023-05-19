function leerXML(){
    var archivo = document.getElementById("archivoXML").files[0];
    var lector = new FileReader();

    lector.onload = function(e){
        var contenido = e.target.result;
        procesarXML(contenido);
   };
   lector.readAsText();
}
function procesarXML(contenido){
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(contenido, "text/xml");

    var elementos = xmlDoc.getElementByTagName("elemento");
    for(var i = 0; i < elementos.length; i++){
        var elemento = elementos[i];
    }
}