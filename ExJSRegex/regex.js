// 1 : Tous les nombres entiers

var regex = /(\d+)/g;
var texte = "Nombre d'enfants 10 et age 24 et 3456445 ";
var r = texte.match(regex);
console.log(r);

// 2 : 2.Tous les nombres

var regex = /\d+\,\d+/g;
var texte = "Nombre d'enfants 10 et age 24,56 et 3456445,78 ";
var r = texte.match(regex);
console.log(r);


// 3 Tous les numéros de téléphone belges (avec / comme séparateur de l'indicatif, pas de séparateur ensuite) : 

var regex = /[0][4][0-9]{2}\/[0-9]{6}/;
var texte = "Numero de tel : 0496/568906 ou 1234/566789 ";
var r = texte.match(regex);
console.log(r);

// 4.Toutes les adresses emails : 
var regex = /[a-z]{1,}\@[a-z]{1,9}\.[a-z]{2,}/i;
var texte = "mon adresse mail : loickremer@gmail.com ";
var r = texte.match(regex);
console.log(r);


// 5.Toutes les adresses web
var regex = /[w]{3}\.[a-z]{1,}\.[a-z]{2,3}/i;
var texte = "mon site : www.coucou.com ";
var r = texte.match(regex);
console.log(r);


// 6. Tous les mots commençant par une majuscule
var regex = /[A-Z]{1}[a-z]{1,}/g
var texte = "Coucou comment Vas tu ";
var r = texte.match(regex);
console.log(r);
