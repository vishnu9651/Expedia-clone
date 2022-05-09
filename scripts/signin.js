 //for password eye
 const togglePassword = document.querySelector('#togglePassword');
 const password = document.querySelector('#id_password');

 togglePassword.addEventListener('click', function (e) {
     // toggle the type attribute
     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
     password.setAttribute('type', type);
     // toggle the eye slash icon
     this.classList.toggle('fa-eye-slash');
 });
//eye end


//for sigin
let userDetails = JSON.parse(localStorage.getItem("userDetails"))
console.log(userDetails)
let incorrectDiv = document.getElementById("incorrect_match")
let  signinFunction = () =>
{
 console.log("in")
 let email = document.getElementById("email").value 
 let Passwoord = document.getElementById("id_password").value 
 console.log(email)
 let flag = false;
 let loginUser = []
 for(var i=0;i<userDetails.length;i++)
 {
     if(email === userDetails[i].Email && Passwoord === userDetails[i].Password)
     {
         flag = true
         loginUser.push(userDetails[i].Name)
         loginUser.push(userDetails[i].Email)
     }
 }
 if(flag === true)
 {
    incorrectDiv.style.display = "none"
    
     alert("login successful")
     
     window.location.href="homepage.html"
 }
 else{
    //  alert("login failed")
    incorrectDiv.style.width="100%"
    incorrectDiv.style.padding="15px 0px 15px 10px"
    incorrectDiv.style.borderRadius="10px"
    incorrectDiv.style.marginBottom="20px"
    incorrectDiv.style.fontSize="15px"
    incorrectDiv.style.border=" 1px solid gray"
    incorrectDiv.style.color="white"
    incorrectDiv.style.background="#ca2e2b"

    incorrectDiv.innerText = "Email and password don't match. Try again."
 }
 localStorage.setItem("loginUser",JSON.stringify(loginUser))
 console.log(loginUser)
 
}