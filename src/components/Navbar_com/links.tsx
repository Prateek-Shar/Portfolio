import about from "/Images/about _me.png";
import projects from "/Images/project.png";
import contact from "/Images/contact.png";
import menu from "/Images/menu_bt.png";
import close from "/Images/close.png";
import { useRef, useState } from "react";


interface Switch {
    SwitchToAbout : () => void
    SwitchToContact : () => void
    SwitchToProject : () => void
}

const Links_text:React.FC<Switch> = ( {SwitchToAbout , SwitchToContact , SwitchToProject} ) => {

    const Linkref = useRef<HTMLDivElement>(null)

    const [optionDiv , setOptionDiv] = useState(false)
    const [MenuDiv , setMenuDiv] = useState(true)
    const [closeMenuDiv , setCloseMenuDiv] = useState(false)

    
    const handleClickToOptions = () => {
        setOptionDiv(true)

        setMenuDiv(false)

        setCloseMenuDiv(true)

        if(Linkref.current) {
            Linkref.current.style.borderBottomLeftRadius = "0px";
            Linkref.current.style.borderBottomRightRadius = "0px";
        }
    }


    const closeMenu = () => {
        setOptionDiv(false)

        setMenuDiv(true)

        setCloseMenuDiv(false)

        if(Linkref.current) {
            Linkref.current.style.borderBottomLeftRadius = "10px";
            Linkref.current.style.borderBottomRightRadius = "10px";
        }
    }


    const closeIcon = () => {
        setCloseMenuDiv(false)

        setMenuDiv(true)

        setOptionDiv(false)

        if(Linkref.current) {
            Linkref.current.style.borderBottomLeftRadius = "10px";
            Linkref.current.style.borderBottomRightRadius = "10px";
        }
    }



    return (
    
    <>
        <div className="xl:w-full xl:flex xl:justify-evenly ml:hidden mm:hidden 2xl:flex 2xl:w-[80%]">

            {/* About Div */}
            <div className="2xl:w-[24%] 2xl:flex 2xl:flex-col hover:cursor-pointer" onClick={SwitchToAbout} >
                <div className="2xl:w-full 2xl:flex">
                    <div className="2xl:w-[30%]">
                        <img src={about} className="2xl:object-contain 2xl:w-[90%] 2xl:p-[6px]"/>
                    </div>

                    <div className="2xl:w-[70%] 2xl:flex 2xl:items-center hover:to-default">
                        <p className="font-Poppins 2xl:text-[18px] 2xl:pl-1 text-[#0c1931] hover:to-default">About</p>
                    </div>
                </div>
            </div>


            {/* Project Div */}
            <div className="2xl:w-[23%] 2xl:flex 2xl:flex-col hover:cursor-pointer" onClick={SwitchToProject} >
                <div className="2xl:w-full 2xl:flex">
                    <div className="2xl:w-[30%] 2xl:flex 2xl:justify-center">
                        <img src={projects} className="2xl:object-contain 2xl:w-full 2xl:p-0"/>
                    </div>

                    <div className="2xl:w-[70%] 2xl:flex 2xl:items-center hover:cursor-pointer">
                        <p className="font-Poppins text-[17px] 2xl:pl-1 text-[#0c1931 ">Projects</p>
                    </div>
                </div>  
            </div>


            {/* Contact Div */}
            <div className="2xl:w-[24%] 2xl:flex 2xl:flex-col hover:cursor-pointer" onClick={SwitchToContact} >
                <div className="2xl:w-full 2xl:flex">
                    <div className="w-[30%]">
                        <img src={contact} className="2xl:object-contain 2xl:w-[90%] 2xl:p-[6px]"/>
                    </div>

                    <div className="2xl:w-[70%] 2xl:flex 2xl:items-center hover:cursor-pointer">
                        <p className="font-Poppins text-[16px] hover:cursor-pointer">Contact</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="ml:w-full mm:w-full w-full ml:flex mm:flex lg:hidden button-gradient relative rounded-[10px] mt-1 mb-1 shadow-md" ref={Linkref}>
            
            <div className="w-[80%] flex justify-center p-3">
                <p className="font-Poppins text-[12px] mm:text-[11px] ml:text-[12px] text-[#0c1931]">Quick Links</p>
            </div>

            {MenuDiv && (
            <div className="w-[12%] flex justify-center items-center">
                <img src={menu} className="" onClick={handleClickToOptions} />
            </div>
            )}

            {closeMenuDiv && (
            <div className="w-[9%] flex justify-center items-center">
                <img src={close} onClick={closeMenu} />
            </div>  
            )}

            {optionDiv && (
            <div className="w-full absolute flex-col top-9 z-50 button-gradient rounded-b-[10px]">
                <div className="w-full p-1 flex justify-center">
                    <p className="font-Poppins text-[14px] p-1" onClick={()=>{  closeIcon() , SwitchToAbout() }}>About</p>
                </div>
                <div className="w-full p-1 flex justify-center">
                    <p className="font-Poppins text-[14px] p-1" onClick={() => { closeIcon() , SwitchToProject() }}>Project</p>
                </div>
                <div className="w-full flex justify-center">
                    <p className="font-Poppins text-[14px] pt-2 pb-2" onClick={()=> { closeIcon() , SwitchToContact() }}>Contact</p>
                </div>
            </div>
            )}  

        </div>

    </>

    )
}

export default Links_text;