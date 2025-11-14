import cool from "../../Images/cool.png"
import hi from "../../Images/human_hi.png"

const About = () => {
    
    return (

        <>

            <div className="w-full flex flex-col mt-20">

                <div className="w-full flex justify-center">
                    <div className="xl:w-[5%] flex items-center ml:w-[15%] mm:w-[15%] 2xl:w-[4%]">
                        <img src={cool} className="p-2"/>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="xl:w-[28%] 2xl:w-[25%] flex items-center ml:w-[70%] mm:w-[70%]">
                        <div className="xl:w-[80%] ml:flex ml:justify-center ml:w-[90%] mm:w-[90%]">
                            <p className="xl:text-3xl text-[#0c1931] font-Poppins font-bold  ml:p-1 ml:text-2xl mm:text-2xl 2xl:text-4xl">About This Human</p>
                        </div>

                        <div className="xl:w-[20%] ml:w-[10%] mm:w-[10%]">
                            <img src={hi} className="xl:object-contain xl:w-[80%] xl:p-2 ml:p-0 mm:p-0"/>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mb-2 ml:mt-2 mm:mt-2">
                    <div className="xl:w-[80%] ml:w-[90%] mm:w-[90%] 2xl:w-[55%]">
                        <p className="xl:p-2 font-Poppins text-[#5c626c] text-[16px] mm:p-2 mm:text-[15px]">Hey there! 👋 I'm a tea-powered developer who believes code should be as fun to write as it is to use! When I'm not turning ideas into reality, you'll find me debugging with rubber ducks 🦆 and high-fiving my computer when it works! 🖥️✋</p>
                    </div>
                </div>

            </div>

        </>
    
    )
}

export default About;   