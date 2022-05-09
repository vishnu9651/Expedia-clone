function header(){

    return`
    
    <div id="headerbox1">
    <a href="index.html"> <img
            src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"></a>


   <div id="more_travel">More Travel <span><i class="fa-solid fa-angle-down"></i></span></div>
</div>

<div id="more_travel_display">

<div>
    <div id="logo_and_name">
        <div><img
                src="https://thumbs.dreamstime.com/b/office-building-sign-icon-flat-style-apartment-vector-illustration-white-isolated-background-architecture-business-concept-145464372.jpg"
                alt=""></div>
        <div id="name_of_travels"> <a href="products.html">Stays</a>  </div>
    </div>

    <div id="logo_and_name">
        <div><img
                src="data:image/png;base64,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"
                alt=""></div>
        <div id="name_of_travels">Flights</div>
    </div>

    <div id="logo_and_name">
        <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tXco6g6PADhIFhIW_mUSFpDFoSFJH8ABBFhpItp7krDWbDIGCf-9WBX0jcladlj_MyM&usqp=CAU"
                alt=""></div>
        <div id="name_of_travels">Cars</div>
    </div>

    <div id="logo_and_name">
        <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xLnHdh0pGBQ63rLxpEe-f2lsVGhvdMqPd4ouGxsrNOb7k0kCDRDf2vkELQtCpB-fPRA&usqp=CAU"
                alt=""></div>
        <div id="name_of_travels">Packages</div>
    </div>

    <div id="logo_and_name">
        <div><img src="https://cdn.iconscout.com/icon/free/png-256/layer-stack-data-layers-tool-15732.png"
                alt=""></div>
        <div id="name_of_travels">Holiday Activities</div>
    </div>


</div>

<div>
    <div id="moretravels_lowerDiv">Deals</div>
    <div id="moretravels_lowerDiv">Groups & meetings</div>
    <div id="moretravels_lowerDiv">Mobile</div>
</div>

</div>


<div id="headerbox2">
    <a href="#"><i class="fa-solid fa-globe"></i><label>English</label></a>
    <a href="#"><label>Support</label></a>
    <a href="#"><label>Trips</label></a>
    <a href="#" id="after_signin"><label>Sign in</label></a>
 
</div>

<div id="display_aftersiginDropdown">

  <div id="after_signinDropdownUpperDiv">
  <h3 id="siginUserName"></h3>
  <p id="signinUserEmail"></p>
  <button id="blue_member"><a href="">Blue Member</a> </button>
  <h3 id="RS">Rs.0.00</h3>
  <button id="points_value"> <a href="">Points value <span id="pointsvalue_span">i</span> </a> </button>
  
  </div>
  
  
  <hr>
  <p>Account</p>
  <p>List of Favourites</p>
  <p>Feedback</p>
  <hr>
  <p id="leave_signin"><a href="index.html">Sign out</a></p>
  
  </div>
    
    `
}


function footer(){

    return`
    

    <div id="footerbox1">
    <p id="p1">Plan ahead and save</p>
    <p>Books 60 days in advance for 20% off select stays.</p>

  </div>
  <div id="footerbox2">
    <div id="footerbox2a">
      <img src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg">
    </div>
    <div id="footerbox2b"> 
      <h2>Members get more on the app</h2>
      <p  id="para1">Earn double Expedia Rewards points when you book on the app, plus get travel alerts and manage your bookings on the go.</p>
      <h3>Text yourself a download link for easy access</h3>
      <input type="number" placeholder="Country code">
      <input type="number" placeholder="Phone number">
     <button  id="footer_submit"> Get the app</button>
      <p id="para2">By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
    </div>
    <div id="footerbox2c">
      <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_HP.png" >
      <p>Scan the QR code</p>
    </div>
  </div>
  <div id="footerbox3">
   <div id="footerbox3a">
     <p>Explore a world of travel with Expedia</p>
     <a href="#">Discover new places and experiences</a>
   </div>

    <div id="footerbox3b">

     <div>
       <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
     </div>
     <div>
       <p>Company</p>
       <a href="#">About us</a><br>
       <a href="#">Jobs</a><br>
       <a href="#">List your property</a><br>
       <a href="#">Partnerships</a><br>
     </div>
     <div>
       <p>Explore</p>
       <a href="#">India travel guide</a><br>
       <a href="#"> Hotels in India</a><br>
       <a href="#">Holiday rentals in India</a><br>
       <a href="#"> Holiday packages in India</a><br>
       <a href="#"> Domestic flights</a><br>
       <a href="#">Car hire in India</a><br>
       <a href="#">   All accommodation types  </a><br>
       <a href="#">  Travel blog</a><br>
     </div>
     <div>
       <p>Terms and policies</p>
       <a href="#"> Privacy Statement</a><br>
       <a href="#">Terms of use</a><br>
       <a href="#">Vrbo terms and conditions</a><br>
     </div>
     <div>
       <p>Help</p>
       <a href="#"> Support</a><br>
       <a href="#">Change or cancel your booking</a><br>
       <a href="#">Refund process and timelines</a><br>
       <a href="#">Book a flight using an airline credit</a><br>
       <a href="#">International travel documents</a><br>
     </div>
    </div>
   </div>

   <div id="footerbox4">
     <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" >
     <p>© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</p>

 </div>
    
    
    `
}

export {header,footer};