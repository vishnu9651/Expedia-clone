
// import {header} from "../components/header&footer.js"

// document.querySelector("#header").innerHTML= header();


// let loginUser = JSON.parse(localStorage.getItem("loginUser"))

// var arr=[];
// function myalert(){

//     let Name = document.getElementById("firstname").value
// let Surname = document.getElementById("surname").value
// let Email = document.getElementById("email").value 
// let Mobile = document.getElementById("mobile").value


// console.log(Name)

//      if(Name === ""||Surname===""||Email===""||Mobile==="")
//      {
//          alert("Please fill all the Details")
//         // window.location.reload();

//      }
//     else if(loginUser === null)
//      {
//          alert("Please sign in")
//      }
//      else {

      

// // function myfunction(){
    
   
//    var obj={
//     name:document.getElementById("firstname").value,
// surname:document.getElementById("surname").value,
// email:document.getElementById("email").value,
// mobile:document.getElementById("mobile").value

// };

// arr.push(obj)

// localStorage.setItem("detail",JSON.stringify(arr))
// }

//         alert("Congratulations ! Your booking is Sucessfull")
//         window.location.href="./final.html"
//      }
 


// // var arr=[];
// // document.querySelector("button").addEventListener("click",myfunction)
// // function myfunction(){
    
   
// //    var obj={
// //     name:document.getElementById("firstname").value,
// // surname:document.getElementById("surname").value,
// // email:document.getElementById("email").value,
// // mobile:document.getElementById("mobile").value

// // };

// // arr.push(obj)

// // localStorage.setItem("detail",JSON.stringify(arr))
// // }

// var Hname=JSON.parse(localStorage.getItem("name"))

// console.log(Hname)
// var hotelName=document.createElement("h3")
// hotelName.innerText=Hname.name;


// var selectedHotel=JSON.parse(localStorage.getItem("selectedHotel"))
// console.log(selectedHotel)
// var div = document.createElement("div")
// let img=document.createElement("img")
// img.src=selectedHotel.hotelImage
// div.append(img)

// let checkOut=document.createElement("p")
// checkOut.innerText=`Check Out : ${selectedHotel.checkOutDate}`

// let checkIn=document.createElement("p")
// checkIn.innerText=`Check In : ${selectedHotel.checkInDate}`
// let rating=document.createElement("p")
// rating.innerText=`4.6/5 Wonderful (76 reviews)`
// let room=document.createElement("p2")
// room.innerText=`1 Room: Deluxe Room, 2 Twin Beds, Non Smoking, Park View`
// let night=document.createElement("p2")
// night.innerText=`1-night stay`
// console.log(checkOut,checkIn,img)
// document.querySelector("#cartDetails").append(div,hotelName,rating,room,checkIn,checkOut)

// var details=JSON.parse(localStorage.getItem("details"))
// var  pricemain=document.createElement("div")
// let price=document.createElement("p")
// price.innerText=`${details.price}.00`
// var rupya=details.price
// console.log("rupya: "+rupya.length)
// var bag="";
// for(var i=2;i<rupya.length;i++){
//     if(rupya[i]!==","){
//         bag=bag+rupya[i]
        
//     }
    
    
// }
// console.log("bag:"+bag)
// let tax=document.createElement("p")
// tax.innerText=`Rs${Math.floor(Number(bag)*(15/100))}.00`
// console.log("price :"+details.price)
// var total=document.createElement("h4")
// total.innerText=`Rs${Math.floor(Number(bag)*(15/100) + Number(bag))}.00`
// var property=document.createElement("p")
// property.innerText=`Rs${Math.floor(Number(bag)*(15/100) + Number(bag))}.00`
// document.querySelector("#price").append(price)
// document.querySelector("#tax").append(tax)
// document.querySelector("#total").append(total)


// var totalAmount={total:`Rs${Math.floor(Number(bag)*(15/100) + Number(bag))}.00`}
// localStorage.setItem("total",JSON.stringify(totalAmount))


// document.querySelector("#property").append(property)





   
//   // after signin display code start

//   loginUser = JSON.parse(localStorage.getItem("loginUser"))
//   console.log(loginUser)
  
//   let hideAndDisplayFunction;
  
//   let displayDropdown;
//   displayDropdown = document.getElementById("display_aftersiginDropdown")
  
//   displayDropdown.style.display = "none"
  
//   if(loginUser != null){
  
  
//       document.getElementById("after_signin").innerText = loginUser[0] 
//   let loginUserName = loginUser[0]
//   let loginUserEmail = loginUser[1]
  
//   document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
//   document.getElementById("signinUserEmail").innerText = loginUserEmail
//    displayDropdown = document.getElementById("display_aftersiginDropdown")
//   // displayDropdown.style.display = "none"
  
//    hideAndDisplayFunction = () => {
//       if (displayDropdown.style.display == "none") {
//           displayDropdown.style.padding = "20px"
  
//           displayDropdown.style.display = "block"
  
//       }
//       else {
  
//           displayDropdown.style.display = "none"
  
//       }
  
//   }
  
//   // document.getElementById("leave_signin").innerHTML=null ;
  
//   // let leave_signin= document.createElement("a")
//   // leave_signin.innerText="Sign in"
  
//   // leave_signin.href="signin.html"
  
//   // document.getElementById("after_signin").addEventListener("click", hideAndDisplayFunction)
//   }
  
  
  
//   else{
// //        var p = document.createElement("p")
 
// //    var link = document.createElement("a")
// //    link.innerText = "Sign in"
// //    link.href = "./signin.html"
// //    p.innerText = link
//    document.getElementById("leave_signin").innerText ="Sign in "
//    document.getElementById("leave_signin").addEventListener("click",siginFunctionNew)
//    function siginFunctionNew()
//    {
//     window.location.href="./sigin.html"
//    }
//       // document.getElementById("after_signin").innerText = loginUser[0] 
//       // let loginUserName = loginUser[0]
//       // let loginUserEmail = loginUser[1]
      
//       // document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
//       // document.getElementById("signinUserEmail").innerText = loginUserEmail
//        displayDropdown = document.getElementById("display_aftersiginDropdown")
//       // displayDropdown.style.display = "none"
      
//        hideAndDisplayFunction = () => {
//           if (displayDropdown.style.display == "none") {
//               displayDropdown.style.padding = "20px"
      
//               displayDropdown.style.display = "block"
      
//           }
//           else {
      
//               displayDropdown.style.display = "none"
      
//           }
      
//       }
  
//   }
  
  
//   // document.getElementById("after_signin").innerText = loginUser[0] 
//   // let loginUserName = loginUser[0]
//   // let loginUserEmail = loginUser[1]
  
//   // document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
//   // document.getElementById("signinUserEmail").innerText = loginUserEmail
//   // const displayDropdown = document.getElementById("display_aftersiginDropdown")
//   // displayDropdown.style.display = "none"
//   // let hideAndDisplayFunction = () => {
//   //     if (displayDropdown.style.display == "none") {
//   //         displayDropdown.style.padding = "20px"
  
//   //         displayDropdown.style.display = "block"
  
//   //     }
//   //     else {
  
//   //         displayDropdown.style.display = "none"
  
//   //     }
  
//   // }
  
//   document.getElementById("after_signin").addEventListener("click", hideAndDisplayFunction)
  
  


// // after signin display code end
     
//      //faizal changes
     
//      document.getElementById("more_travel_display").style.display = "none"
         
//      let moreTravelFunction = () =>
//      {
//          console.log("in")
//          if( document.getElementById("more_travel_display").style.display === "none")
//          {
//              document.getElementById("more_travel_display").style.display = "block"
//          }
//          else{
//              document.getElementById("more_travel_display").style.display = "none"
//          }
//      }
//      document.getElementById("more_travel").addEventListener("click",moreTravelFunction)



//      document.getElementById("CompleteBook").addEventListener("click",myalert)














// new code


import {header} from "../components/header&footer.js"

document.querySelector("#header").innerHTML= header();


let loginUser = JSON.parse(localStorage.getItem("loginUser"))

var arr=[];
function myalert(){

    let Name = document.getElementById("firstname").value
let Surname = document.getElementById("surname").value
let Email = document.getElementById("email").value 
let Mobile = document.getElementById("mobile").value
let cardnumber  = document.getElementById("cardNo").value
let cardname = document.getElementById("nameoncard").value
let cvv= document.getElementById("codecvv").value
let expirymonth = document.getElementById("month").value
let expiryear = document.getElementById("year").value

console.log(cvv,expiryear,expirymonth)



     if(Name === ""||Surname===""||Email===""||Mobile==="" || cardnumber === ""||cardname===""||expirymonth==""||expiryear=="" || cvv==="")
     {
         alert("Please fill all of the details.")
     }
     else if(loginUser === null)
     {
         alert("Please sign in")
     }
     else{
        var obj={
                name:document.getElementById("firstname").value,
            surname:document.getElementById("surname").value,
            email:document.getElementById("email").value,
            mobile:document.getElementById("mobile").value
            
            };
            
            arr.push(obj)
            
            localStorage.setItem("detail",JSON.stringify(arr))

        alert("Congratulations ! Your booking is Sucessfull")
        window.location.href="./final.html"
     }
 
}

// var arr=[];
// document.querySelector("button").addEventListener("click",myfunction)
// function myfunction(){
    
   
//    var obj={
//     name:document.getElementById("firstname").value,
// surname:document.getElementById("surname").value,
// email:document.getElementById("email").value,
// mobile:document.getElementById("mobile").value

// };

// arr.push(obj)

// localStorage.setItem("detail",JSON.stringify(arr))
// }

var Hname=JSON.parse(localStorage.getItem("name"))

console.log(Hname)
var hotelName=document.createElement("h3")
hotelName.innerText=Hname.name;


var selectedHotel=JSON.parse(localStorage.getItem("selectedHotel"))
console.log(selectedHotel)
var div = document.createElement("div")
let img=document.createElement("img")
img.src=selectedHotel.hotelImage
div.append(img)

let checkOut=document.createElement("p")
checkOut.innerText=`Check Out : ${selectedHotel.checkOutDate}`

let checkIn=document.createElement("p")
checkIn.innerText=`Check In : ${selectedHotel.checkInDate}`
let rating=document.createElement("p")
rating.innerText=`4.6/5 Wonderful (76 reviews)`
let room=document.createElement("p2")
room.innerText=`1 Room: Deluxe Room, 2 Twin Beds, Non Smoking, Park View`
let night=document.createElement("p2")
night.innerText=`1-night stay`
console.log(checkOut,checkIn,img)
document.querySelector("#cartDetails").append(div,hotelName,rating,room,checkIn,checkOut)

var details=JSON.parse(localStorage.getItem("details"))
var  pricemain=document.createElement("div")
let price=document.createElement("p")
price.innerText=`${details.price}.00`
var rupya=details.price
console.log("rupya: "+rupya.length)
var bag="";
for(var i=2;i<rupya.length;i++){
    if(rupya[i]!==","){
        bag=bag+rupya[i]
        
    }
    
    
}
console.log("bag:"+bag)
let tax=document.createElement("p")
tax.innerText=`Rs${Math.floor(Number(bag)*(15/100))}.00`
console.log("price :"+details.price)
var total=document.createElement("h4")
total.innerText=`Rs${Math.floor(Number(bag)*(15/100) + Number(bag))}.00`
var property=document.createElement("p")
property.innerText=`Rs${Math.floor(Number(bag)*(15/100) + Number(bag))}.00`
document.querySelector("#price").append(price)
document.querySelector("#tax").append(tax)
document.querySelector("#total").append(total)


var totalAmount={total:`Rs${Math.floor(Number(bag)*(15/100) + Number(bag))}.00`}
localStorage.setItem("total",JSON.stringify(totalAmount))


document.querySelector("#property").append(property)





   
  // after signin display code start

  loginUser = JSON.parse(localStorage.getItem("loginUser"))
  console.log(loginUser)
  
  let hideAndDisplayFunction;
  
  let displayDropdown;
  displayDropdown = document.getElementById("display_aftersiginDropdown")
  
  displayDropdown.style.display = "none"
  
  if(loginUser != null){
  
  
      document.getElementById("after_signin").innerText = loginUser[0] 
  let loginUserName = loginUser[0]
  let loginUserEmail = loginUser[1]
  
  document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
  document.getElementById("signinUserEmail").innerText = loginUserEmail
   displayDropdown = document.getElementById("display_aftersiginDropdown")
  // displayDropdown.style.display = "none"
  
   hideAndDisplayFunction = () => {
      if (displayDropdown.style.display == "none") {
          displayDropdown.style.padding = "20px"
  
          displayDropdown.style.display = "block"
  
      }
      else {
  
          displayDropdown.style.display = "none"
  
      }
  
  }
  
  // document.getElementById("leave_signin").innerHTML=null ;
  
  // let leave_signin= document.createElement("a")
  // leave_signin.innerText="Sign in"
  
  // leave_signin.href="signin.html"
  
  // document.getElementById("after_signin").addEventListener("click", hideAndDisplayFunction)
  }
  
  
  
  else{
//        var p = document.createElement("p")
 
//    var link = document.createElement("a")
//    link.innerText = "Sign in"
//    link.href = "./signin.html"
//    p.innerText = link
   document.getElementById("leave_signin").innerText ="Sign in "
   document.getElementById("leave_signin").addEventListener("click",siginFunctionNew)
   function siginFunctionNew()
   {
    window.location.href="./sigin.html"
   }
      // document.getElementById("after_signin").innerText = loginUser[0] 
      // let loginUserName = loginUser[0]
      // let loginUserEmail = loginUser[1]
      
      // document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
      // document.getElementById("signinUserEmail").innerText = loginUserEmail
       displayDropdown = document.getElementById("display_aftersiginDropdown")
      // displayDropdown.style.display = "none"
      
       hideAndDisplayFunction = () => {
          if (displayDropdown.style.display == "none") {
              displayDropdown.style.padding = "20px"
      
              displayDropdown.style.display = "block"
      
          }
          else {
      
              displayDropdown.style.display = "none"
      
          }
      
      }
  
  }
  
  
  // document.getElementById("after_signin").innerText = loginUser[0] 
  // let loginUserName = loginUser[0]
  // let loginUserEmail = loginUser[1]
  
  // document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
  // document.getElementById("signinUserEmail").innerText = loginUserEmail
  // const displayDropdown = document.getElementById("display_aftersiginDropdown")
  // displayDropdown.style.display = "none"
  // let hideAndDisplayFunction = () => {
  //     if (displayDropdown.style.display == "none") {
  //         displayDropdown.style.padding = "20px"
  
  //         displayDropdown.style.display = "block"
  
  //     }
  //     else {
  
  //         displayDropdown.style.display = "none"
  
  //     }
  
  // }
  
  document.getElementById("after_signin").addEventListener("click", hideAndDisplayFunction)
  
  


// after signin display code end
     
     //faizal changes
     
     document.getElementById("more_travel_display").style.display = "none"
         
     let moreTravelFunction = () =>
     {
         console.log("in")
         if( document.getElementById("more_travel_display").style.display === "none")
         {
             document.getElementById("more_travel_display").style.display = "block"
         }
         else{
             document.getElementById("more_travel_display").style.display = "none"
         }
     }
     document.getElementById("more_travel").addEventListener("click",moreTravelFunction)



     document.getElementById("CompleteBook").addEventListener("click",myalert)