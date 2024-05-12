import "./AboutMePage.css";
import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import imageDaniel from "./assets/images/AboutMePicture.png";
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
                <div className = "aboutMeFirstSectionContainer">
                    <div className = "aboutMeFirstSectionText">
                        <p className = "aboutMeHeading">Hello, I'm Daniel!</p>
                        <div className = "aboutMeParagraphContainer">
                            <p className = "aboutMeParagraph space">I am a software engineer based in the Los Angeles area. My journey in coding began back in 2019 with a simple Hello World in C++ and has now evolved to more complex programs.</p>
                            <p className = "aboutMeParagraph">I am passionate about bringing interface designs to life in code and connecting the front-end part of applications to back-end databases and technologies. In addition, I am experienced in product design to create beautiful user-interfaces for websites and mobile applications.</p>
                        </div>
                        <div className = "containerSkillsEducation">
                            <div className = "skillsContainer">
                                <p className = "aboutMeHeading2">Skills</p>
                                <p className = "aboutMeParagraph">React Native</p>
                                <p className = "aboutMeParagraph">React</p>
                                <p className = "aboutMeParagraph">Firebase</p>
                                <p className = "aboutMeParagraph">C++/C</p>
                                <p className = "aboutMeParagraph">Python</p>
                                <p className = "aboutMeParagraph">Flutter</p>
                            </div>
                            <div className = "educationContainer">
                                <p className = "aboutMeHeading2">Education</p>
                                <p className = "aboutMeHeading2-5">Bachelor's Degree in Computer Engineering</p>
                                <p className = "aboutMeParagraph">University of Califoria, Irvine</p>
                                <p className = "aboutMeParagraph">2021 - 2024</p>
                            </div>
                        </div>
                    </div>
                    <img className = "imageDaniel" src = {imageDaniel}/>
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