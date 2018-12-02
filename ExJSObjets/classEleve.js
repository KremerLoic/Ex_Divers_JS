


	function Eleve(firstname,lastname,age,level){
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age; 
		this.level = level;
		this.cours = [];
		this.notes = {};
		this.getInfo = "";
	

	this.getInfo = function(){
		present = "Hi my firstname is "+this.firstname +" my lastname is " +this.lastname +" i have " +this.age +" years old and i'm in level "+this.level;
		return present;
	}

	Eleve.prototype.addCours = function(nom_cours){
		this.cours.push(nom_cours);
		this.notes[nom_cours] = [];
		
	},

	Eleve.prototype.addNote = function(nom_cours,note){
		this.notes[nom_cours].push(note);
		
	}



}



var eleve1 = new Eleve("Loic","Kremer",24,2);
console.log(getInfo)

eleve1.addCours("JS");
eleve1.addCours("PHP");
eleve1.addCours("SYMFONY");
eleve1.addNote("JS",2);
eleve1.addNote("JS",12);
eleve1.addNote("PHP",5);
eleve1.addNote("PHP",15);
eleve1.addNote("SYMFONY",18);
eleve1.addNote("SYMFONY",9);





//Calcul de la moyenne de JS

var sumJs = 0; // Variable de somme de mon tableau 
var moyJs = 0; // Variable de calcul pour la moyenne du tableau

for (var i = 0 ; i < eleve1.notes['JS'].length; i++){
	
	sumJs += eleve1.notes['JS'][i];

}

moyJs = sumJs / eleve1.notes['JS'].length;



//Calcul de la moyenne de PHP

var sumPhp = 0; // Variable de somme de mon tableau 
var moyPhp = 0; // Variable de calcul pour la moyenne du tableau

for (var i = 0 ; i < eleve1.notes['PHP'].length; i++){
	
	sumPhp += eleve1.notes['PHP'][i];

}

moyPhp = sumPhp / eleve1.notes['PHP'].length;





//Calcul de la moyenne de SYMFONY


var sumSym = 0; // Variable de somme de mon tableau 
var moySym = 0; // Variable de calcul pour la moyenne du tableau

for (var i = 0 ; i < eleve1.notes['SYMFONY'].length; i++){
	
	sumSym += eleve1.notes['SYMFONY'][i];

}

moySym = sumSym / eleve1.notes['SYMFONY'].length;


console.log("Moyenne de JavaScript : " +moyJs);
console.log("Moyenne de PHP : " +moyPhp);
console.log("Moyenne de SYMFONY : " +moySym);







