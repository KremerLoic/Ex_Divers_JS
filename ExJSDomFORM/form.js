var nom = document.getElementById('nom').value;
var prenom = document.getElementById('prenom').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var test_np = /[a-z]{4,}/;
var test_email =  /[a-z]{1,}\@[a-z]{1,9}\.[a-z]{2,}/i;
var test_password = /[a-z]{1,}[0-9]{1}/; 
var recup_input = "";


// Erreur de regex avec le console log.

if (test_np.test(nom)){
	
	recup_input = document.querySelector('#nom');
	recup_input.className = 'success';

}else{
	
	recup_input = document.querySelector('#nom');
	recup_input.className = 'error';

}


if (test_np.test(prenom)){
	
	recup_input = document.querySelector('#prenom');
	recup_input.className = 'success';

}else{
	
	recup_input = document.querySelector('#prenom');
	recup_input.className = 'error';

}

if (test_email.test(email)){
	
	recup_input = document.querySelector('#email');
	recup_input.className = 'success';

}else{
	
	recup_input = document.querySelector('#email');
	recup_input.className = 'error';
}


if (test_password.test(password)){
	
	recup_input = document.querySelector('#password');
	recup_input.className = 'success';
}else{
	
	recup_input = document.querySelector('#password');
	recup_input.className = 'error';
}
