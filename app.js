// RECUPERE LES ELEMENTS DU DOM 
let input = document.querySelector("#convertir");

let resultat = document.querySelector("#resultat");
let uniteConvertir = document.querySelector("#unite");
let uniteResultat = document.querySelector("#resultatUnite");


// let valeurUniteConv = uniteConvertir.value;
// let valeurUniteResult = uniteResultat.value;

function funcResultat(){
    
    // RECUPERE LES UNITES SELECTIONNERS
    let valeurUniteConv = uniteConvertir.value;
    let valeurUniteResult = uniteResultat.value;
    
    // CONVERSION POUR LES METTRE 
    if (valeurUniteConv==="Metre" && valeurUniteResult==="Kilometre"){
        resultat.value = Number(input.value) * 0.01;
        
    }else if(valeurUniteConv==="Metre" && valeurUniteResult==="Centimetre"){
        resultat.value = Number(input.value) * 100;
       
    } else if(valeurUniteConv==="Metre" && valeurUniteConv==="Metre"){
        resultat.value = input.value;
         
    }

    // CONVERSION POUR LES KILOMETRE 
    if (valeurUniteConv==="Kilometre" && valeurUniteResult==="Metre"){
        resultat.value = Number(input.value) * 1000;
        
    }else if(valeurUniteConv==="Kilometre" && valeurUniteResult==="Centimetre"){
        resultat.value = Number(input.value) * 100000;
       
    } else if(valeurUniteConv==="Kilometre" && valeurUniteConv==="Kilometre"){
        resultat.value = input.value;
         
    }

    // CONVERSION POUR LES KILOMETRE 
    if (valeurUniteConv==="Centimetre" && valeurUniteResult==="Metre"){
        resultat.value = Number(input.value) * 0.00001;
        
    }else if(valeurUniteConv==="Centimetre" && valeurUniteResult==="Kilometre"){
        resultat.value = Number(input.value) * 0.01;
       
    } else if(valeurUniteConv==="Centimetre" && valeurUniteConv==="Centimetre"){
        resultat.value = input.value;
         
    }


}

// APPELLE DE LA FONCTION QUAND ON SAISI UN NB ET QU'ON APPUYE SUR ENTRE
input.addEventListener("keyup", funcResultat);
// APPELLE DE LA FONCTION QUAND ON CHANGE D'UNITE POUR LA CONVERSION
uniteConvertir.addEventListener("change",funcResultat);
// APPELLE DE LA FONCTION QUAND ON CHANGE L'UNITE DU RESULTAT
uniteResultat.addEventListener("change",funcResultat);