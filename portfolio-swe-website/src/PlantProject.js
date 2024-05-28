import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import imageDaniel from "./assets/images/AboutMePicture.png";
import plantProjectImage from "./assets/images/imagePlantProjectCover2.png";
import plantProjectImageUserFlow from "./assets/images/imagePlantProjectUserFlow.png";
import imagePlantProjectMidFidScreens from "./assets/images/imagePlantProjectMidFidScreens.png";
import { Outlet, Link } from "react-router-dom"; 
import "./PlantProject.css";

function PlantProject() {
    return(
        <div>
            <div className = "mainContainer">
                <div className = "navigationBar">
                    <Link className = "navigationBarText" to ="/">Daniel Jong</Link>
                    <div className = "navigationBarRightItems">
                        <Link className = "navigationBarText underlined" to ="/">Work</Link>
                        <Link className = "navigationBarAbout" to="/about">About</Link>
                        <a className="navigationBarText resume" href="https://docs.google.com/document/d/12nxaGq7QP7QM-EPaiysvYYUrQqJ_O-GYS3DdN2PZnwk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        <p className = "navigationBarText">Contact</p>
                    </div>
                </div>
                <div className = "projectContentContainer">
                    <div className = "projectContentContainerTitleInfo">
                        <div className = "projectContentTitleHeading">
                            <p className = "bold px44 marginBottom4px">Plant Hydroponics App</p>
                            <p className = "px16 test">A mobile application used in conjunction with an electronic device that allows users to to track and set the pH value of water in a hydroponic system.</p>
                        </div>
                        <div>
                            <div className = "projectContentTimeline">
                                <p className = "bold marginBottom4px">Timeline</p>
                                <p className = "px16">October 2023 - March 2024</p>
                            </div>
                            <div className = "projectContentTools">
                                <p className = "bold marginBottom4px">Design & Development Tools</p>
                                <p className = "px16">React Native</p>
                                <p className = "px16">Firebase</p>
                                <p className = "px16">Figma</p>
                            </div>
                        </div>
                    </div>
                    <img className = "imagePlantProject" src = {plantProjectImage}/>
                    <div className = "horizontal marginTop72px">
                        <p className = "bold px40 marginBottom8px">Overview</p>
                        <div className = "dividerOverview"></div>
                    </div>
                    <p className = "semibold px30">Project Background</p>
                    <p className = "bigParagraph">This project was created in my senior year of university for my ‘Senior Capstone Project’ course where students in a team build a project that encapsulates everything learned from their courses. The project that my team and I built was a device that could monitor the pH and change the pH of water in a plant hydroponics system. This device was connected to pumps that can add basic and acidic solutions. While the two other team members focused on building the physical structure and integrating the electronic components onto a Raspberry Pi, my role involved designing and developing the user-interface as well as integrating Firebase into the application.</p>
                    <div className = "horizontal marginTop72px">
                        <p className = "bold px40 marginBottom8px">Design Process</p>
                        <div className = "dividerDesignProcess"></div>
                    </div>
                    <p className = "semibold px30">User Flow</p>
                    <p className = "bigParagraph">The application is designed to utilize user authentication, enabling users to create an account or sign in. Once authenticated, they are directed to the main screen where they can navigate to other sections. Users can choose the 'Plants' screen to add plants or modify their plants' pH value. Additionally, users can sign out from the application using the 'Settings' screen. These functionalities are incorporated into a simple user-flow diagram to depict the navigation for users.</p>
                    <img className = "marginTop16px" src = {plantProjectImageUserFlow}/>
                    <p className = "semibold px30 marginTop48px marginBottom8px">Mid-Fidelity Wireframes</p>
                    <p className = "bigParagraph">With the user-flow diagram designed, I was able to identify the key screens that needed to be created. Each screen began as an initial sketch and was then developed into a mid-fidelity wireframe. These wireframes were designed to showcase a simple interface while retaining all the necessary functionalities for the users.</p>
                    <img className = "marginTop16px"src = {imagePlantProjectMidFidScreens}/>
                </div>
            </div>
        </div>
    )
}

export default PlantProject 