import telephone from "/Images/telephone.png"
import handshake from "/Images/handshake.png"


const Contact_head = () => {

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="xl:w-[5%] animate-ph ml:w-[10%] mm:w-[10%]">
                    <img src={telephone}  className="p-1"/>
                </div>
            </div>

            <div className="w-full flex justify-center mt-3">
                <div className="xl:w-[35%] flex ml:w-[80%] mm:w-[80%]">
                    <div className="xl:w-[82%] flex justify-center items-center ml:w-[85%] mm:w-[85%]">
                        <p className="font-Poppins font-bold text-[#0c1931] xl:text-4xl ml:text-[28px] mm:text-2xl">Let's Be Friends!</p>
                    </div>

                    <div className="xl:w-[18%] flex justify-center ml:w-[15%] mm:w-[15%]">
                        <img src={handshake} className="object-contain w-[70%] p-1"/>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="xl:w-[70%] ml:w-[90%] mm:w-[90%]">
                    <p className="font-Poppins p-4 ml:text-[14px] mm:text-[14px] xl:text-[16px] xl:p-2 xl:mt-2 text-[#282c31] text-center">Got an awesome project? Want to grab virtual tea? Just want to say hi? 1'd
                    love to hear from you! Drop me a line and let's create something amazing together!</p>
                </div>
            </div>
        </>
    )
}

export default Contact_head