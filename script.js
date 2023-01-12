//========== SansAccepeter==========
let valider= document.getElementById("sansAccepter");
let gris=document.getElementById("gris");
let cont=document.getElementById("cont");
valider.addEventListener('click',()=>{
gris.style.display="none";
cont.style.opacity=1;

});
//========== Accepeter ==========
let accepterCookie= document.getElementById("accepter");
accepterCookie.addEventListener('click',()=>{
    cont.style.opacity=1;
    gris.style.display="none";
});
///========== Preference============
let choix=document.getElementById("preference");
let politique=document.getElementById("p2");
choix.addEventListener('click',()=>{
    gris.style.display="none";
    politique.style.display="block";
});
//========paramétres==========
let enregistrer= document.getElementById("b1");
let annuler= document.getElementById("b2");
annuler.addEventListener('click',()=>{
    alert("il faut choisir vos préférences pour acceder au Site");
}); 
enregistrer.addEventListener('click',()=>{
    cont.style.opacity=1;
    politique.style.display="none";
    
}); 