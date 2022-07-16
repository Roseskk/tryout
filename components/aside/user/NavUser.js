import Image from "next/image";
import NavUserList from "./user_options/NavUserList";
import {useDispatch} from "react-redux";
import {navReducer} from "../../../redux/slices/navSlice";


export default function NavUser() {
    const dispatch = useDispatch();


    const handleListMenu = () => {
        dispatch(navReducer({isNavList: 'opacity-100 animate-sideList'}))
    }


    return(
        <div className={'absolute bottom-0  flex items-center justify-center w-full'}>
            <div className={'font-montserratThin text-white  w-full px-2 py-4 rounded flex items-center  '}>
                <button onClick={handleListMenu} className={'flex gap-2 items-center w-full'}>
                    <Image src={'/ico/person.svg'} width={15} height={15} />
                    <span className={''}>Ivan Ivanov</span>
                </button>
                <NavUserList />
            </div>
        </div>
    )
}