import Image from "next/image";

import SideLayout from "../../layots/SideLayout";



export default function CardInfo(props) {
    return(
        <SideLayout>
            <div className={'relative flex justify-center  w-full p-5 '}>
                <div className={'w-card  h-full bg-purple-600 rounded overflow-y-scroll'}>
                    <div  className={'h-96 bg-black'}>
                        <span className={'text-white text-8xl  font-montserratBold'}>IMAGE SLIDER</span>
                    </div>
                    <div className={'flex flex-col gap-4 pl-2 pr-2 mt-4 overflow-hidden'}>
                        <div className={'flex gap-4'}>
                            <Image src={'/ico/tag.svg'}  width={20} height={20} />
                            <span className={'text-white font-montserratRegular'}>Название: Illustrator</span>
                        </div>
                        <div className={'flex gap-4'}>
                            <Image src={'/ico/person.svg'}  width={20} height={20} />
                            <span className={'text-white font-montserratRegular'}>Автор: Ivan Ivanov</span>
                        </div>
                        <div className={'relative flex items-start gap-4'}>
                            <Image className={'translate-y-0.5'} src={'/ico/nestedlist.svg'}  width={20} height={20} />
                            <div className={''}>
                                <span className={'text-white font-montserratRegular'}>Программы</span>
                                <ul className={'flex flex-col font-montserratThin  text-gray-400 list-disc'}>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Indesign</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'flex items-start gap-4 break-words  p-2'}>
                            <div className={'translate-y-0.5 w-10'}>
                                <Image src={'/ico/info.svg'}   width={20} height={20} />
                            </div>
                            <span className={'text-white font-montserratRegular break-words'}>
                                lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips v
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SideLayout>
    )
}


const getServerSideProps = (ctx) => {
    return{
        props:{

        }
    }
}