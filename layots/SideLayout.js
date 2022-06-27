import Image from "next/image";


export default function SideLayout({children}) {
    return(
        <div className={'max-w-1600 h-screen mx-auto flex  relative overflow-hidden'}>
            <aside className={'bg-aside w-1/6 h-screen relative'}>
                <h1 className={'font-montserratBold text-center text-white text-h'}>TRY OUT!</h1>
                <span className={'flex items-center justify-center text-white text-xl tracking-widest font-montserratThin'}>Ivan Ivanov</span>
                <div className={'flex flex-col items-center justify-center mt-5'}>
                    <input className={'text-lg  rounded p-2 bg-transparent placeholder:text-white border-b-white border-b tracking-widest placeholder-white text-white focus:outline-none focus:ring-0  placeholder:opacity-50'} placeholder={'Pink UI...'} />
                </div>
                <div className={'absolute bottom-3 flex items-center justify-center w-full'}>
                    <button className={'font-montserratThin text-white flex items-center justify-center'}>
                        <Image src={'/ico/person.svg'} width={50} height={50} />
                    </button>
                </div>
            </aside>
            <div className={'absolute w-screen h-screen bg-black -z-10'}>
                <Image
                    className={'opacity-60 '}
                    src={'/img/bg.png'}
                    layout={'fill'}
                />
            </div>
            {children}
        </div>
    )
}
