(function(){
	
	var LOIC = {
		 donne :{
			init : function (temp,tMax,jour){
				var jour = ["L","M","M","J","V","S","D"];
				var temp = [];
				var tMax = 25;
				for (var i = 0 ; i < jour.length ; i++){
					temp[i] = parseInt(prompt("Quelle est la temperature pour " +jour[i]));
					if (temp[i] > tMax || temp[i] < -5){
						do {
							temp[i] = parseInt(prompt("Quelle est la temperature pour " +jour[i]));
						} while ( temp[i] < -5 || temp[i] > tMax ) ;

					}
				}
			}
		}

	}

}

)()




