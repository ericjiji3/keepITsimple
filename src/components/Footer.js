import Image from "next/image";
import Logo from '../../public/logo.png';
import Facebook from '../../public/fb-icon.png';
import Ig from '../../public/insta-icon.png';
import Twitter from '../../public/twitter-icon.png';

export default function Footer(){
    return(
        <div className="bg-blue pt-[150px] pb-[20px] mt-[-140px]">
            <div className="max-w-[1200px] xl:max-w-[1100px] flex justify-between mx-auto">
                <div className="flex items-center">
                    <Image className="rounded-[5px]" src={Logo} width={20} height={20} alt="logo"/>
                    <span className="text-white text-xs ml-[10px]">©2024 KeepITSimple - All rights reserved.</span>
                </div>
                <div className="flex self-center">
                    <Image src={Facebook} width={20} height={20} alt="logo"/>
                    <Image className="mx-[5px]" src={Ig} width={20} height={20} alt="logo"/>
                    <Image src={Twitter} width={20} height={20} alt="logo"/>
                </div>
            </div>
        </div>
    )
}