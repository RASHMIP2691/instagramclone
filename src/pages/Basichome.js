import React from "react";
import logo from '../../src/images/instagramlogo.jpg';

export default () => (
<center><div style={{color: 'Black'}}>
    <h1>Welcome to Instagram!!</h1>
    <img src={logo} width="300" height="300"></img>
    <center><button  onclick="/Home.js">LoginHere!</button></center>

    
    <p> For Logging in through your Google account Click on <a href="https://www.gmail.com/"> gmail.com!</a></p>
    {/* <button variant="btn btn-success" onClick={() => ('/Home.js')}></button> */}
    </div>
    </center>


)





// function myFunction() {
//   document.getElementById("demo").innerHTML = "/Home.js";
// }
