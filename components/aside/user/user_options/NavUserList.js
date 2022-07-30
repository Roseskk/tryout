import {useSelector,useDispatch} from "react-redux";
import {navReducer} from "../../../../redux/slices/navSlice";

export default function NavUserList() {
    const dispatch = useDispatch();
    const navList = useSelector((state)=> state.nav.navlist);
    const isNavListButton = useSelector((state)=> state.nav.navListExitButton);

    return(
        <ul className={`md:relative text-[10px] w-full h-[500px] md:h-fit  bg-purple-500 md:bg-transparent z-90  fixed  flex  items-center  right-0 -bottom-5 md:right-1 md:bottom-8  opacity-100 cursor-pointer   flex-col  ${navList} transition ease-in-out delay-300 rounded p-[2px] `}>
            <li className={`md:block   w-full md:w-fit overflow-hidden opacity-20 hover:opacity-100 bg-white pl-2 pr-2 rounded transition ease-in-out delay-300`}>
                <span className={'text-black font-montserratBold md:text-[10px] text-[70px] flex items-center justify-center'}>Log Out!</span>
            </li>
            <li className={`md:absolute md:mt-0 mt-10 flex  items-center justify-center md:block md:text-2xl text-[90px] w-full text-black font-montserratBold text-2xl -left-[15px] -top-[5px] ${isNavListButton}  hover:scale-150 transition ease-in-out `}>
                <button className={'text-white'} onClick={()=> dispatch(navReducer({isNavList: 'opacity-100 xl:animate-sideList hidden',isNavListButton: 'opacity-100'}))}>
                    &times;
                </button>
            </li>
        </ul>
    )
}