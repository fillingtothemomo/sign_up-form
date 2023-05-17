function validation(){
var name= document.getElementById("name").value;
var password= document.getElementById('password').value;
var cpassword= document.getElementById('confpassword').value;
var age= document.getElementById('age').value;
var city= document.getElementById('city').value;
var email= document.getElementById('email').value;
var mobile= document.getElementById('mobile').value;

var namecheck =/^[A-Za-z]{4,}$/;
var citycheck =/^[A-Za-z]{4,}$/;

var mobilecheck=/^[9][1][0-9]{10}$/;
var emailcheck = /\S+@\S+\.\S+/;
var agecheck=/^[0-9]{1,2}$/;
if(namecheck.test(name)){
    document.getElementById('nameerror').innerHTML=" ";
}
else{
    document.getElementById('nameerror').innerHTML=" ** Name is invalid";
    return false;
}

if(citycheck.test(city)){
    document.getElementById('cityerror').innerHTML=" ";
}
else{
    document.getElementById('cityerror').innerHTML=" ** city is invalid";
    return false;
}
if(mobilecheck.test(mobile)){
    document.getElementById('mobileerror').innerHTML=" ";
}
else{
    document.getElementById('nameerror').innerHTML=" ** number is invalid";
    return false;
}

if(emailcheck.test(email)){
    document.getElementById('emailerror').innerHTML=" ";
}
else{
    document.getElementById('emailerror').innerHTML=" ** email is invalid";
    return false;
}
if(password.match(cpassword)){
    document.getElementById('cpassworderror').innerHTML=" ";
}
else{
    document.getElementById('cpassworderror').innerHTML=" ** password doesnt match";
    return false;
}
if(agecheck.test(age)){
    document.getElementById('ageerror').innerHTML=" ";
}
else{
    document.getElementById('ageerror').innerHTML=" ** age is invalid";
    return false;
}
}