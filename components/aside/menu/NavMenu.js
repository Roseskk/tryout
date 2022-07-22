import Image from "next/image";
import {useRouter} from "next/router";


export default function NavMenu() {
    const router = useRouter();
    return(
        <div className={'flex  md:border  md:p-10  md:ml-2 md:mr-2 rounded md:flex-col gap-4 md:mt-4'}>
            <button onClick={()=> router.push(`/explore`)} className={'flex items-center md:pl-7 gap-5 hover:animate-pulse'}>
                <div className={'hidden md:block'}>
                    <Image src={'/ico/explore.svg'} layout={"fixed"} className={'md:hidden xl:block'}  width={'10'} height={'10'} />
                </div>
                <span className={'text-white text-sm font-montserratRegular'}>Проекты</span>
            </button>
            <button className={'flex items-center md:pl-7 gap-5 hover:animate-pulse'}>
                <div  className={'hidden md:block'}>
                    <Image src={'/ico/search.svg'} layout={"fixed"}   width={'10'} height={'10'} />
                </div>
                <span className={'text-white text-sm font-montserratRegular'}>Поиск</span>
            </button>
        </div>
    )
}