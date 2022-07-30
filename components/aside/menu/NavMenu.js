import Image from "next/image";
import {useRouter} from "next/router";


export default function NavMenu() {
    const router = useRouter();
    return(
        <div className={'flex  md:flex-col gap-4 xl:gap-10'}>
            <button onClick={()=> router.push(`/explore`)} className={'flex items-center md:pl-7 gap-5 hover:animate-pulse'}>
                <div className={'hidden tablet:block w-3 h-3 xl:w-5 xl:h-5'}>
                    <Image src={'/ico/explore.svg'}  objectFit={'cover'} layout={'responsive'}  width={'100%'} height={'100%'} />
                </div>
                <span className={'text-white text-sm font-montserratRegular xl:text-[20px]'}>Проекты</span>
            </button>
            <button className={'flex items-center md:pl-7 gap-5 hover:animate-pulse'}>
                <div  className={'hidden tablet:block w-3 h-3 xl:w-5 xl:h-5'}>
                    <Image src={'/ico/search.svg'} objectFit={'cover'} layout={'responsive'}  width={'100%'} height={'100%'} />
                </div>
                <span className={'text-white text-sm font-montserratRegular xl:text-[20px]'}>Поиск</span>
            </button>
            <button className={'flex items-center md:pl-7 gap-5 hover:animate-pulse'}>
                <div  className={'hidden tablet:block w-3 h-3 xl:w-5 xl:h-5'}>
                    <Image src={'/ico/heart.svg'}  objectFit={'cover'} layout={'responsive'}  width={'100%'} height={'100%'} />
                </div>
                <span className={'text-white text-sm font-montserratRegular xl:text-[20px]'}>Избраное</span>
            </button>
        </div>
    )
}