import {useSelector,useDispatch} from "react-redux";
import {navReducer} from "../../../../redux/slices/navSlice";

export default function NavUserList() {
    const dispatch = useDispatch();
    const navList = useSelector((state)=> state.nav.navlist);
    const isNavListButton = useSelector((state)=> state.nav.navListExitButton);

    return(
        <ul className={` relative text-xs  absolute  flex items-center right-1 bottom-0 opacity-100 cursor-pointer   flex-col   ${navList} transition ease-in-out delay-300 rounded p-[2px] `}>
            <li className={`overflow-hidden opacity-20 hover:opacity-100 bg-white pl-2 pr-2  rounded transition ease-in-out delay-300`}>
                <span className={'text-black font-montserratThin  '}>Log Out!</span>
            </li>
            <li className={`absolute text-black font-montserratBold text-2xl -left-[15px] -top-[5px] ${isNavListButton} hover:rotate-180 hover:text-red-500 hover:scale-150 transition ease-in-out `}>
                <button onClick={()=> dispatch(navReducer({isNavList: 'opacity-100 animate-sideList',isNavListButton: 'opacity-100'}))}>&times;</button>
            </li>
        </ul>
    )
}