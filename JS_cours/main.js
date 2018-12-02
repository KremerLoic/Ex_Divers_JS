
var eleve1 = new Eleve("Loic","Kremer",new Date());

eleve1.ajouterCours("JS");
eleve1.ajouterCours("Php");
eleve1.ajouterCours("MySQL");


eleve1.cours["JS"].ajouterPoints(8);
eleve1.cours["JS"].ajouterPoints(2);
eleve1.cours["Php"].ajouterPoints(8);
eleve1.cours["Php"].ajouterPoints(12);
eleve1.cours["MySQL"].ajouterPoints(13);
eleve1.cours["MySQL"].ajouterPoints(8);



result = eleve1.moyenneTousLesCours();
console.log(result);


for ( var cle in eleve1.cours){
	console.log(eleve1.cours[cle]);
}
