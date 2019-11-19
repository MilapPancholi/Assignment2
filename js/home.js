 function validation(){
	var valid=true;
	var name=document.getElementById('name');
	var nameMsg=document.getElementById('nameMsg');
	if(name.value==""){
		nameMsg.innerHTML="* Mandatory";
		valid=false;
	}else{
		nameMsg.innerHTML="";
	}
	
	var addresss=document.getElementById('address');
	var addressMsg=document.getElementById('addressMsg');
	if(address.value==""){
		addressMsg.innerHTML="* Mandatory";
		valid=false;
	}else{
		addressMsg.innerHTML="";
	}
	
	var city=document.getElementById('city');
	var cityMsg=document.getElementById('cityMsg');
	if(city.value==""){
		cityMsg.innerHTML="* Mandatory";
		valid=false;
	}else{
		cityMsg.innerHTML="";
	}

	var email=document.getElementById('email');
	var emailMsg=document.getElementById('emailMsg');
	if(email.value==""){
		emailMsg.innerHTML="* Mandatory";
		valid=false;
	}else{
		emailMsg.innerHTML="";
	}

	var emailRegex=/\S+@\S+\.\S+/i;
	if(emailRegex.test(email.value)){
		emailMsg.innerHTML="";
	}else{
		emailMsg.innerHTML="Invalid email address";
		valid=false;
	}

	var phoneNumber=document.getElementById("contactNumber");
	var phoneMsg=document.getElementById("numberMsg");
	var phoneRegex=/\+\d{1} \(\d{3}\) \d{3}-\d{4}/i;
	if(phoneRegex.test(phoneNumber.value)){
		phoneMsg.innerHTML="";
	}else if(phoneNumber.value==""){
		valid=false;
		phoneMsg.innerHTML="* Mandatory";
	}else{
		valid=false;
		phoneMsg.innerHTML="Invalid Phone Number";
	}
	
	return valid;
}