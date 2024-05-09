import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Header(){
    return(
        <div className="px-[100px] py-[30px] flex items-center justify-between shadow-3xl">
            <div className="flex flex-1 items-center">
                <Image src={Logo} width={25} alt="logo"/>
                <span className="ml-[10px]">KeepITSimple</span>
            </div>
            <div className="flex-1 text-center">
                <a className="mx-[12.5px]"><span>Chatbot</span></a>
                <a className="mx-[12.5px]"><span>Power BI</span></a>
            </div>
            <div className="flex-1 text-end">
                <a>
                    Book a Demo
                </a>
            </div>
        </div>
    )
}