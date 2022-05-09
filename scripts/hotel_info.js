import {header,footer} from "../components/header&footer.js"

document.querySelector("#header").innerHTML= header();

document.querySelector("#footer").innerHTML= footer();


let hotelDetails = async (hotelID,checkInDate,checkOutDate,lat,lon)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
            'X-RapidAPI-Key': 'ecd72b98e5msh241128145d87ddfp175f78jsncc939545654c'
        }
    };

   let res= await fetch(`https://hotels4.p.rapidapi.com/properties/get-details?id=${hotelID}&checkIn=${checkInDate}&checkOut=${checkOutDate}&adults1=1&currency=INR`, options)
   let data= await res.json();
   console.log('data:', data.data.body)
   appendData(data.data.body,lat,lon)
   return data;
}

let selectedHotel = JSON.parse(localStorage.getItem("selectedHotel"));
let hotelID=selectedHotel.id;
let checkInDate=selectedHotel.checkInDate;
let checkOutDate=selectedHotel.checkOutDate;
let lat=Number(selectedHotel.lat);
let lon=Number(selectedHotel.lon);
hotelDetails(hotelID,checkInDate,checkOutDate,lat,lon);

const appendData = (data,lat,lon) => {
    let name=document.querySelector("#hotel_name");
    name.innerText=data.propertyDescription.name;

    pushName(data.propertyDescription.name);
    

    let rating=document.querySelector("#hotel_rating");
    let rating_score = data.guestReviews.brands.rating;
    let review=data.guestReviews.brands.badgeText;
    if(rating_score>5)
    {
        rating_score=rating_score/2;
        rating_score.toFixed(1);
        rating.innerText=Number(rating_score)+" "+review;
    }
    else{
        rating.innerText=Number(data.guestReviews.brands.rating)+" "+review;
    }
    

    let map_image=document.querySelector("#map_image");
    map_image.src=`http://maps.google.com/maps?q=${lat},${lon}&z=18&output=embed`;

    let large_map=document.querySelector("#large_map");
    large_map.src=`http://maps.google.com/maps?q=${lat},${lon}&z=14&output=embed`;


    let nearby=data.overview.overviewSections;
    nearby.map(function (el,i){
        if(i===1){
            el.content.map(function (ele,ind){
                if(ind===1){
                    document.querySelector("#nearby_1").innerText=ele;
                }
                if(ind===2){
                    document.querySelector("#nearby_2").innerText=ele;
                }
                if(ind===3){
                    document.querySelector("#nearby_3").innerText=ele;
                }
                if(ind===4){
                    document.querySelector("#nearby_4").innerText=ele;
                }
            })
        }
    });
    console.log(data.roomsAndRates.rooms)
    data.roomsAndRates.rooms.map(function (ele,i){
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=ele.images[0].fullSizeUrl;

        let text_div=document.createElement("div");
        text_div.setAttribute("id", "text_div");

        let room_type=document.createElement("p");
        room_type.setAttribute("id", "room_type");
        room_type.innerText=ele.name;

        let room_amenities_div=document.createElement("div");
        room_amenities_div.setAttribute("id", "room_amenities_div");
        for(let i=0; i<=7; i++)
        {
            let room_amenities=document.createElement("p");
            room_amenities.innerText=ele.additionalInfo.details.amenities[i];
            room_amenities_div.append(room_amenities);
        }

        let hr=document.createElement("hr");
        hr.setAttribute("id", "horizontal_line");

        let price_div=document.createElement("div");
        price_div.style.padding="12px"
        
        let original_price=document.createElement("p");
        original_price.innerText=ele.ratePlans[0].price.current;
        original_price.style.fontSize="28px";
        original_price.style.fontWeight="600";

        let price_with_taxes=document.createElement("p");
        price_with_taxes.innerText=ele.ratePlans[0].price.fullyBundledPricePerStay;
        price_with_taxes.style.fontSize="14px";

        let button_div=document.createElement("div");
        button_div.style.display="flex";
        button_div.style.justifyContent="space-between";
        button_div.style.padding="12px"
        button_div.style.alignItems="center";

        let a=document.createElement("a");
        a.innerText="Price details";
        a.setAttribute("id", "right_arrow_link")

        let button=document.createElement("button");
        button.setAttribute("id", "reserve_button");
        button.addEventListener("click", function (){
            completeBooking(img.src,ele.ratePlans[0].price.current,ele.ratePlans[0].price.fullyBundledPricePerStay,ele.name)
        })
        button.innerText="Reserve";

        text_div.append(room_type,room_amenities_div)
        price_div.append(original_price,price_with_taxes);
        button_div.append(a,button);
        div.append(img,text_div,hr,price_div,button_div)
        document.querySelector("#different_rooms").append(div);
    })

    document.querySelector("#city_name").append(data.propertyDescription.address.cityName);
    document.querySelector("#hotel_description").append(data.propertyDescription.tagline[0].replace(/(<([^>]+)>)/gi, ""));

    let nearby_places=data.overview.overviewSections[1].content;
        nearby_places.map(function (ele,i){
            if(i>0)
            {
                let p=document.createElement("p");
                p.innerText=ele;
                document.querySelector("#nearby_places").append(p);
            }
        })

    document.querySelector("#property_name").innerText=data.propertyDescription.name;

    document.querySelector("#property_description").innerText=data.propertyDescription.tagline[0].replace(/(<([^>]+)>)/gi, "");
    document.querySelector("#property_description").style.marginBottom="30px"

    document.querySelector("#awards_description").innerText=data.specialFeatures.sections[2].freeText.replace(/(<([^>]+)>)/gi, "");
    document.querySelector("#awards_description").style.marginBottom="20px"
}



const hotelImages= async (hotelID) => {
    const url = `https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=${hotelID}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'ecd72b98e5msh241128145d87ddfp175f78jsncc939545654c'
      }
    };

    let response = await fetch(url, options);
    let data= await response.json();
    appendImages(data.hotelImages);
}

hotelImages(hotelID);

const appendImages = (data) => {

    document.querySelector("#large_hotel_image").src=data[Math.floor(Math.random()*data.length)].baseUrl.replace("{size}","z");

    document.querySelector("#small_hotel_image_1").src=data[Math.floor(Math.random()*data.length)].baseUrl.replace("{size}","z");

    document.querySelector("#small_hotel_image_2").src=data[Math.floor(Math.random()*data.length)].baseUrl.replace("{size}","z");

    document.querySelector("#small_hotel_image_3").src=data[Math.floor(Math.random()*data.length)].baseUrl.replace("{size}","z");

    document.querySelector("#small_hotel_image_4").src=data[Math.floor(Math.random()*data.length)].baseUrl.replace("{size}","z");

}

const reviews = async (hotelID) => {
    const url = `https://hotels4.p.rapidapi.com/reviews/v2/list?hotelId=${hotelID}&reviewOrder=date_newest_first&tripTypeFilter=all`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'ecd72b98e5msh241128145d87ddfp175f78jsncc939545654c'
      }
    };
    
    let res=await fetch(url, options);
    let data= await res.json();
    // console.log('data:', data)
    let ratingAspects=data.data.reviews.body.reviewContent.overall.ratingAspects;
    // console.log('ratingAspects:', ratingAspects)
    let text_reviews=data.data.reviews.body.reviewContent.reviews.hermes.groups[0].items;
    // console.log('text_reviews:', text_reviews)
    let badge=data.data.reviews.body.reviewContent.overall.badgeText;
    let total_reviews=Number(data.data.reviews.body.reviewContent.overall.total);
    let rating=Number(data.data.reviews.body.reviewContent.overall.rating)
    // console.log('total_reviews:', total_reviews)
    // console.log('badge:', badge)
    appendReviews(ratingAspects,text_reviews,badge,total_reviews,rating);
}

reviews(hotelID);


const appendReviews = (ratingAspects,text_reviews,badge,total_reviews,rating) => {
    if(rating>5)
    {
        rating=rating/2;
        rating.toFixed(1);
        document.querySelector("#rating_tag").innerText=rating;
    }
    else
    {
        document.querySelector("#rating_tag").innerText=rating;
    }
    document.querySelector("#badge_tag").innerText=badge;

    document.querySelector("#total_reviews_tag").innerText=total_reviews+" "+"reviews";

    document.querySelector(".top_review_text").innerText=`See all ${total_reviews} reviews`;

    document.querySelector("#verified_reviews").innerText="Verified reviews";

    document.querySelector("#cleaniness_score").innerText=(Number(ratingAspects.cleanliness)/2).toFixed(1)+"/"+5;

    let cleaniness_score=(Number(ratingAspects.cleanliness)/2).toFixed(1)+"/"+5;

    document.querySelector("#cleanliness_score_text").innerText=`Guests rated this property ${cleaniness_score} for cleanliness.`;

    document.querySelector("#service_score").innerText=(Number(ratingAspects.service)/2).toFixed(1)+"/"+5;

    document.querySelector("#comfort_score").innerText=(Number(ratingAspects.comfort)/2).toFixed(1)+"/"+5;

    document.querySelector("#condition_score").innerText=(Number(ratingAspects.condition)/2).toFixed(1)+"/"+5;

    document.querySelector("#neighbourhood_score").innerText=(Number(ratingAspects.neighbourhood)/2).toFixed(1)+"/"+5;

    text_reviews.map(function (ele,i){
        if(i<=7)
        {
            let div=document.createElement("div");

            let h2=document.createElement("h2");
            h2.innerText=(ele.rating/2).toFixed(1)+"/"+5+" "+ele.badge;
            h2.style.fontSize="20px";
            h2.style.marginBottom="10px"

            let p1=document.createElement("p");
            p1.innerText=ele.reviewer.name+","+" "+ele.reviewer.locality.toUpperCase();
            p1.style.fontSize="15px";
            p1.style.fontWeight="600";

            let p2=document.createElement("p");
            p2.innerText=ele.tripTypeText;
            p2.style.fontSize="15px";

            let p3=document.createElement("p");
            p3.innerText=ele.reviewDate;
            p3.style.fontSize="15px";

            let p4=document.createElement("p");
            p4.innerText=ele.description;
            p4.style.fontSize="15px";
            p4.style.marginTop="25px";

            let hr=document.createElement("hr");
            hr.setAttribute("id", "horizontal_line1");
            hr.style.marginTop="10px"

            div.append(h2,p1,p2,p3,p4,hr);
            document.querySelector("#review_right_section").append(div);
        }
    })
}
	
const pushName = (hotel_name) => {
    let obj={
        name:hotel_name
    }
    localStorage.setItem("name", JSON.stringify(obj));
}

const completeBooking = (image,price_original,price_with_tax,room_type) => {
    let obj={
        image:image,
        price:price_original,
        tax_price:price_with_tax,
        room_name:room_type
    }
    localStorage.setItem("details", JSON.stringify(obj));
    window.location.href="checkout.html"

}




//  // after signin display code start

//  let loginUser = JSON.parse(localStorage.getItem("loginUser"))
//  console.log(loginUser)
//  document.getElementById("after_signin").innerText = loginUser[0]
//  let loginUserName = loginUser[0]
//  let loginUserEmail = loginUser[1]
 
//  document.getElementById("siginUserName").innerText = `Hi, ${loginUserName}`
//  document.getElementById("signinUserEmail").innerText = loginUserEmail
//  const displayDropdown = document.getElementById("display_aftersiginDropdown")
//  displayDropdown.style.display = "none"
//  let hideAndDisplayFunction = () => {
//      if (displayDropdown.style.display == "none") {
//          displayDropdown.style.padding = "20px"
 
//          displayDropdown.style.display = "block"
 
//      }
//      else {
 
//          displayDropdown.style.display = "none"
 
//      }
 
//  }
 
//  document.getElementById("after_signin").addEventListener("click", hideAndDisplayFunction)
 
 
//  // after signin display code end



   
     // after signin display code start

     let loginUser = JSON.parse(localStorage.getItem("loginUser"))
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
     
    //  document.getElementById("leave_signin").innerHTML=null ;
     
    //  let leave_signin= document.createElement("a")
    //  leave_signin.innerText="Sign in"
     
    //  leave_signin.href="signin.html"
     
     // document.getElementById("after_signin").addEventListener("click", hideAndDisplayFunction)
     }
     
     
     
     else{
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
 
 


//  changes for onclick 449

document.getElementById("total_reviews_tag").addEventListener("click",() => {return false})

document.getElementById("verified_reviews").addEventListener("click",() => {return false})