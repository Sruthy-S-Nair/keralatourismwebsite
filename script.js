let email = document.getElementById("email");
let error = document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z{2,3}])?$/
    if(regexp.test(email.value)){
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML ="invalid";
        error.style.color = "red";
        return false;
    }
}
 
let mobilenumber = document.getElementById("mobilenumber");
let errorno = document.getElementById("errorno"); 
function mobile()
{
  let regexp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(regexp.test (mobilenumber.value)){
            errorno.innerHTML="valid";
            errorno.style.color="green";
            return true;
        }
        else{
            errorno.innerHTML ="invalid";
            errorno.style.color = "red";
            return false;
        }
}

let password = document.getElementById("pwd");
let errorpwd = document.getElementById("errorpwd"); 
function pwd()
{
   let regexp=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
   if(regexp.test (password.value)){
       errorpwd.innerHTML="valid";
       errorpwd.style.color="green";
    return true;
    }
    else{
      errorpwd.innerHTML ="invalid";
      errorpwd.style.color = "red";
    return false;
    }
}
