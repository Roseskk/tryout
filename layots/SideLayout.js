import {useRouter} from "next/router";

import Image from "next/image";
import NavBar from "../components/aside/NavBar";
import Background from "../components/backgourd/Background";
import NavUser from "../components/aside/user/NavUser";


export default function SideLayout({children}) {
    const router = useRouter()

    return(
        <div className={' h-screen mx-auto flex  relative overflow-hidden'}>
            <aside className={'bg-aside w-1/6 h-screen relative'}>
                <NavBar />
                <NavUser />
            </aside>
            <Background />
            {children}
        </div>
    )
}
