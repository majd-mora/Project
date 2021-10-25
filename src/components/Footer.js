import React, { Component } from 'react';
import { GoLocation } from 'react-icons/go';


export default class Footer extends Component {

    render() {

        return (

            <div>

                {/**Icons*/}

                <div class="text-center p-3" style={{background: "black"}}>

                    <h5 style={{color: "white"}}><strong>Get In Touch:</strong></h5>

                    <GoLocation color="white"/><p style={{color: "white"}}>Beirut, Lebanon</p>

                    <h4 style={{color: "white"}}>Follow Us To Get All New</h4>

                    <a href="https://www.facebook.com/majd.mora.7" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="icons/facebook.png" alt="facebook" width="30px" height="30px"/></a>

                    <a href="mailto:majedmoura99@gmail.com" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="icons/gmail.png" alt="gmail" width="40px" height="40px"/></a>

                    <a href="https://www.instagram.com/majd.mora/" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="icons/instagram.png" alt="instagram" width="32px" height="32px"/></a>

                    <a href="https://github.com/Majd-Mora" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="icons/github.png" alt="github" width="32px" height="32px"/></a>

                    <a href="https://wa.me/+96170246709" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="icons/whatsapp.png" alt="whatsapp" width="30px" height="30px"/></a>

                    {/* <a href="https://twitter/myUsername" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="./icons/vk.png"/></a>

                    <a href="https://linkedIn/myUsername" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="./icons/twitter.png"/></a> */}

                    <br/>

                    <p style={{color: "white"}}><em>© Copyright 2021.<br/>All rights reserved.</em></p>

                </div>

            </div>

        );

    }

}