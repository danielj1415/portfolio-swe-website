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
                    <p>Plant Hydroponics App</p>
                    <div>
                        <p>UI Design</p>
                    </div>
                    <div>
                        <p>Mobile Development</p>
                    </div>
                    <div>
                        <p>Application that enables users to change the pH of water for their hydroponics system</p>
                    </div>
                    <div className = "image">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage