import Image from "next/image";


export default function SideLayout({children}) {
    return(
        <div className={'max-w-1600 mx-auto flex  relative'}>
            <aside className={'bg-aside w-56 h-screen'}>
                ASIDE
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