
//2.1.6 Ex du powerpoint ! 

/*
var LOIC = {
	MATH:{
		addition : function (a,b) {
			
			var somme = a + b;
			return somme;
		},
		soustraction : function (a,b){
			
			var sous = a-b; 
			return sous;
		},
		division : function (a,b){
			
			var div = a/b;
			return div;
		},
		multiplication : function  (a,b){
			
			var mult = a*b;
			return mult;
		}
	}
}


fail=0;
win=0;
do{
nbr1 = parseInt(prompt("Quel est le premier chiffre ? "));
nbr2 = parseInt(prompt("Quel est le deuxieme chiffre ? "));
method = prompt("Quel résultat voulez vous obtenir addition  soustraction  division  multiplication ");

switch(method){
	case "addition" : 
	var result = LOIC.MATH.addition(nbr1,nbr2);
	console.log ("Addition : "+result);
	win++
	break;
	case "soustraction" : 
	var result = LOIC.MATH.soustraction(nbr1,nbr2);
	console.log ("Soustraction : "+result);
	win++
	break;
	case "division" : 
	var result = LOIC.MATH.division(nbr1,nbr2);
	console.log ("Division: "+result);
	win++
	break;
	case "multiplication" : 
	var result = LOIC.MATH.multiplication(nbr1,nbr2);
	console.log ("Multiplication : "+result);
	win++
	break;
	default:
	fail++
	console.log("Opérateur non existant, essai numèro : " +fail);


	
}


}while ((fail < 3)  && (win === 0)   );


*/


/*1. Écrire le sous-programme (nPermut) qui permute deux données entières.

(function(){
	var LOIC = {
	MATH:{
		npermut : function (a,b) {
			temp = a;
			a = b;
			b = temp;
			
			console.log(a +" " +b)
		}
			
	}

}

	nbre=parseInt(prompt("Valeur 1"));
	nbr=parseInt(prompt("Valeur 2"));

	LOIC.MATH.npermut(nbre,nbr);
	
	


	}
	)()

	*/

/*2. Écrire le sous-programme (nMax) qui calcule la plus grande de deux données
entières.


(function(){

	var LOIC = {
		MATH:{
			nMax : function (a,b){
				if (a > b){
					nMax = a;
				}else{
					nMax = b;
				}

				console.log("le nombre max est " +nMax);

			}
		}
	}

nbr1 = parseInt(prompt("nombre 1"));
nbr2 = parseInt(prompt("nombre Z"));
LOIC.MATH.nMax(nbr1,nbr2);

}



)()
*/




/*3. Écrire le sous-programme (nMax) qui calcule la plus grande de deux données
entières.


(function(){

	var LOIC = {
		MATH:{
			nMin : function (a,b){
				if (a < b){
					nMin = a;
				}else{
					nMin = b;
				}

				console.log("le nombre min est " +nMin);

			}
		}
	}

nbr1 = parseInt(prompt("nombre 1"));
nbr2 = parseInt(prompt("nombre Z"));
LOIC.MATH.nMin(nbr1,nbr2);

}
)()

*/


/* Écrire le sous-programme (lireNote) qui lit au clavier un nombre entier qui doit être
compris entre –1 et 20. La procédure ou fonction recommence la lecture jusqu’à ce
que l’entier entré soit correct. */

/*


(function(){

var LOIC = {
	MATH:{
		lireNote : function (a){
			do{
				a = parseInt(prompt("Entrez un nombre entre -1 et 20"));
			}while ( a <= -1 || a > 20 );

		}
	}
}
var nbr=0;
LOIC.MATH.lireNote(nbr);


}
)()

*/



/*Même question que 4, mais le sous-programme pose la question 3 fois au plus, si
au bout des trois essais l’entier entré n’est pas correct, le sous-programme met fin
au programme.

(function(){

var nbr=0;
var cpt = 0;

var LOIC = {
	MATH:{
		lireNote : function (a){
			do{
				cpt++
				console.log(cpt);
				a = parseInt(prompt("Entrez un nombre entre -1 et 20"));
				 
			}while ( (a < -1 || a > 20 ) && ( cpt < 3 ));

		}
	}
}


LOIC.MATH.lireNote(nbr);


}
)()
*/


/*1. Écrire la procédure (init) qui initialise un tableau à une dimension d’entiers avec une valeur donnée. 
Exemple d’appel : init(t, n, val).

(function(){

	var LOIC = {
		TAB:{
			init : function (t,n,val){
				var t = [];
				var n = parseInt(prompt("Combien de valeurs voulez vous rentrez dans le tableau ? "));
				var val = 0;
				for(i=0; i<n ; i++){
					val = parseInt(prompt("Quelle est la valeur numero " +i));
					t[i] = val;
				}
				console.log(t);
			}

		}

	}



LOIC.TAB.init();

}
)()

*/




/* 2. Écrire la procédure (affiche) qui affiche les éléments d’un tableau à une dimension d’entiers donnés depuis un indice donné jusqu’à un autre indice donné. 
Exemple d’appel : affiche(t, 20, 5, 10).*/


/*

(function(){
	var LOIC = {
		TAB:{
			affiche : function (t,nstart,nend){
				var t = [];
				var n = parseInt(prompt("Combien de valeurs voulez vous rentrez dans le tableau ? "));
				var val = 0;
				for(i=0; i<n ; i++){
					val = parseInt(prompt("Quelle est la valeur numero " +i));
					t[i] = val;

				}
				console.log(t);

				nstart = parseInt(prompt(" A partir de quel indice voulez vous affichez le tableau ? "));
				nend = parseInt(prompt(" Jusqu'à quel indice voulez vous affichez le tableau ? "));
				for ( var key in t){
					if ((key >= nstart) && (key <= nend)){
						console.log(t[key]);
					}
				}
				}

			}
		}
	

	LOIC.TAB.affiche();
}

)()

*/


/* 3. Écrire la procédure (copy) qui recopie un tableau à une dimension d’entiers dans un autre tableau donné. 
Exemple d’appel : copy(dest, orig, n). 

(function(){
	var LOIC = {
		TAB:{
			copy : function (dest,orig,n){
				var dest = [];
				var orig = [];
				var n = parseInt(prompt("Combien de valeurs voulez vous rentrez dans le tableau ? "));
				for(i=0; i<n ; i++){
					val = parseInt(prompt("Quelle est la valeur numero " +i));
					orig[i] = val;

				}
				console.log(orig);

				for ( i = 0 ; i < orig.length ; i++){
					dest[i] = orig[i]
				}
				console.log(dest);

			}
		}
	}
	LOIC.TAB.copy();
}
)()
*/



/* 4.Écrire la fonction (iMax) qui recherche la première position où apparaît le maximum d’un
tableau donné à une dimension d’entiers. Exemple d’appel : i = iMax(t, n). */

/*

(function(){
	var LOIC = {
		TAB:{
			iMax : function(t,n){
				var t = [];
				var n = parseInt(prompt("Combien de valeurs voulez vous rentrez dans le tableau ? "));
				var max = null;
				var pos = null;
				for(i=0; i<n ; i++){
					val = parseInt(prompt("Quelle est la valeur numero " +i));
					t[i] = val;
				}
				for (i = 0 ; i < t.length ; i++){
					if (t[i] > max){
						max = t[i]
						pos = i+1
					}

				}
				console.log(t)
				console.log(" Le max se trouve a la " +pos +" eme position");

			}
		}
	}
	LOIC.TAB.iMax();
}
)()
*/


/* 5. 
5. Écrire la fonction (rechLin) qui détermine si une valeur donnée appartient à un tableau donné à une dimension d’entiers. 
Le tableau n'est pas supposé trié. Si la valeur se trouve dans le tableau, la fonction renvoie sa position, sinon elle renvoie – 1.
 Exemple d’appel : i = rechlin(t, n, 5).


 (function(){
 	var t = [1,4,7,3,8];
 	var LOIC = {
 		TAB : {

 			rechLin : function(nbre){
 				var win = false;
 				for (i = 0 ; i < t.length ; i++){
 					if (nbre === t[i] ){
 						result = i+1;
 						win = true;
 					}
 					if(win===false){
 						result=-1;
 					}

 				}
 			}
 		}

 	}
 	var nbre = parseInt(prompt("Quelle valeur voulez vous trouvez dans le tableau ? "))
 	LOIC.TAB.rechLin(t,nbre);
}
)()
*/