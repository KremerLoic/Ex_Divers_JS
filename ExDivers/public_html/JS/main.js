//Ex 1 :

/*var longueur = 4;

var perimetre = (longueur *4);

console.log("Le perimetre du carré est egal a :"+perimetre);
*/

//Ex 1bis

/*
var longueur = 4;

var aire = (longueur * longueur)*2;

console.log("l'aire du carré est égale à :" +aire);

*/


//2

/*
var longueur = 4;
var largeur = 8 ;

var perimetre = longueur+largeur+longueur+largeur;

console.log("le perimetre du rectangle est de : " +perimetre);

*/


//2bis

/*
var longueur = 4;
var largeur = 8 ;

var aire = longueur*largeur;

console.log("l'aire du rectangle est de : " +aire);
*/


//3 

/*
var quantite = parseInt(prompt("Combien y'a t'il d'exemplaires ?"));
var pu = parseInt(prompt("Quel est le prix unitaire ?"));
var tauxTva = parseInt(prompt("Quel est le taux de TVA ?"));

var phtva = (quantite * pu);
var tva = (tauxTva / 100) *phtva;
var ptvac = (quantite * pu) + tva;
var remise = (10/100) *phtva;
var tauxremise = phtva - remise;



console.log(" Le prix hors TVA est de "+phtva);
console.log(" Le prix TVA compris est de "+ptvac);
console.log(" Le taux de la TVA est de "+tauxTva );

*/


//4
/*
var montantUtil = parseInt(prompt("Quel est le montant ?"));


var un = parseFloat(montantUtil / 1);
var deux = parseFloat(montantUtil / 2);
var cinq = parseFloat(montantUtil / 5);
var dix = parseFloat(montantUtil / 10);
var vingt = parseFloat(montantUtil / 20);
var cinquante = parseFloat(montantUtil / 50);
var cent = parseFloat(montantUtil / 100);
var deuxcent = parseFloat(montantUtil / 200);
var cinqcent = parseFloat(montantUtil / 500);


console.log(" Il faudra " +un +" piece de 1" );
console.log(" Il faudra " +deux +" piece de 2" );
console.log(" Il faudra " +cinq +" billet de 5 " );
console.log(" Il faudra " +dix +" billet de 10" );
console.log(" Il faudra " +vingt +" billet de 20" );
console.log(" Il faudra " +cinquante +" billet de cinquante" );
console.log(" Il faudra " +cent +" billet de 100" );
console.log(" Il faudra " +deuxcent +" billet de 200" );
console.log(" Il faudra " +cinqcent +" billet de 500" );
*/

//5
/*
var heureUtil = parseInt(prompt("Quelle durée en heure voulez vous convertir en seconde"));
var minuteUtil = parseInt(prompt("Quelle durée en minute voulez vous convertir en seconde"));
var secondeUtil = parseInt(prompt("Quelle durée en seconde voulez vous convertir en seconde (utile ! )"));

var convertHeure = heureUtil * 3600;
var convertMinute = minuteUtil * 60;
var convertFull = convertHeure + convertMinute + secondeUtil; 


console.log(" La durée en seconde est de " + convertFull +" seconde");

*/

//6
/*
var secondeUtil = parseInt(prompt("Quelle durée en seconde voulez vous convertir en heure"));

var convertHeure = secondeUtil / 3600; 
 
 console.log(" La durée en heure est de " + convertHeure +" heure");
*/


//7
/*
var heureUn = parseInt(prompt(" Quelle est l'heure de l'instant 1 ? "));
var minuteUn = parseInt(prompt(" Quelles sont les minutes de l'instant 1 ? "));
var secondeUn = parseInt(prompt(" Quelles sont les secondes de l'instant 1 ? "));
var heureDeux = parseInt(prompt(" Quelle est l'heure de l'instant 2 ? "));
var minuteDeux = parseInt(prompt(" Quelles sont les minutes de l'instant 2 ? "));
var secondeDeux = parseInt(prompt(" Quelles sont les secondes de l'instant 2 ? "));


if ( heureUn < heureDeux){
    comptHeure = heureDeux - heureUn;
}else{
    comptHeure = heureUn - heureDeux;
}
if ( minuteUn < minuteDeux){
    comptMinute = minuteDeux - minuteUn;
}else{
    comptMinute = minuteUn - minuteDeux;
}
if ( secondeUn < secondeDeux){
    comptSeconde = secondeDeux - secondeUn;
}else{
    comptSeconde = secondeUn - secondeDeux;
}

console.log(" Le temps écoulé est de : "+ comptHeure +" heure "+comptMinute +" minute et "+comptSeconde +" secondes");
*/

