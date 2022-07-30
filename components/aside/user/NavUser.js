import Image from "next/image";
import NavUserList from "./user_options/NavUserList";
import {useDispatch} from "react-redux";
import {navReducer} from "../../../redux/slices/navSlice";


export default function NavUser() {
    const dispatch = useDispatch();


    const handleListMenu = () => {
        dispatch(navReducer({isNavList: 'opacity-100 xl:animate-sideList'}))
    }


    return(
        <div className={'md:absolute bottom-0 flex items-center justify-center md:w-full'}>
            <div className={'font-montserratThin text-white  w-full md:px-2 md:py-4 rounded flex items-center  '}>
                <button onClick={handleListMenu} className={'flex gap-2 items-center w-full '}>
                    <div className={'hidden tablet:block'}>
                        <Image src={'/ico/person.svg'} width={15} height={15} />
                    </div>
                    <span className={'text-[12px] tablet:text-base hover:text-gray-400 transition ease-in-out delay-200 '}>Ivan Ivanov</span>
                </button>
                <NavUserList />
            </div>
        </div>
    )
}