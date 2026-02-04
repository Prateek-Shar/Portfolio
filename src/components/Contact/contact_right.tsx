import open_envelope from "/Images/open_envelope.png"
import Contact_form from "./contact_form";
import magic from "/Images/magic_wand.png"


const Right_side_contact = () => {

    return (
        <>

        <div className="w-full flex justify-center">

            <div className="mm:w-[10%] xl:w-[10%] ml:w-[13%]">
                <img src={open_envelope} className="xl:p-2 ml:p-2" />
            </div>

        </div>

        <div className="w-full flex justify-center xl:mt-0 mm:mt-2">
            <div className="xl:w-[60%] flex mm:w-[90%] ml:w-[90%] justify-center">
                <div className="xl:w-[90%] mm:w-[78%] ml:w-[78%] flex items-center justify-center ml:flex ml:justify-center ml:items-center">
                    <p className="font-Poet text-[#0c1931] mm:text-[21px] ml:text-[24px] xl:text-[28px] p-2">Send Me Some Magic !</p>
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