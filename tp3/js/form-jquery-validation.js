$(document).ready(function () { //pour chargement de la page
    
        $('#mybtn').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" ); 
    
            if ($('#nom').val() == "" || $('#prenom').val() == "" || $('#date').val() == "" || $('#address').val() == "" || $('#mail').val() == "") {
    
                $('#myModal').modal("show");
            }
            else {
                $(".modal-body").html('<p>Vous êtes née le '+$('#date').val()+', et vous habitez à : </p>  </br> <a href="http://maps.google.com/maps?q='+$('#address').val()+'"><img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#address').val()+'&markers='+$('#address').val()+'&size=800x400&zoom=13"/> </br> '+$('#address').val()+' </a>');
                $(".modal-title").text("Bienvenue "+$("#nom").val());
                $('#myModal').modal("show");
    
            }
    
        });
    })
