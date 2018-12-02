
var jour   = ["L","M","M","J","V","S","D"];   // Déclaration des jours de la semaine
var temp   = [];							  // Déclaration tableau de tempèratures
var jMin   = [];					  		  // Variable de stockage du jour des tempèratures minimum 
var jMax   = [];							  // Variable de stockage du jour des tempèratures maximum
var tMin   = 26;							  // Variable de comparaison des temperatures enregistrées 
var tMax   = -5;							  // Variable de comparaison des temperatures enregistrées
var tTotal = null;         	              	  // Variable de total des tempèratures enregistrées
var tMoy   = null;							  // Variable récupèrant la moyennes des temperatures enregistrées
var star   = '';							  // Variable utilisée pour afficher les étoiles
var barre  = '';							  // Variable utilisée pour afficher les barres		


for (var i = 0 ; i < jour.length ; i++){
	temp[i] = parseInt(prompt("Quelle est la temperature pour " +jour[i]));
	if (temp[i] > 25 || temp[i] < -5){
		do {
			temp[i] = parseInt(prompt("Quelle est la temperature pour " +jour[i]));
		} while ( temp[i] < -5 || temp[i] > 25 ) ;	

	}

// Recherche de la tempèrature MIN
	if ( temp[i] < tMin){
		tMin = temp[i];
	}
	
// Recherche de la  tempèrature MAX
	if ( temp[i] > tMax){
		tMax = temp[i];
	}


// Récuperation des temperatures enregistrées
tTotal+= temp[i]; 
} 

// Récuperation de la moyenne 
tMoy = tTotal / 7;  

console.log("| -5 | 00 | 05 | 10 | 15 | 20 |");

for( var i = 0 ; i < temp.length ; i++){
//RAZ du nombre d'étoiles et de barre pour chaque tour de boucle 
star ='';
barre ='';

// Comparaison des tempèratures afin de remplir le tableau des jours de tempèrature MIN 

if ( temp[i] === tMin){
	jMin.push(jour[i]);
}

// Comparaison des tempèratures afin de remplir le tableau des jours de tempèrature MAX

if ( temp[i] === tMax){
	jMax.push(jour[i]);
}
// Définition du nombre d'étoiles à afficher pour chaque jours ( +5 pour que l'on commence bien à -5 au niveau des temperatures)
// Départ de mon temp[i] à +5 car on commence à -5 degrés 
starCount = parseInt((temp[i]+5)/ 2.5);
for ( var j = 1 ; j <= starCount ; j ++){
	star +='*';
	if ( j % 2 === 0){
		star +=' | '  ;
	}	
}
// Je boucle à partir de la valeur de mon temp[i] jusqu'à 25 pour afficher les barres manquantes
for ( var k = temp[i] ; k <= 25 ; k++ ) {

// Je vérifie bien qu'il ne place les barres que si le modulo de 5 est de 0 et que k > temp[i] ( exemple : si mon temp[i] est à 15 il mettra une barre de trop sinon )
if (  k > temp[i] && k % 5 === 0 ){
	barre +=' |  ' 

}
}
	// Affichage de mes temperatures
	console.log(  jour[i]+' ' +star +barre +' // Temperature = '  +temp[i] +'°'); 
}




// Affichage de mon jour temp min et la temp min 
console.log("Jour(s) de tempèrature minimum : " +jMin +" Tempèrature : " +tMin + '°');
// Affichage de mon jour temp max et la temp max
console.log("Jour(s) de tempèrature maximum : " +jMax +" Tempèrature : " +tMax + '°');
// Affichage de la moyenne de mes temperatures
console.log("Moyenne des tempèratures enregistrées : " +tMoy.toFixed(2) + '°');


