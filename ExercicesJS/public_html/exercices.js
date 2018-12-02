//1

/*
 var nbr = parseInt(prompt("écrivez un nombre"));
 
 if (nbr === 0){
 console.log("Le nombre est nul");
 }else{
 console.log("le nombre n'est pas nul");
 }
 */

//2
/*
 var nbr = parseInt(prompt("écrivez un nombre"));
 
 if (nbr < 0){
 console.log("Le nombre est négatif");
 }else{
 console.log("le nombre est positif");
 }
 */

//3
/*
 var nbr = parseInt(prompt("écrivez un nombre"));
 
 if (nbr %2 === 0){
 console.log("le nombre est pair");
 }else{
 console.log("le nombre est impair");
 }
 */

//4
/*
 var nbr = parseInt(prompt("écrivez un nombre"));
 if (nbr === 30 || nbr === 40 || nbr === 50) {
 console.log("Valeur correcte");
 } else {
 console.log("valeur incorrecte");
 }
 */




//5
/*
 var nbr = parseInt(prompt("écrivez un nombre"));
 if ( nbr > 0){
 console.log("Nombre positif");
 }else{
 if(nbr < 0){
 console.log("Nombre négatif");
 }else{
 if (nbr === 0){
 console.log("nombre nul");
 
 }
 }
 }
 */



//6
/*
 var nbrMax = 0;
 
 for ( i = 0 ; i<5 ; i++){
 var nbr = parseInt(prompt("Donnez un nombre"));
 
 if (nbrMax < nbr){
 nbrMax = nbr;
 }
 
 }
 
 console.log("le nombre maximum est" +nbrMax);
 */

//7

/*
 var texte = prompt("Donnez un mot a crypter");
 var code = texte.charCodeAt(0);
 
 switch (true) {
 
 // cas ou de a à z 
 case code => 97 && code <= 122 :
 var caractere = String.fromCharCode(texte + 1);
 console.log(caractere);
 break;
 
 // cas ou de A à Z
 case code => 65 && code <= 90 :
 var caractere = String.fromCharCode(texte + 1);
 console.log(caractere);
 break;
 // cas ou de 0 à 9
 case code => 48 && code <= 56 :
 var caractere = String.fromCharCode(texte + 1);
 console.log(caractere);
 break;
 
 // cas ou 9 pour qu'il devienne 0 
 case code === 57 :
 var caractere = String.fromCharCode(48);
 console.log(caractere);
 break;
 // si ce n'est pas dans ces caractère la , le caractère devient une étoile ( * ) 
 default:
 var caractere = String.fromCharCode(42);
 console.log(caractere);
 break;
 
 }
 */

//8
/*
 
 var nbrArticle = parseInt(prompt("combien avez vous d'articles ?"));
 var PU = prompt("Quel est le PU ? ");
 var HTVANOREMISE = PU * nbrArticle;
 remise = null;
 
 
 switch (remise) {
 case nbrArticle => 100 && nbrArticle < 1000  :
 remise = (HTVANOREMISE / 100) * 10;
 break;
 
 case (nbrArticle => 1000) && (HTVANOREMISE => 1000) :
 remise = (HTVANOREMISE / 100) * 20;
 break;
 case (nbrArticle => 1000) && (HTVANOREMISE < 1000):
 remise = (HTVANOREMISE / 100) * 15;
 default:
 remise = 0;
 }
 
 var HTVAREMISE = HTVANOREMISE + remise;
 var TVA = (21 / 100);
 var montantTva = HTVxAREMISE * TVA;
 var montantTvac = HTVAREMISE + montantTva;
 console.log(TVA);
 console.log(montantTvac);
 console.log(HTVAREMISE);
 console.log(HTVANOREMISE);
 console.log(montantTva);
 
 */


//////////////////////// EXERCICES BOUCLES /////////////////////////////


//1
/*
 table=null;
 
 for( i=0 ; i < 6 ; i++){
 table = i * 2;
 console.log(table);
 }
 */

//2
/*
 nbrUser = parseInt(prompt(" Donnez un entier compris entre 2 et 20"));
 table=null;
 
 for (i=0; i < 10 ; i++){
 table = i * nbrUser;
 console.log(table);
 }
 */


//3
/*
 somme = null;
 
 for(i = 0; i < 1000 ; i++){
 if (i % 3 === 0 ||  i % 5 === 0){
 somme += i;
 }
 }
 console.log(somme);
 */

//4
/*
 var repTable = null;
 var repSomme = null;
 
 for ( i=0; i < 10 ; i++){
 repTable = (i+1)*2;
 repSomme += repTable;
 
 
 }
 
 console.log(repSomme);
 */

//5

/*
 var nbrUser = null;
 var sommeNbr = null; 
 var repSomme = null;
 
 nbrUser = parseInt(prompt(" Donnez un entier compris entre 1 et 100 "));
 
 for (i=0;i < 10 ; i++){
 sommeNbr = (i+1) * nbrUser;
 repSomme += sommeNbr;
 }
 
 console.log(repSomme);
 */

//6
/*
 var min = "";
 var max = null;
 var pair = 0;
 var impair = 0;
 var nbr = "";
 
 min = parseInt(prompt("Quel est le nombre min ?"));
 max = parseInt(prompt("Quel est le nombre max ?"));
 
 nbr=min;
 
 do {
 if (nbr % 2 === 0) {
 pair += nbr;
 } else {
 impair += nbr;
 }
 nbr++;
 } while (nbr <= max);
 
 console.log("pair : " + pair);
 console.log("impair : " + impair);
 
 */

//7

/*
 var min = "";
 var max = "";
 var sommeTrois = null;
 var sommeCinq = null;
 var sommeSept = null;
 var sommeOnze = null;
 min = parseInt(prompt(" Quel est le nombre min ?"));
 max = parseInt(prompt(" Quel est le nombre max ?"));
 nbr = min;
 do {
 
 if (nbr % 3 === 0) {
 sommeTrois += nbr;
 }
 if (nbr % 5 === 0) {
 sommeCinq += nbr;
 }
 if (nbr % 7 === 0) {
 sommeSept += nbr;
 }
 if (nbr % 11 === 0) {
 sommeOnze += nbr;
 }
 nbr++;
 } while (nbr <= max);
 console.log("Somme3 : " + sommeTrois);
 console.log("Somme5 : " + sommeCinq);
 console.log("Somme7 : " + sommeSept);
 console.log("Somme11 : " + sommeOnze);
 */

//8
/*
 var nbrUser = parseInt(prompt("Donner un nombre entre 1 et 100" ));
 rep = 1;
 
 
 for (i=0 ; i < 10 ; i++){
 if (i===0){
 rep=1;
 }else{
 rep *= nbrUser;
 }
 console.log(rep);
 
 }
 */

//9

var lettre = "d";
const code = lettre.charCodeAt(0);

do {

    userLetter = prompt("donnez une lettre");
    unicodeUser = userLetter.charCodeAt(0);


    if (unicodeUser >= 65 && unicodeUser <=  90) {
        unicodeUser = String.fromCharCode(unicodeUser + 32);
        console.log(unicodeUser);


        if (unicodeUser > 100)
        {
            console.log("Trop loin!");
        }
        if (unicodeUser < code) {
            console.log("pas assez loin!");
        }
        if (unicodeUser === code) {
            console.log("Gokkkkk");
        }
    }


    if (unicodeUser > 100)
    {
        console.log("Trop loin!");
    }
    if (unicodeUser < 100) {
        console.log("pas assez loin!");
    }
    if (unicodeUser === code) {
        console.log("Good job bro");
    }

} while (unicodeUser < code || unicodeUser > code);



