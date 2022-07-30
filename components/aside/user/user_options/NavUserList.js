import {useSelector,useDispatch} from "react-redux";
import {navReducer} from "../../../../redux/slices/navSlice";

export default function NavUserList() {
    const dispatch = useDispatch();
    const navList = useSelector((state)=> state.nav.navlist);
    const isNavListButton = useSelector((state)=> state.nav.navListExitButton);

    return(
        <ul className={`md:relative text-[10px]  absolute  flex items-center right-0 -bottom-5 md:right-1 md:bottom-8  opacity-100 cursor-pointer   flex-col  ${navList} transition ease-in-out delay-300 rounded p-[2px] `}>
            <li className={`overflow-hidden opacity-20 hover:opacity-100 bg-white pl-2 pr-2  rounded transition ease-in-out delay-300`}>
                <span className={'text-black font-montserratBold text-[10px]'}>Log Out!</span>
            </li>
            <li className={`absolute text-black font-montserratBold text-2xl -left-[15px] -top-[5px] ${isNavListButton} hover:rotate-180 hover:text-red-500 hover:scale-150 transition ease-in-out `}>
                <button onClick={()=> dispatch(navReducer({isNavList: 'opacity-100 xl:animate-sideList hidden',isNavListButton: 'opacity-100'}))}>&times;</button>
            </li>
        </ul>
    )
}