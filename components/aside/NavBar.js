import NavHead from "./header/NavHead";
import NavMenu from "./menu/NavMenu";


export default function NavBar() {
    return(
        <div className={'flex flex-col gap-40'}>
            <NavHead />
            <NavMenu />
        </div>
    )
}