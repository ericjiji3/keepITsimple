import Image from "next/image";
import Logo from '../../public/logo.png';

export default function Footer(){
    return(
        <div className="bg-blue pt-[150px] pb-[15px] mt-[-140px]">
            <div className="max-w-[1200px] xl:max-w-[1100px] flex justify-between mx-auto">
                <div className="flex items-center">
                    <Image src={Logo} width={20} height={20} alt="logo"/>
                    <span className="text-white text-xs ml-[10px]">©2024 KeepITSimple - All rights reserved.</span>
                </div>
                <div>
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    )
}