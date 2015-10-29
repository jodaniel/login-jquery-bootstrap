$(document).ready(function(){
    $('#login').hide();
    $('#mostrar').click(function(){
        $("#welc").hide();
        $("#mostrar").hide();
        $('#login').show();
    });
    
    $("#signin").click(function() {
        $.ajax({
            url: 'https://login-final-jodaniel.c9.io/login',
            method: 'GET',
            datatype: 'json',
            data: {user:$("#user").val(), pass:$("#pass").val()},
            success: function(data){
                if (data.status == 'ok'){
                    alert("Exito");}
                else{
                    alert("Error en los datos");}
            }
        
        });  
        return false;
    });
    
});