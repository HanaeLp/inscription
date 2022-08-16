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
        //var erreur
        ern = document.getElementById("ern");
        erp = document.getElementById("erp");
        erd = document.getElementById("erd");
        erT = document.getElementById("erT");
        erpa = document.getElementById("erpa");
        erv = document.getElementById("erv");
        ere = document.getElementById("ere");
        erC = document.getElementById("erC");
        //pour nom 
        if( nom.length <= 2 || nom == ""){
            ern.innerText = "erreur!!";
        }
        else{
            ern.innerText = "";
        }
        //pour prenom
        if( prenom.length <= 2 || prenom == ""){
            erp.innerText = "erreur!!";
        }else{
            erp.innerText = "";
        }
        //pour date de naissance
        var x = new Date().getFullYear() - new Date(dateN).getFullYear();
        if( x < 18 || dateN == ""){
            erd.innerText = "erreur!!";
        }else{
            erd.innerText = "";
        }
        //pour code postal
        if(code == ""){
            erC.innerText =  "erreur!!";
        }
        //pour tel
        if(tel.length >= 11 || tel.length < 0 || tel == "" ){
            erT.innerText = "erreur!!";
        }else{
            erT.innerText = "";
        }
        //pour passward
        if(pass.length >= 12 || pass == ""){
            erpa.innerText = "erreur!!";
        }else{
            erpa.innerText = "";
        }
        //pour verification pass
        if(verif != pass || verif == ""){
            erv.innerText = "erreur!!";
        }else{
            erv.innerText = "";
        }
        
        //pour email




}