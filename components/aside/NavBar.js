import NavHead from "./header/NavHead";
import NavMenu from "./menu/NavMenu";


export default function NavBar() {
    return(
        <div className={'flex md:flex-col gap-10 md:gap-40'}>
            <NavHead />
            <NavMenu />
        </div>
    )
}