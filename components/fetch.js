function stays() {

    return `
   




<div id="stay_traveller_rooms">

<div> <input class="input_icon"type="text" id="inputbox1" placeholder="Going to">
<div id="location_suggestion_div"></div>
  <input class="checkin_icon" type="date" id="inputbox2">
  <input class="checkout_icon" type="date" id="inputbox3">
</div>
<div id="travellers_div">
<div id="trveller_icon"> <i class="fa-solid fa-user"></i></div>
      <div>1 Room,</div>
      <div id="no_of_travellers">1 Traveller</div>
  </div>
</div>
<input type="checkbox" id="inputbox5"><label >Add a flight</label>
<input type="checkbox" id="inputbox6"> <label >Add a car</label><br>
<button id="inputboxbutton">Search</button> 



<div id="travellers_display" style="display:none">
<h5 id="">Travellers</h5>
<p>Room 1 </p>


<div id="counter_travellers">
    <div>Adults</div>
    <div id="counter">
        <div id="add_travellers">+</div>
        <div id="display_count">1</div>
        <div id="remove_travellers">-</div>
    </div>
</div>

<button id="count_doneButton">Done</button>
</div>



    `
}

function flights() {

    return `
    <div id="homepagebox1_ba">

                <div id="homepagebox1_ba_1">
                  <button id="Return_btn">Return</button>
                  <button id="Oneway_btn">One-way</button>
                  <button id="multiway_btn">Multi-city</button>
                </div>
                 <div id="homepagebox1_ba_2">

                  <p>traveller</p>
                  <p>Economy</p>

                 </div>
               </div>
              
           
           <input class="input_icon" type="text" placeholder="Leaving from"><i class="fa-solid fa-right-left"></i>
           <input class="input_icon" type="text" placeholder="Going to">
           <input type="date" > <br>
           <button id="flights_search_btn">Search</button>

         </div>
    
    `
}

function  cars(){
    
    return `
    
    <div id="homepagebox1_ba">

    <div id="homepagebox1_ba_1">
      <button id="Return_btn">Car hire</button>
      <button id="Oneway_btn">Airport transport</button>
      
    </div>
 
   </div>
  

<input id="car_location1" class="input_icon" type="text" placeholder="Pick-up">
<input id="car_location2" class="input_icon" type="text" placeholder="Same as pick-up"><br>
<input id="car_date1" type="date" >
<input id="car_date2" type="date" >
<input id="car_time1" type="time">
<input id="car_time2" type="time"><br>
<button id="cars_search_btn">Search</button>

</div>

`
}

function  packages(){
    
    return `
    
    <div id="homepagebox1_ba_packages">

                
    <div id="homepagebox1_ba_2">
     
    <p>room,</p>
     <p>traveller</p>
    

    </div>
  </div>
 

<input id="packages_location1" class="input_icon" type="text" placeholder="Leaving from"><i class="fa-solid fa-right-left"></i>
<input id="packages_location2" class="input_icon" type="text" placeholder="Going to">
<input id="packages_date1" type="date" >
<input id="packages_date2" type="date"> <br>
<input id="packages_checkbox" type="checkbox"><label >I only need accommodation for part of my trip</label><br>
<button id="packages_search_btn">Search</button>

</div>
`
}

function  thingstodo(){
    
    return `
    
    <input id="things_location2" class="input_icon" type="text" placeholder="Things to do">
    <input id="things_date1" type="date" >
    <input id="things_date2" type="date"> <br>
   
    <button id="things_search_btn">Search</button>

  </div>
  `
}

export {stays,flights,cars,packages,thingstodo};