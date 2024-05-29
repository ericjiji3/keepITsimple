import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MicrosoftBIVideos from './MicrosoftBIVideos';
import { getVideoSection } from "@/utils/contentful";


  

export default function ChatbotCards(props){
    return(
        <div className="bg-blue mt-[-100px] relative z-0">
            <div className="max-w-[1200px] xl:max-w-[1100px] mx-auto pt-[150px] pb-[100px]">
                {/* <h1 className="text-white text-2xl text-center mb-[100px]">{props.cardsContent.fields.heading1}</h1> */}
                <div className='flex justify-center space-x-6 2xl:mx-[0px]'>
                    {/* {props.cardsContent.fields.chatbotCard.map((card, index) => (
                        <div key={index} className='flex-1 bg-white rounded-md shadow-card'>
                            <Image className="w-full rounded-tl-md rounded-tr-md" src={'https:' + card.fields.cardImage.fields.file.url} width={card.fields.cardImage.fields.file.details.image.width} height={card.fields.cardImage.fields.file.details.image.height} alt={card.fields.cardImage.fields.file.fileName}/>
                            <div className='flex justify-center px-[30px] py-[20px] border-b-[0.5px] border-black'>
                                <h1 className='text-2xl'>{card.fields.emoji}</h1>
                                <h1 className='text-xl'>{card.fields.heading}</h1>
                            </div>
                            <span className='mx-[15px]'>{documentToReactComponents(card.fields.list)}</span>
                        </div>
                    ))} */}
                    <MicrosoftBIVideos vidsContent={props.cardsContent}/>
                </div>
                {/* <h1 className="text-white text-2xl text-center mt-[100px] pb-[25px]">{props.cardsContent.fields.heading2}</h1> */}
            </div>
            
        </div>
    )
}