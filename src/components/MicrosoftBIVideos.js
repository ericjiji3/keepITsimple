import Image from "next/image";

export default function MicrosoftBIVideos(props){
    console.log(props.vidsContent.fields.videoBlock);
    return(
        <div className="max-w-[1200px] mx-auto flex bg-black rounded-lg px-[25px] py-[50px] mt-[50px]">
            {props.vidsContent.fields.videoBlock.map((video, index) => (
              
                <div key={index}>
                    <Image src={"https:" + video.fields.media.fields.file.url} width={video.fields.media.fields.file.details.image.width} height={video.fields.media.fields.file.details.image.height} alt={video.fields.media.fields.file.fileName}/>
                    <h3>{video.fields.heading}</h3>
                    <span>{video.fields.detail}</span>
                </div>
            ))
            }
        </div>
    )
}