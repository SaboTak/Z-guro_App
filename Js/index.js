
 /*Funcion de Capturar, Almacenar datos y Limpiar campos*/
 $(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var sintomas = document.getElementById("sintomas").value;
        var eps = document.getElementById("eps").value;
        /*Guardando los datos en el LocalStorage*/
        sessionStorage.setItem("Sintomas", sintomas);
        sessionStorage.setItem("Eps", eps);

    });   


    /* 
    Funcion Cargar y Mostrar datos
$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        /*Obtener datos almacenados
        var sintomas = sessionStorage.getItem("Sintomas");
        var eps = sessionStorage.getItem("Eps");

    });   
    }   );
    */