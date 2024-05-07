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
                <p className = "heroSectionHeadingText">Hello, I'm Daniel!</p>
                <div className = "heroSectionSubheadingContainer">
                    <p className = "heroSectionSubheadingText">Software engineer passionate about turning ideas into designs and designs into code.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage