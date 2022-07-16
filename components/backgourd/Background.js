import Image from "next/image";


export default function Background() {
    return(
        <div  className={'absolute w-screen h-screen bg-gray-800 -z-10'}>
            {/*<Image*/}
            {/*    className={'opacity-60 '}*/}
            {/*    src={'/img/bg.png'}*/}
            {/*    layout={'fill'}*/}
            {/*/>*/}
        </div>
    )
}