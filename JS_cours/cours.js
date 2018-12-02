function Cours(nom) {
    0
    this.nom = nom;
    this.points = [];
}

Cours.prototype.ajouterPoints = function(points) {
    this.points.push(points);
};


Cours.prototype.results = {
    erreur: 0,
    message_erreur: "",
    resultat: 0
}


Cours.prototype.moyenne = function() {
    var somme = 0;
    var nb_points = this.points.length;

    if (nb_points > 0) {
        for (var i = 0; i < nb_points ; i++) {
        	somme += this.points[i];
        }
        this.results.erreur = 0;
        this.results.message_erreur = "";
        this.results.resultat = somme / this.points.length;
    }else{
    	this.results.erreur = 1;
    	this.results.message_erreur = "";
    	this.results.resultat = 0; 
    }
    return this.results;
};