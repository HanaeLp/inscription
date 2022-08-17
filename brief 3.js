//affichage de date
date = document.getElementById("date");
d = new Date();
date.innerText = "La date d'aujourd'hui est "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();

//fonction start des condition et tous
function validation(){
        //variable utiliser
        nom = document.getElementById("nom").value;
        prenom = document.getElementById("prenom").value;
        dateN = document.getElementById("dateN").value;
        code = document.getElementById("code").value;
        pays = document.getElementById("pays").value;
        tel = document.getElementById("tel").value;
        email = document.getElementById("email").value;
        pass = document.getElementById("pass").value;
        verif= document.getElementById("verif").value;
        genre = document.querySelector('input[name = "genre"]:checked');
        contact = document.querySelector('input[name = "contact"]:checked');
        pays = document.getElementById("pays").value;
        //var erreur
        ern = document.getElementById("ern");
        erp = document.getElementById("erp");
        erd = document.getElementById("erd");
        erT = document.getElementById("erT");
        erpa = document.getElementById("erpa");
        erv = document.getElementById("erv");
        ere = document.getElementById("ere");
        erC = document.getElementById("erC");
        erg = document.getElementById("erg");
        erco = document.getElementById("erco");
        ery = document.getElementById("ery");

        //pour nom 
        if(nom.length <= 2 || !isNaN(nom)){
            ern.innerText = "Erreur!!";
            ern.style.color = "red";
        }
        else{
            ern.innerText = "";
        }
        //pour prenom
        if( prenom.length <= 2 || !isNaN(prenom)){
            erp.innerText = "Erreur!!";
            erp.style.color = "red";
        }else{
            erp.innerText = "";
        }
        //pour date de naissance
        var x = new Date().getFullYear() - new Date(dateN).getFullYear();
        if( x < 18 || dateN == ""){
            erd.innerText = "Erreur!!";
            erd.style.color = "red";
        }else{
            erd.innerText = "";
        }
        //pour code postal
        if(code == "" || code.length >=6 ){
            erC.innerText =  "Erreur!!";
            erC.style.color = "red";
        }else{
            erC.innerText =  "";
        }
        //pour tel
        if(tel.length >= 11 || tel.length < 0 || tel == "" ){
            erT.innerText = "Erreur!!";
            erT.style.color = "red";
        }else{
            erT.innerText = "";
        }
        //pour passward
        if(pass.length > 8 || pass.length < 6){
            erpa.innerText = "Erreur!!";
            erpa.style.color = "red";
        }else{
            erpa.innerText = "";
        }
        //pour verification pass
        if(verif != pass || verif == ""){
            erv.innerText = "Erreur!!";
            erv.style.color = "red";
        }else{
            erv.innerText = "";
        }
        //pour email
        var y = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
        var z = y.test(email);
        if(email="" || !z){
            ere.innerText="Erreur!!";
            ere.style.color = "red";
        }else{
            ere.innerText="";
        }
        //pour le genre
        if(genre != null){ 
            erg.innerText="";
        } else {
            erg.innerText="Erreur!!";
            erg.style.color = "red";
        }
        //pour contact
        if(contact != null){ 
            erco.innerText="";
        } else {
            erco.innerText="Erreur!!";
            erco.style.color = "red";
        }
        //pour pays
        if(pays == ""){ 
            ery.innerText="Erreur!!";
            ery.style.color = "red";
        } else {
            ery.innerText="";
        }

}