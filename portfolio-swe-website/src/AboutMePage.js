import "./AboutMePage.css";
import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import { Outlet, Link } from "react-router-dom"; 

function AboutMePage(){
    return(
    <div>
        <div className = "mainContainer">
                <div className = "navigationBar">
                    <p className = "navigationBarText">Daniel Jong</p>
                    <div className = "navigationBarRightItems">
                        <p className = "navigationBarText underlined">Work</p>
                        <Link className = "navigationBarAbout" to="/about">About</Link>
                        <p className = "navigationBarText">Contact</p>
                    </div>
                </div>
                <div className = "container">
                    <p>Hello, I'm Daniel</p>
                    <p>I am a software engineer based in the Los Angeles area. My journey in coding began back in 2019 with a simple Hello World in C++ and has now evolved to more complex programs.</p>
                    <p>I am passionate about bringing interface designs to life in code and connecting the front-end part of applications to back-end databases and technologies. In addition, I am experienced in product design to create beautiful user-interfaces for websites and mobile applications.</p>
                </div>
                
                <div className = "footerSection">
                    <div className = "footerLargeContainer">
                        <div className = "footerTextContainer">
                            <p className = "footerText">Turning ideas into designs and designs into code.</p>
                        </div>
                        <p className = "footerEmail">email: danielj1415@gmail.com</p>
                        <p className = "footerPhone">phone: (626) 518-2422</p>
                        <div className = "iconContainer">
                            <img src = {iconLinkedIn} className = "imageIcon"/>
                            <img src = {iconGithub} className = "imageIcon"/>
                        </div>
                    </div>
                    <p className = "footerText2">Made with 🧋☕️✨ </p>
                </div>
            </div>
    </div>
    )
}

export default AboutMePage