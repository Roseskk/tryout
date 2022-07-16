import Image from "next/image";
import {useRouter} from "next/router";


export default function NavMenu() {
    const router = useRouter();
    return(
        <div className={'flex justify-center border p-10  ml-2 mr-2 rounded flex-col gap-4 mt-4'}>
            <button onClick={()=> router.push(`/explore`)} className={'flex items-center pl-7 gap-5 hover:animate-pulse'}>
                <Image src={'/ico/explore.svg'}  width={'10'} height={'10'} />
                <span className={'text-white text-sm font-montserratRegular'}>Проекты</span>
            </button>
            <button className={'flex items-center pl-7 gap-5 hover:animate-pulse'}>
                <Image src={'/ico/search.svg'}  width={'10'} height={'10'}  className={''}/>
                <span className={'text-white text-sm font-montserratRegular'}>Поиск</span>
            </button>
        </div>
    )
}