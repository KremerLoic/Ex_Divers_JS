//Ex 1
/*
var tab = [0,1,2,3,4];

for (var key in tab){
	console.log(key + ':' +tab[key]);
}
*/


// Ex 2 

/*
var  userData = [];
var cpt = prompt("Combien de valeurs diffèrentes voulez vous rentrez ? ");

for (i=0 ; i < cpt ; i++ ){
	userData[i] = prompt("Entrez la valeur" +i);


}

console.log(userData);

*/

//Ex 3 
/*
var tab = [1,6576,24,29];
best = tab[1];

for ( i = 0 , max = tab.length ; i < max ; i++ ){
	 if (best < tab[i]){
	 	best = tab[i];
	 }
	}
console.log(best);
*/

//Ex 4
/*
var tab = [7,2,6,3,6,1,6,6,7,7];
var best = tab[1];
var nbrFoisMax = "";
var nbrMax = ""

for ( i = 0 , max = tab.length ; i < max ; i++ ){

	 if (best < tab[i]){
	 	nbrFoisMax=0;
	 	best = tab[i];
	
}	
	if (best == tab[i]){
		nbrFoisMax++;
	}
}
	console.log(best);
	console.log(nbrFoisMax);
	*/

//Ex 5
/*
var tab = [7,2,6,3,6,1,6,6,7,7];
var best = tab[1];
var nbrFoisMax = 0;
var nbrMax = 0;
var position = 0;


for ( i = 0 , max = tab.length ; i < max ; i++ ){

	 if (best < tab[i]){
	 	nbrFoisMax=0;
	 	best = tab[i];
	 	position = i;
	
}	
	if (best === tab[i]){
		nbrFoisMax++;
		
		
	}
}
	console.log(best);
	console.log(nbrFoisMax);
	console.log(position);
	*/
//Ex 6
/*
var tab = [7,2,6,3,6,1,6,6,7,6,7];
var best = tab[1];
var nbrFoisMax = 0;
var nbrMax = 0;
var position = 0;
var positionEnd = 0;


for ( i = 0 , max = tab.length ; i < max ; i++ ){

	 if (best < tab[i]){
	 	nbrFoisMax=0;
	 	best = tab[i];
	 	position = i;
	
}	
	if (best === tab[i]){
		nbrFoisMax++;
		positionEnd = i;
		
		
	}
}
	console.log(best);
	console.log(nbrFoisMax);
	console.log(position);
	console.log(positionEnd);
	*/

//Ex 7 

/*
var tab = [1,2,3,-3,-4,0,0,0];
var positif = 0;
var negatif = 0 ;
var zero = 0 ;

for ( i = 0 , max = tab.length ; i < max ; i++){
	if ( tab[i] > 0 ){
		positif++;
	}else{
		if (tab[i] < 0 ){
			negatif++;
		}else{
			zero++;
		}
	}

}
console.log (positif);
console.log(negatif);
console.log(zero);
*/


// Ex 8

/*  Écrire un algorithme qui calcule, dans un tableau à une dimension d'entiers
initialisé à sa déclaration, la somme des éléments du tableau. L'algorithme affichera
le tableau avant les résultats. */

/*
var tab = [1,3,8];
var somme = 0;
console.log (tab);

for (i = 0, max = tab.length ; i < max ; i++){
	somme += tab[i];
}

console.log (somme);
*/


// Ex 9 

/*
Écrire un algorithme qui calcule la moyenne des valeurs contenues dans un
tableau à une dimension de nombres décimaux ainsi que le nombre de ces valeurs
supérieures ou égales à la moyenne.
*/

// Ex 10
/*
 var tab = [ 1,4,8,5,7];
 var somme = 0;
 var moy = 0;
 var sup = 0;
 var equal = 0


for (i = 0 , max = tab.length ; i < max ;  i ++){
	somme += tab[i];
}

moy = somme / max;

for (j = 0 , max = tab.length ; j < max ; j++){
	if (tab[j] > moy ) {
		sup++;
}else{
	if (tab[j] === moy){
		equal++;
	}
}
}

console.log(" La moyenne est de " +moy);
console.log(" Le nombre valeurs supérieures a la moyenne est de " +sup);
console.log(" Le nombre de valeurs égale à la moyenne est de  " +equal)
*/

// Ex 11
/* 
Soit t un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui affiche successivement et sur des lignes différentes, le premier
élément du tableau, puis les deux premiers, puis les trois premiers et ainsi de suite
jusqu'à la totalité du tableau. L'algorithme affichera le tableau avant les résultats.
*/


// Ex C1 

var tab = [1,2,3,4,5];
var txt="";

for ( i = 0 ; i < tab.length; i++){
     
	
    for ( j = 0; j < i ; j++)
     {
           console.log( txt +tab[j]);
     }
    txt += "   ";	
}



//Ex D1
/*

Écrire un algorithme qui opère un décalage à gauche (shift left) de 1 position des
éléments d'un tableau à une dimension d'entiers initialisé à sa déclaration. Le
tableau sera affiché avant et après le décalage. Le dernier élément du tableau
conserve sa valeur (variante: prend la valeur 0).

*/
/*
var tab = [1,2,3,4];

tab.shift();
tab.push(tab[2]);



console.log(tab);
*/



//D2   !!!!!!!!!!!!!!!!!!!!! Correction a verifier !!!!!!!!!!!!!!!!!!

 /* Modifier l'algorithme de l'exercice précédent pour qu'il opère un décalage à gauche
de n positions (n étant un entier positif). La valeur de n sera lue au clavier et
supposée correcte. */ 
/*
var tab = [1,2,3,4,7];
var n = parseInt(prompt("De combien de positions voulez vous décaler l'élément ? "));

for (i = 0 ; i < n ; i++){
	tab.shift()



}



console.log(tab);
*/	




//D3

/*  Écrire un algorithme qui opère un décalage à droite (shift right) de 1 position des
éléments d'un tableau à une dimension d'entiers initialisé à sa déclaration. Le
tableau sera affiché avant et après le décalage. Le premier élément du tableau
conserve sa valeur (variante: prend la valeur 0). 


var tab = [1,2,3,4,5];

tab.pop();
tab.unshift(tab[0]);


console.log(tab);
*/ 


//D4

 /* Modifier l'algorithme de l'exercice précédent pour qu'il opère un décalage à droite
de n positions (n étant un entier positif). La valeur de n sera lue au clavier et
supposée correcte. */
/*
var tab = [1,2,3,4,5];
var n = parseInt(prompt("De combien de position voulez vous décaler l'élément ?"))

for ( i = 0 ; i < n ; i++ ){
tab.pop();
tab.unshift(tab[0]);
}


console.log(tab);
*/

/*Écrire un algorithme qui recherche dans un tableau à une
dimension d'entiers la position d'une valeur entière lue au clavier. Le tableau sera
initialisé à sa déclaration et affiché. On supposera que les éléments du tableau ne
sont pas triés. */
/*

var tab = [12,18,3,4,5];

var n = parseInt(prompt("De quelle valeur voulez vous trouver la position ? "));

	for ( var key in tab){
	
		if (n === tab[key]){
		
		console.log ( n +" se trouve à la " +key +" eme position");

	}


	}

	*/


 /*Un tableau à une dimension contient des entiers triés en ordre croissant. Écrire un
algorithme qui recherche la position du premier élément du tableau supérieur ou
égal à une valeur entière lue au clavier. Si la valeur est supérieure au dernier
élément du tableau, l'algorithme fournira comme valeur de la position, l'indice du
dernier élément plus 1. 

var tab = [1,8,12,19,24,54];
nbr = prompt(" Pour quelle valeur voulez vous connaitre la position ? ")


for ( var key in tab){

	
	if (nbr === tab[key]){

		console.log ( nbr +" se trouve à la " +key +" eme position")
		break;	

	}else{
		if (nbr != tab[key] && nbr < tab[key]){
			console.log ( nbr +" se trouve à la " +key +" eme position");
			break;
		}else{	
		if (nbr > tab[tab.length-1]){
			console.log( nbr +" se trouve à la" +tab.length+"eme position");
			break;
		}

			}
		}
		}

		*/

/* Un tableau à une dimension contient des entiers triés en ordre croissant. Écrire un
algorithme qui recherche la position du dernier élément du tableau inférieur ou égal
à une valeur entière lue au clavier. Si la valeur est inférieure au premier élément du
tableau, l'algorithme fournira comme valeur de la position, l'indice du premier
élément moins 1.

*/
/*
var tab = [2,8,12,19,24,54];
nbr = parseInt(prompt(" Pour quelle valeur voulez vous connaitre la position ? "));


for ( var key in tab){
	if (nbr === tab[key]){

		console.log ( nbr +" se trouve à la " +key +" eme position");
		break;	

	}else{
		if (nbr != tab[key] && nbr < tab[key]){
			console.log( nbr +" se trouve à la " +(key-1) +" eme position");
			break;
		}else{	
		if (nbr < tab[0]){
			console.log( nbr +" se trouve à la" +key +"eme position");
			break;
		}

			}
		}
		}
		*/


/* E4. Un tableau à une dimension contient des entiers triés en ordre croissant. Écrire un
algorithme qui calcule le nombre d'entiers du tableau strictement compris entre
deux valeurs lues au clavier.

var tab = [1,2,3,4,5,6,7,8];
var nbr1 = parseInt(prompt("Quelle est la valeur minimum ? "));
var nbr2 = parseInt(prompt("Quelle est la valeur maximum ? "));
var entier = 0;

for (var key in tab){
	if (tab[key] >= nbr1 && tab[key] <= nbr2){
		entier++;
	}
}

console.log ( " Il y a " +entier +"nombres compris entre" +nbr1 +"et" +nbr2);

*/

/*  (insertion) Soit t un tableau à une dimension d'entiers initialisé à sa déclaration. Il
contient N éléments mais seuls les N-1 éléments sont initialisés. De plus, les
éléments sont rangés en ordre croissant. Soit nbr un entier quelconque lu au
clavier. Écrire un algorithme qui insère nbr dans le tableau t de manière à ce que
les éléments de celui-ci restent rangés en ordre croissant. L'algorithme affichera le
tableau avant de lire la valeur du nombre à insérer. Il affichera le tableau après
l'insertion. Exemple : t = [1, 3, 4, 7, 9, 10] et nbr = 5 t = [1, 3, 4, 5, 7, 9, 10]


var t = [1,2,3,4,5,7,8,12]

var nbr = parseInt(prompt("Quelle valeur voulez vous intégrer dans le tableau ?"));


t.push(nbr);
t.sort(function(a,b){
	return a > b
});

console.log(t);
*/


/*G1. Soit t un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui transfère les entiers positifs de t dans un tableau tp, et les entiers
négatifs dans un tableau tn. Les tableaux tp et tn seront affichés. L'algorithme
calculera également le nombre de zéros du tableau t. Le tableau t ne sera parcouru
qu'une seule fois. L'algorithme commencera par afficher le tableau t.

var t = [1,2,0,3,-1,-4,0];
var tp = [];
var tn = [];
var zero = 0;

for (i=0 ; i < t.length ; i++ ){

	if (t[i] > 0 ){
		tp[i] = t[i];
	}else{
		if(t[i] < 0){
			tn[i] = t[i];	
		}else{
			zero++
		}
	}

}

console.log(tp);
console.log(tn);
console.log(zero);
*/



/*G2. Soit u un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui transfère les éléments de u dans un tableau v suivant le principe
suivant : les éléments de rang impair de u sont rangés dans v en ordre inverse en
commençant par la fin de v, et les éléments de rang pair de u sont rangés dans v
dans le même ordre en commençant par le début de v. L'algorithme commencera
par afficher le tableau u. Exemple : u = [-1, 2, 7, 1, 3, 1, -2] et v = [2, 1, 1, -2, 3, 7,
-1]. Écrire au moins deux versions de l'algorithme, l'une parcourant le tableau deux
fois, l'autre ne le parcourant qu'une seule fois.


var u = [-1,2,7,1,3,1,-2];
var v = [];
var i;

for (i = 0 ; i < u.length ; i++){
	if (i % 2 !== 0){
		v.push(u[i]);
	}
}
for (j = u.length-1 ; j >= 0 ; j--){
	if( j % 2 === 0){
		v.push(u[j]);
	}
}

console.log(v);

*/

/*G3. Soit u un tableau à une dimension d'entiers non nuls. Soit v un tableau à une
dimension de même taille que u et dont les éléments sont 0 ou 1. La compression
de u par v est le tableau w à une dimension dont les éléments sont dans l'ordre
ceux du tableau u pour lesquels l'élément correspondant (de même indice) de v est
1. Exemple : u = [1, 2, 3, 4, 5, 6, 7] v = [0, 1, 1, 0, 1, 0, 1] w = [2, 3, 5, 7, 0, 0, 0]
Écrire un algorithme qui réalise une telle compression. Les tableaux u et v seront
initialisés à leur déclaration et affichés avant le tableau w.

var u = [1,2,3,4,5,6,7];
var v = [0,1,1,0,1,0,1];
var w = [];
var zero = 0;

for ( i = 0 ; i < u.length ; i++){
	if (v[i] > 0){
		w.push(u[i]);
	}else{
		if (v[i] === 0 ){
			zero++
			}
		}
	}
	for(j = 0 ; j < zero ; j++){
		w.push(0);
	}


console.log(w);

*/

/*
G4.Soient u et v deux tableaux à une dimension d'entiers et de même taille. Écrire un
algorithme qui, à partir des deux tableaux u et v, construit les tableaux tMin et tMax
vérifiant la propriété suivante : quelle que soit la valeur de l'indice i, tMin[i] est le
minimum de u[i] et v[i], tMax[i] est le maximum de u[i] et v[i] De plus l'algorithme
calculera le nombre d'égalités (u[i] = v[i]). Les deux tableaux u et v seront initialisés
à leur déclaration et affichés avant les résultats.


var u = [-1,3,4,5,6,-7,3];
var v = [-9,3,6,8,19,14,15];
var tMin = [];
var tMax = [];
small = u[0];
max = u[0];
equal = 0;


for (var i = 0 ; i < u.length ; i++){
	if(u[i] === v[i]){
		equal++;
	}
	else if ( u[i] < small ){
		small = u[i];
		for (var j = 0 ; j < v.length ; j++){
		if( v[j] < small){
			small = v[j]
		}
	}
}
}



for (var i = 0 ; i < u.length ; i++){
	if ( u[i] > max  ){
		max = u[i];
		for ( var j = 0 ; j < v.length ; j++ ){
	if (v[j] > max){
		max = v[j];
	}
}
}
}

tMax.push(max);
tMin.push(small);


console.log (tMin);
console.log (tMax);
console.log(equal);
*/


/*J1. Un tableau à une dimension contient des entiers égaux à 0, 1 ou 2. 
Écrire un algorithme qui range les éléments de ce tableau dans un deuxième tableau de manière que les 0 soient rangés en tête, 
puis les 1 puis les 2. Le premier tableau ne sera parcouru qu'une seule fois. 
Il sera initialisé à sa déclaration et affiché.*/


/*
var tab1 = [0,1,0,2,1,2,0];
var tab2 = [];
var cpt = 0;
for(i=0; i < tab1.length; i++){



	if (tab1[i] === 0 ){
		tab2.unshift(tab1[i]);

	}
	if (tab1[i] === 2){
		tab2.push(tab1[i]);
	}
	if (tab1[i] === 1){
		tab2.push(tab1[i]);
	}

}

console.log(tab2);
*/




/*J2. Résoudre le problème précédent sans utiliser de deuxième tableau. Le traitement sera effectué directement dans le premier tableau*/


