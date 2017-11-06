function validation() {
    if (document.getElementById("nom").value=="" || document.getElementById("prenom").value=="" || document.getElementById("dateNaissance").value=="" || document.getElementById("adresse").value=="" || document.getElementById("mail").value=="")
    {   
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "La saisie de tout les champs est obligatoire";

        }
         else if(document.getElementById("nom").value.length <5)
    {
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "Le NOM doit contenir entre 5 et 20 caractère";
    }
    else if(document.getElementById("prenom").value.length <5 || document.getElementById("prenom").value.length >20)
    {
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "Le prenom doit contenir entre 5 et 20 caractère";
    }
    else if(document.getElementById("adresse").value.length <5 || document.getElementById("adresse").value.length >50)
    {
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "Le adresse doit contenir entre 5 et 50 caractère";
    }
    else if(document.getElementById("mail").value.length <5 || document.getElementById("mail").value.length >30)
    {
        document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").innerHTML = "Le mail doit contenir entre 5 et 30 caractère";
    }
   
    else{
        document.getElementById("error").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;

    }
   
    
}
