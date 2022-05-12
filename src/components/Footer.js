import React from "react";
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-left col-md-4 col-sm-6">
      <p class="about">
        <span> About the company</span> 
         The railway reservation system provides the
train timing details, reservation, billing and cancellation on various types of reservation
mainly,
• Confirm reservation for confirmed seats.
• Reservation against cancellation.
• Online reservation.
 • Accomodation Facility.
• E-catering Facility.

      </p>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"></link>
      <div class="icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-google-plus"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="footer-center col-md-4 col-sm-6">
      <div>
        <i class="fa fa-map-marker"></i>
        <p> Karachi, Pakistan</p>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p> (+00) 1111 1111 1111</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="#"> sudhnitkaur10@gmail.com</a></p>
      </div>
    </div>
    <div class="footer-right col-md-4 col-sm-6">
      
      <p class="menu">
        <a href="#"> Home</a> |
        <a href="#"> About</a> |
        <a href="#"> Services</a> |
        <a href="#"> Portfolio</a> |
        <a href="#"> Contact</a>
      </p>
      <div ><img src="111.jpeg"/></div>
      <p class="name"> Sudhnit Kaur &copy; 2022</p>
    </div>
  </footer>
  );
}

export default Footer;