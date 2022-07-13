import Image from "next/image";
import SideLayout from "../../layots/SideLayout";

import {motion} from "framer-motion";


export default function CardInfo(props) {
    return(
        <SideLayout>
            <motion.div
                initial={{translateX: '500px'}}
                animate={{translateX: '0px'}}
                className={'relative flex justify-center gap-2 w-full p-5 '}
            >
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
                        <div className={'flex items-start gap-4 break-words  '}>
                            <div className={'translate-y-0.5 w-10'}>
                                <Image src={'/ico/info.svg'}   width={20} height={20} />
                            </div>
                            <span className={'text-white font-montserratRegular break-words'}>
                                lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips v
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'w-3/12 p-2 bg-white h-36 rounded flex justify-center items-center flex-col opacity-60 hover:opacity-100 transition delay-300 ease-in-out gap-3'}>
                    <span className={'text-7xl font-montserratThin'}>15р</span>
                    <button className={'p-2 bg-purple-500 rounded text-white font-montserratRegular'}>Купить</button>
                </div>
            </motion.div>
         </SideLayout>
    )
}

export const getStaticPaths = async () =>  {
    const response = await fetch(`http://172.16.10.5:8083/api/r/form/path`);
    const paths = await response.json();
    const path = paths.map((item)=>({
        params: { id: item.id.toString() }
    }));
    return{
        paths: [...path],
        fallback: false
    }
}
export const  getStaticProps = async (ctx) =>  {
    const response = await fetch(`http://172.16.10.5:8083/api/r/form/search/${ctx.params.id}`)
    const students = await response.json()
    return{
        props: {
            students
        }
    }
}