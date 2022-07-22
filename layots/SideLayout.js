import NavBar from "../components/aside/NavBar";
import Background from "../components/backgourd/Background";
import NavUser from "../components/aside/user/NavUser";


export default function SideLayout({children}) {

    return(
        <div className={' h-screen mx-auto flex   relative overflow-hidden'}>
            <aside className={'bg-gray-700 md:bg-aside px-2 py-2 md:px-0 md:py-0 flex justify-between md:block fixed w-full md:w-1/6 md:h-screen  md:relative z-[90] '}>
                <NavBar />
                <NavUser />
            </aside>
            <Background />
            {children}
        </div>
    )
}
