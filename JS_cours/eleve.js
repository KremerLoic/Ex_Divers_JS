function Eleve(nom, prenom, date_naissance) {

    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.cours = {};

};

Eleve.prototype.results = {
	erreur: 0,
	message_erreur: "",
	resultat: 0 
}


Eleve.prototype.ajouterCours = function(nom_cours) {
    this.cours[nom_cours] = new Cours(nom_cours);
}

Eleve.prototype.ajouterPoints = function(nom_cours, points) {
    this.cours[nom_cours].push(points);
}

Eleve.prototype.moyenneTousLesCours = function (){
	var somme = 0;
	var nb_cours= this.cours.length;
	var nb_points_total = 0;

	if(nb_cours === 0){
		this.results.erreur = 1;
		this.results.message_erreur = "Il n'y a pas de cours ";
		this.results.resultat = 0;
	}else{
		for (var cle in this.cours){
			var moyenne = this.cours[cle].moyenne()
			if(moyenne.erreur === 0){
				somme += moyenne.resultat
				nb_points_total++;
			}
		}
		this.results.erreur = 0;
		this.results.message_erreur = "";
		this.results.resultat = somme / nb_points_total;

	}
	return this.results;

};