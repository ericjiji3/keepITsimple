import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Header(){
    return(
        <div className="sticky top-0 z-[100] bg-white py-[20px] shadow-3xl">
            <div className="max-w-[350px] md:max-w-[1200px] xl:max-w-[1100px] mx-auto flex items-center justify-between">
                <div>
                    <a className="flex flex-1 items-center text-mobilexl lg:text-lg" href="/">
                    <Image className="rounded-[5px]" src={Logo} width={30} alt="logo"/>
                    <span className="ml-[10px]">Keeping<span className="text-blue">IT</span>Simple</span>
                    </a>
                </div>
 
                <div className="flex-1 text-end font-medium">
                    <a href="#contact" className="bg-blue rounded-md text-white text-mobilexl lg:text-md inline-block w-auto py-[15px] px-[20px] font-bold hover:cursor-pointer">
                        Book a Demo
                    </a>
                </div>
            </div>
            
        </div>
    )
}