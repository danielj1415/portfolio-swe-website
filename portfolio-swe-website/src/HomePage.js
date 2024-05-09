import './HomePage.css';

function HomePage(){
    return(
        <div>
            <div className = "mainContainer">
                <div className = "navigationBar">
                    <p className = "navigationBarText">Daniel Jong</p>
                    <div className = "navigationBarRightItems">
                        <p className = "navigationBarText">Work</p>
                        <p className = "navigationBarText navigationBarAbout">About</p>
                        <p className = "navigationBarText">Contact</p>
                    </div>
                </div>
                <div className = "heroSection">
                    <p className = "heroSectionHeadingText">Hello, I'm Daniel!</p>
                    <div className = "heroSectionSubheadingContainer">
                        <p className = "heroSectionSubheadingText">Software engineer passionate about turning ideas into designs and designs into code.</p>
                    </div>
                </div>
                <div className = "projectsSection">
                    {/*Project: Plant Hydroponics App*/}
                    <div className = "projectContainer">
                        <div className = "projectText">
                            <p className = "projectName">Plant Hydroponics App</p>
                            <div className = "projectTagContainer">
                                <div className = "projectTagPlant">
                                    <p className = "projectTagText">UI Design</p>
                                </div>
                                <div className = "projectTagPlant">
                                    <p className = "projectTagText">Mobile Development</p>
                                </div>
                            </div>
                            <div className = "projectDescriptionContainer">
                                <p className = "projectDescriptionText">Application that enables users to change the pH of water for their hydroponics system.</p>
                            </div>
                        </div>
                        <div className = "projectImagePlant">

                        </div>
                    </div>
                    {/*Project: Spotify Clone Website*/}
                    <div className = "projectContainer">
                        <div className = "projectText">
                            <p className = "projectName">Spotify Clone Website</p>
                            <div className = "projectTagContainer">
                                <div className = "projectTagSpotify">
                                    <p className = "projectTagText">Web Development</p>
                                </div>
                            </div>
                            <div className = "projectDescriptionContainer">
                                <p className = "projectDescriptionText">Website that aims to replicate the functionality and interface of the Spotify Web Player. </p>
                            </div>
                        </div>
                        <div className = "projectImageSpotify">

                        </div>
                    </div>
                </div>
                <div className = "footerSection">
                    <div className = "footerLargeContainer">
                        <div className = "footerTextContainer">
                            <p className = "footerText">Turning ideas into designs and designs into code.</p>
                        </div>
                        <p className = "footerEmail">email: danielj1415@gmail.com</p>
                        <p className = "footerPhone">phone: (626) 518-2422</p>
                        <div className = "iconContainer">
                            <img className = "imageIcon"/>
                            <img className = "imageIcon"/>
                        </div>
                    </div>
                    <p className = "footerText2">Made with 🧋☕️✨ </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage