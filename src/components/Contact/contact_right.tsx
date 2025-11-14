import open_envelope from "../../Images/open_envelope.png"
import Contact_form from "./contact_form";
import magic from "../../Images/magic_wand.png"


const Right_side_contact = () => {

    return (
        <>

        <div className="w-full flex justify-center">

            <div className="w-[10%] mm:w-[12%] xl:w-[10%]">
                <img src={open_envelope} className="xl:p-2 ml:p-2" />
            </div>

        </div>

        <div className="w-full flex justify-center">
            <div className="xl:w-[60%] flex mm:w-[90%] ml:w-[90%]">
                <div className="w-[90%] flex items-center justify-center ml:w-full ml:flex ml:justify-center ml:items-center">
                    <p className="font-Poet text-[#0c1931] mm:text-[21px] ml:text-[22px] xl:text-[22px] p-2 2xl:text-[25px]">Send Me Some Magic !</p>
                </div>

                <div className="w-[10%] flex items-center ml:w-[10%]">
                    <img src={magic} className="xl:p-1 mm:p-1.5 ml:p-1.5"/>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-center">
            <Contact_form />
        </div>

        </>
    )
}

export default Right_side_contact