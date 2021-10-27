import React, { Component } from 'react';


//importing contact image and its icons

import img from '../images/nybw.jpg';
import icon1 from '../icons/placeholder.png';
import icon2 from '../icons/phone-call.png';
import icon3 from '../icons/gmail.png';

  
  

export default class Contact extends Component {
    render() {
        return (
            <div>
              <img src={img} alt="communication" class="cont-img" style={{width:"100%"}}/>
                <div class="text-block-contact">
                    <center>
                        <h1><strong>Contact Us</strong></h1>
                        <p class="font-contact">We'd Love to hear from you. Here's how you can reach us...</p>
                        {/* address */}
                        <img src={icon1} alt="address" width="40px" height="40px"/>
                        <p class="font"><strong>ADDRESS</strong></p>
                        <p class="font-p"><strong>Beirut, Lebanon</strong></p>
                        {/* phone */}
                        <img src={icon2} alt="phone" width="40px" height="40px"/>
                        <br/>
                        <p class="font"><strong>TEXT ME</strong></p>
                        <p class="font-p"><strong>+961 70 246 709</strong></p>
                        <br/>
                        {/* email */}
                        <img src={icon3} alt="address" width="40px" height="40px"/>
                        <br/>
                        <p class="font"><strong>EMAIL</strong></p>
                        <p class="font-p"><strong>majedmoura99@gmail.com</strong></p>
                    </center>
                </div>
            </div>
        );
    }
}