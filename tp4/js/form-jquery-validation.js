$(document).ready(function () { //pour chargement de la page
    
        $('#mybtn').on("click", function (event) { //ajouter un "listener" à un élément
            event.preventDefault();
            console.log( "click" ); 
    
            if ($('#name').val() == "" || $('#firstname').val() == "" || $('#birth').val() == "" || $('#address').val() == "" || $('#mail').val() == "") {
    
                $('#myModal').modal("show");
            }
            else {
                contactStore.add($('#name').val(), $('#firstname').val(), $('#birth').val(),$('#address').val(),$('#mail').val());
                                // CODE à compléter pour insérer les autres données
                var contactList=contactStore.getList();
                document.querySelector("table tbody").innerHTML ="";
                for(var index in contactList ){
                    console.log(contactList[index].name);
                    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML
                     +
                '<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+$('#birth').val()+'</td><td>'+'<a href="http://maps.google.com/maps?q='+$('#address').val()+'">'+$('#address').val()+'</a>'+'</td><td>'+'<a href="mailto:'+$('#mail').val()+'">'+$('#mail').val()+'</a>'+'</td></tr>';

                  }
    
            }
    
        });
    })

  
$(document).ready(function(){
   $('#name').keyup(function(){
       $("#span1").text($('#name').val().length);
    });
});
   
$(document).ready(function(){
    $('#firstname').keyup(function(){
        $("#span2").text($('#firstname').val().length);
    });
});