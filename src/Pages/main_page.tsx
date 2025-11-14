import Links_text from "../components/Navbar_com/links";
import Resume_Button from "../components/Navbar_com/resume_bt";
import Banner from "../components/Hero_comp/banner";
import About from "../components/About/about_me";
import Skill_box from "../components/About/skill_box";
import Skill_showcase from "../components/About/skill_showcase";
import Project_head from "../components/Project/project_head";
import Project_box from "../components/Project/project_box";
import Contact_head from "../components/Contact/contact_head";
import Left_side_contact from "../components/Contact/contact_left";
import Right_side_contact from "../components/Contact/contact_right";
import star from "../Images/star.png";
import phone from "../Images/phone.png"
import confetti from "../Images/confetti.png"
import project from "../Images/project.png"
import smile from "../Images/smile.png"
import ballons from "../Images/balloons.png"
import More_project_bt from "../components/Project/more_project_bt"
import rocket_bg from "../Images/rocket_bg.png";
import Footer_para from "../components/Footer/footer_para";
import { useRef } from 'react';
import Lenis from 'lenis'
import Quick_links from "../components/Footer/Quick_links";
import Social_links from "../components/Footer/Social_links";
import Intro_text from "../components/Navbar_com/intro";



const MainPage = () => {

    const aboutRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const projectRef = useRef<HTMLDivElement>(null)

    const navbarRef = useRef<HTMLDivElement>(null)

    const ScrollToAbout = () => {
        aboutRef.current?.scrollIntoView( {behavior : "smooth"} )
    }

    const ScrollToProject = () => {
        projectRef.current?.scrollIntoView( {behavior : "smooth"} )
    }

    const ScrollToContact = () => {
        contactRef.current?.scrollIntoView( {behavior : "smooth"} )
    }
    
    const ScrollToHome = () => {
        navbarRef.current?.scrollIntoView( {behavior : "smooth"} )
    }


    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
        duration : .5
    });

    lenis.on("scroll", () => {
        return;
    })

    return (
        <div className="w-full flex flex-col">

            <div className="w-full ml:flex ml:justify-evenly ml:items-center flex justify-around items-center z-50 shadow-lg shadow-animated-gradient-bt bg-[#e0e4eb]" ref={navbarRef}>
                <div className="xl:flex xl:m-2 xl:w-[13%] 2xl:w-[11%] 2xl:flex mm:hidden ml:hidden p-1">    
                    <Intro_text />
                </div>

                <div className="ml:w-[30%] mm:w-[30%] xl:w-[35%] mm:flex xl:flex 2xl:flex 2xl:jutify-center flex items-center justify-evenly">
                    <Links_text  SwitchToAbout={ScrollToAbout}  SwitchToContact={ScrollToContact} SwitchToProject={ScrollToProject} />
                </div>

                <div className="ml:w-[25%] mm:w-[27%] flex items-center justify-center xl:w-[10%]">
                    <Resume_Button />
                </div>
            </div>


            <div className="w-full">
                <Banner />
            </div>

            <div className="w-full relative bg-white flex flex-col" 
            ref={aboutRef}>

                <div className="w-[3%] h-[4%] absolute 2xl:left-20 xl:left-10 left-20 top-40 opacity-50">
                    <img src={ballons} className="p-1"/>
                </div>

                <div className="w-[3%] h-[4%] absolute xl:right-10 right-20 2xl:right-20 xl:top-140 :top-80 opacity-50">
                    <img src={smile} className="p-1"/>
                </div>

                <div className="w-[3%] h-[4%] absolute xl:left-10 2xl:left-20 left-20 bottom-100 opacity-50">
                    <img src={smile} className="p-1"/>
                </div>

                <div className="w-[3%] h-[4%] absolute 2xl:right-20 xl:right-10 bottom-40 opacity-50">
                    <img src={ballons} className="p-1"/>
                </div>

                <div className="w-full">
                    <About />
                </div>

                <div className="w-full">
                    <Skill_box />
                </div>

                <div className="w-full flex justify-center">
                    <Skill_showcase />
                </div>
            </div>

            <div className="w-full flex-col bg-white relative" ref={projectRef} >

                <div className="2xl:w-[2.5%] w-[3%] h-[4%] absolute left-20 top-40 opacity-50">
                    <img src={project} className="p-1"/>
                </div>

                <div className="2xl:w-[2.5%] w-[3%] h-[4%] absolute right-15 bottom-20 opacity-50">
                    <img src={rocket_bg} className="p-1"/>
                </div>

                <div className="w-full flex justify-center mt-20">
                    <Project_head />
                </div>

                
                <div className="w-full flex justify-center mt-5">
                    <Project_box />
                </div>  
                

                <div className="w-full flex justify-center mt-12">
                    <More_project_bt />
                </div>

            </div>

            <div className="w-full flex justify-center relative" ref={contactRef}>

                <div className="w-[3%] h-[4%]  absolute left-20 top-20 opacity-50">
                    <img src={star} className="p-1"/>
                </div>

                <div className="w-[3%] h-[4%]  absolute top-120 2xl:right-20 right-10 opacity-50">
                    <img src={phone} className="p-1"/>
                </div>

                <div className="w-[3%] h-[4%] absolute top-250 2xl:left-20 left-20 opacity-50">
                    <img src={confetti} className="p-1"/>
                </div>

                <div className="xl:w-[80%] 2xl:w-[60%] flex flex-col bg-[#e0e4eb] mb-20 mt-50 border-2 border-[#e5e7eb] rounded-[12px] mm:w-[90%]">
                    <div className="w-full">
                        <Contact_head />
                    </div>

                    <div className="w-full flex">
                        <div className="w-[50%] mt-12 xl:flex mm:hidden ml:hidden">
                            <Left_side_contact />
                        </div>

                        <div className="xl:w-[50%] mt-12 mm:w-full ml:w-full">
                            <Right_side_contact />
                        </div>      
                    </div>
                    
                </div>
            </div>


            <div className="w-full flex justify-center items-center bg-[#1a212d] ">
                <div className="xl:w-[90%] ml:w-[95%] xl:flex xl:flex-row xl:justify-evenly xl:items-center mt-10 mb-10 ml:flex ml:flex-col ml:justify-center ml:items-center mm:w-[90%] mm:justify-center mm:items-center">
                    <div className="xl:w-[30%] ml:w-[90%] mm:w-full">
                        <Footer_para SwitchToHome={ScrollToHome} />
                    </div>

                    <div className="xl:flex xl:items-center ml:hidden mm:hidden">
                        <div className="w-[2px] h-25 bg-[#d9d9d9]" />
                    </div>

                    <div className="xl:w-[30%] ml:w-[90%] ml:mt-10 xl:mt-0 mm:mt-10 mm:w-full">
                        <Quick_links SwitchToAbout={ScrollToAbout}  SwitchToContact={ScrollToContact} SwitchToProject={ScrollToProject}/>
                    </div>
                    
                    <div className="xl:flex xl:items-center ml:hidden">
                        <div className="xl:w-[2px] xl:h-25 bg-[#d9d9d9]" />
                    </div>

                    <div className="xl:w-[25%] ml:w-[90%] ml:mt-12 xl:mt-0 mm:mt-10 mm:w-full">
                        <Social_links />
                    </div>
                </div>


            </div>


        </div>
    )

}

export default MainPage;