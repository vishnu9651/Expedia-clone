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



 // password strength js start
 let timeout;
 let strengthBadge = document.getElementById('StrengthDisp')
 let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
 let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
 function StrengthChecker(PasswordParameter) {
     // We then change the badge's color and text based on the password strength

     if (strongPassword.test(PasswordParameter)) {
         strengthBadge.style.backgroundColor = "green"
         strengthBadge.textContent = 'Strong'
     } else if (mediumPassword.test(PasswordParameter)) {
         strengthBadge.style.backgroundColor = 'blue'
         strengthBadge.textContent = 'Medium'
     } else {
         strengthBadge.style.backgroundColor = 'red'
         strengthBadge.textContent = 'Weak'
     }
 }

 // Adding an input event listener when a user types to the  password input 

 password.addEventListener("input", () => {

     //The badge is hidden by default, so we show it

     strengthBadge.style.display = 'block'
     clearTimeout(timeout);

     //We then call the StrengChecker function as a callback then pass the typed password to it

     timeout = setTimeout(() => StrengthChecker(password.value), 500);

     //Incase a user clears the text, the badge is hidden again

     if (password.value.length !== 0) {
         strengthBadge.style.display != 'block'
     } else {
         strengthBadge.style.display = 'none'
     }
 });

 // password strength js end





 let userArr = JSON.parse(localStorage.getItem("userDetails")) ||  []
let CreatAccountFunction = (msg, myYes) => {
    let email = document.getElementById("email").value
    let Name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let passwoord = document.getElementById("id_password").value


    if (email == "" ||  Name == "" || surname == "" ||  passwoord == "") {
        // console.log("hii")
        alert("Please Fill all the Details!!")
    }
    else {
        var confirmBox = $("#confirm");
        confirmBox.find(".message").text(msg);
        confirmBox.find(".yes").unbind().click(function () {
            confirmBox.hide();

            window.location.href = "welcom.html"

        });
        confirmBox.find(".yes").click(myYes);
        confirmBox.show();
    }








    let userObj =
    {
        Email: email,
        Name: Name,
        Surname: surname,
        Password: passwoord
    }
    userArr.push(userObj)
    console.log(userObj)
    localStorage.setItem("userDetails", JSON.stringify(userArr))


}