//    import { header } from "../components/header&footer.js";

    import {stays,flights,cars,packages,thingstodo} from "../components/fetch.js";

    import { homePageSiginDropdown } from "../components/signin_dropdown.js"    //import of sign in dropdown
    
//  document.getElementById("header").innerHTML=header();

    function stays1(){
   
       
        document.getElementById("flights_button").style.color="black"  
        document.getElementById("cars_button").style.color="black"
        document.getElementById("packages_button").style.color="black"
        document.getElementById("thingstodo_button").style.color="black"
        
        document.getElementById("stays_button").style.color="blue"
      
        // document.getElementById("stays_button").style.border="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=stays();

        
        function searchlocation(){
            console.log("hello")
          
           let location= document.getElementById("inputbox1").value ;
           let checkinDate= document.getElementById("inputbox2").value ;
           let checkoutDate= document.getElementById("inputbox3").value ;
           let totalTravellers= document.getElementById("display_count").innerText ;
        
           let travelDetails={
               location:location,
               checkinDate:checkinDate,
               checkoutDate:checkoutDate,
               totalTravellers:totalTravellers,
           }
          
        
           if(location.length<1 || checkinDate =="" || checkoutDate==""){

               errorDiv.style.width="95%"
               errorDiv.style.padding="15px 0px 15px 10px"
               errorDiv.style.borderRadius="5px"
               
               errorDiv.style.margin="auto"
               errorDiv.style.fontSize="15px"
               errorDiv.style.border=" 1px solid gray"
               errorDiv.style.color="white"
               errorDiv.style.background="#ca2e2b"
        
               errorDiv.innerText = "To continue, please correct the error below. Go to the error"
               
            errorDiv.style.display = "block"
           
               // window.location.reload()
           }
           else{
        
               errorDiv.style.display = "none"
            window.location.href="products.html"
               
           }
           localStorage.setItem("travelDetails",JSON.stringify(travelDetails));
           console.log(travelDetails)  
         }
    
        /* chages here start */
    
          let find_city_country= async ()=>{
            let query= document.querySelector("#inputbox1").value;
    
            let url= `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=shivambais`
    
            let res= await fetch(url)
    
            let data= await res.json()
    
            let reqData= data.geonames;
            console.log(reqData)
    
            ////map
            // //showMapFunction();
    
            document.querySelector('#location_suggestion_div').style.display = "block";
    
            // //console.log(data)   location_suggestion_div
    
            document.querySelector("#location_suggestion_div").innerHTML=null;
            reqData.forEach((ele)=>{
                let location= document.createElement("p");
                location.innerText= ele.name+","+ele.countryName;
    
                location.addEventListener("click",()=>{
                    document.querySelector("#inputbox1").value =null;
                    // //document.getElementById("location_suggestion_div").style.display = "block";
                    document.querySelector("#inputbox1").value =  ele.name+","+ele.countryName;
                    //// document.querySelector("#location_suggestion_div").innerHTML=null;
                    document.getElementById("location_suggestion_div").style.display = "none";
                })
                document.querySelector("#location_suggestion_div").append(location)
            })
            }
    
            let timeoutVar;
            let debounce=(fun,time)=>{
                if(timeoutVar){
                    clearTimeout(timeoutVar);
                }
    
                timeoutVar = setTimeout(fun,time)
                // window.location.href="products.html"
            }
    
         document.querySelector("#inputbox1").addEventListener("input",()=>{debounce(find_city_country,700)})
    
            /* chages here end */

    document.getElementById("inputboxbutton").addEventListener("click",()=>{searchlocation()})

    // document.getElementById("travellers_div").addEventListener("click", displayTravellersFunction)
    










      //   traveller js code start
  let displayTravellers = document.getElementById("travellers_display")

    displayTravellers.style.display = "none"
    function displayTravellersFunction() {
       
    
        if (displayTravellers.style.display === "none") {
    
            document.getElementById("add_travellers").addEventListener("click", counterAddFunction)
    
            document.getElementById("remove_travellers").addEventListener("click", counterRemoveFunction)
    
            displayTravellers.style.display = "block"
    
            let displayCount = document.getElementById("display_count")
    
            let i = 1
    
            function counterAddFunction() {
                i = i + 1
                displayCount.innerText = i
                document.getElementById("no_of_travellers").innerText = `${i} Travellers`
    
            }
    
            function counterRemoveFunction() {
                i = i - 1
                displayCount.innerText = i
                document.getElementById("no_of_travellers").innerText = `${i} Travellers`
    
            }
     
        }
        else {
       
            displayTravellers.style.display = "none"
        }
    
    
    }
    document.getElementById("travellers_div").addEventListener("click", displayTravellersFunction)
    
    //   traveller js code end
  


      }

    //   default code

    // function stays2(){
    //     document.getElementById("homepagebox1_b").innerHTML=stays();

        
    //     function searchlocation(){
    //          console.log("hello")
    
    //         let location= document.getElementById("inputbox1").value ;
    //         let checkinDate= document.getElementById("inputbox2").value ;
    //         let checkoutDate= document.getElementById("inputbox3").value ;
    //         let totalTravellers= document.getElementById("display_count").innerText ;
    
    //         let travelDetails={
    //             location:location,
    //             checkinDate:checkinDate,
    //             checkoutDate:checkoutDate,
    //             totalTravellers:totalTravellers,
    //         }
    //         localStorage.setItem("travelDetails",JSON.stringify(travelDetails));
    //         //  window.location.href="products.html"
    //         console.log(travelDetails)  
    //       }
    
    //     /* chages here start */
    
    //       let find_city_country= async ()=>{
    //         let query= document.querySelector("#inputbox1").value;
    
    //         let url= `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=shivambais`
    
    //         let res= await fetch(url)
    
    //         let data= await res.json()
    
    //         let reqData= data.geonames;
    //         console.log(reqData)
    
    //         ////map
    //         // //showMapFunction();
    
    //         document.querySelector('#location_suggestion_div').style.display = "block";
    
    //         // //console.log(data)   location_suggestion_div
    
    //         document.querySelector("#location_suggestion_div").innerHTML=null;
    //         reqData.forEach((ele)=>{
    //             let location= document.createElement("p");
    //             location.innerText= ele.name+","+ele.countryName;
    
    //             location.addEventListener("click",()=>{
    //                 document.querySelector("#inputbox1").value =null;
    //                 // //document.getElementById("location_suggestion_div").style.display = "block";
    //                 document.querySelector("#inputbox1").value =  ele.name+","+ele.countryName;
    //                 //// document.querySelector("#location_suggestion_div").innerHTML=null;
    //                 document.getElementById("location_suggestion_div").style.display = "none";
    //             })
    //             document.querySelector("#location_suggestion_div").append(location)
    //         })
    //         }
    
    //         let timeoutVar;
    //         let debounce=(fun,time)=>{
    //             if(timeoutVar){
    //                 clearTimeout(timeoutVar);
    //             }
    
    //             timeoutVar = setTimeout(fun,time)
    //             // window.location.href="products.html"
    //         }
    
    //      document.querySelector("#inputbox1").addEventListener("input",()=>{debounce(find_city_country,700)})
    
    //         /* chages here end */

    // document.getElementById("inputboxbutton").addEventListener("click",()=>{searchlocation()})

    // }
//defaut code
document.getElementById("homepagebox1_b").innerHTML=stays();

   
document.getElementById("stays_button").addEventListener("click",stays);
   



    function flights1(){

        errorDiv.style.display = "none"

        document.getElementById("stays_button").style.color="black"  
        document.getElementById("cars_button").style.color="black"
        document.getElementById("packages_button").style.color="black"
        document.getElementById("thingstodo_button").style.color="black"
        
        document.getElementById("flights_button").style.color="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=flights();

        
    }

    function cars1(){
        errorDiv.style.display = "none"

        document.getElementById("flights_button").style.color="black"  
        document.getElementById("stays_button").style.color="black"
        document.getElementById("packages_button").style.color="black"
        document.getElementById("thingstodo_button").style.color="black"
        
        document.getElementById("cars_button").style.color="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=cars();
    }

    function packages1(){
        errorDiv.style.display = "none"

        document.getElementById("flights_button").style.color="black"  
        document.getElementById("cars_button").style.color="black"
        document.getElementById("stays_button").style.color="black"
        document.getElementById("thingstodo_button").style.color="black"
        
        document.getElementById("packages_button").style.color="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=packages();
    }

    function thingstodo1(){
        errorDiv.style.display = "none"
        document.getElementById("flights_button").style.color="black"  
        document.getElementById("cars_button").style.color="black"
        document.getElementById("packages_button").style.color="black"
        document.getElementById("stays_button").style.color="black"
        
        document.getElementById("thingstodo_button").style.color="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=thingstodo();
    }

    document.getElementById("stays_button").addEventListener("click",stays1);

    document.getElementById("flights_button").addEventListener("click",flights1);

    document.getElementById("cars_button").addEventListener("click",cars1);

    document.getElementById("packages_button").addEventListener("click",packages1);

    document.getElementById("thingstodo_button").addEventListener("click",thingstodo1);;




    // signin dropdown

    const displayDropdown = document.getElementById("display_siginDropdown")
    displayDropdown.style.display = "none"
    let hideAndDisplayFunction = () => {

        // document.getElementById("project_homepage").style.marginTop="-200px"
        // displayDropdown.innerHTML = null
        // displayDropdown.style.padding = "20px"

        if (displayDropdown.style.display == "none") {
            displayDropdown.style.padding = "20px"
            displayDropdown.innerHTML = homePageSiginDropdown()
            displayDropdown.style.display = "block"

        }
        else {

            displayDropdown.style.display = "none"

        }

    }

    document.getElementById("signin").addEventListener("click", hideAndDisplayFunction)



    // apivalue

     /* chages here start */

     let find_city_country= async ()=>{
        let query= document.querySelector("#inputbox1").value;

        let url= `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=shivambais`

        let res= await fetch(url)

        let data= await res.json()

        let reqData= data.geonames;
        console.log(reqData)

        ////map
        // //showMapFunction();

        document.querySelector('#location_suggestion_div').style.display = "block";

        // //console.log(data)   location_suggestion_div

        document.querySelector("#location_suggestion_div").innerHTML=null;
        reqData.forEach((ele)=>{
            let location= document.createElement("p");
            location.innerText= ele.name+","+ele.countryName;

            location.addEventListener("click",()=>{
                document.querySelector("#inputbox1").value =null;
                // //document.getElementById("location_suggestion_div").style.display = "block";
                document.querySelector("#inputbox1").value =  ele.name+","+ele.countryName;
                //// document.querySelector("#location_suggestion_div").innerHTML=null;
                document.getElementById("location_suggestion_div").style.display = "none";
            })
            document.querySelector("#location_suggestion_div").append(location)
        })
        }

        let timeoutVar;
        let debounce=(fun,time)=>{
            if(timeoutVar){
                clearTimeout(timeoutVar);
            }

            timeoutVar = setTimeout(fun,time)
        }

     document.querySelector("#inputbox1").addEventListener("input",()=>{debounce(find_city_country,700)})

      /* chages here ends */

    


       //   traveller js code start
  let displayTravellers = document.getElementById("travellers_display")

//   displayTravellers.style.display = "none"
  function displayTravellersFunction() {
     
  
      if (displayTravellers.style.display === "none") {
  
          document.getElementById("add_travellers").addEventListener("click", counterAddFunction)
  
          document.getElementById("remove_travellers").addEventListener("click", counterRemoveFunction)
  
          displayTravellers.style.display = "block"
  
          let displayCount = document.getElementById("display_count")
  
          let i = 1
  
          function counterAddFunction() {
              i = i + 1
              displayCount.innerText = i
              document.getElementById("no_of_travellers").innerText = `${i} Travellers`
  
          }
  
          function counterRemoveFunction() {
              i = i - 1
              displayCount.innerText = i
              document.getElementById("no_of_travellers").innerText = `${i} Travellers`
  
          }
   
      }
      else {
     
          displayTravellers.style.display = "none"
      }
  
  
  }
  document.getElementById("travellers_div").addEventListener("click", displayTravellersFunction)
  
  //   traveller js code end



  let errorDiv = document.getElementById("error_in_home")
  function searchlocation(){
    console.log("hello")
    

   let location= document.getElementById("inputbox1").value ;
   let checkinDate= document.getElementById("inputbox2").value ;
   let checkoutDate= document.getElementById("inputbox3").value ;
   let totalTravellers= document.getElementById("display_count").innerText ;
   console.log(checkinDate)

   let travelDetails={
       location:location,
       checkinDate:checkinDate,
       checkoutDate:checkoutDate,
       totalTravellers:totalTravellers,
   }
  

   if( location.length<1 || checkinDate =="" || checkoutDate==""){
  
       errorDiv.style.width="95%"
       errorDiv.style.padding="15px 0px 15px 10px"
       errorDiv.style.borderRadius="5px"
       
       errorDiv.style.margin="auto"
       errorDiv.style.fontSize="15px"
       errorDiv.style.border=" 1px solid gray"
       errorDiv.style.color="white"
       errorDiv.style.background="#ca2e2b"

       errorDiv.innerText = "To continue, please correct the error below. Go to the error"
       errorDiv.style.display = "block"
       // window.location.reload()
   }
   else{

       errorDiv.style.display = "none"
    window.location.href="products.html"
       
   }
   localStorage.setItem("travelDetails",JSON.stringify(travelDetails));
   console.log(travelDetails)  
 }
 document.getElementById("inputboxbutton").addEventListener("click",()=>{searchlocation()})