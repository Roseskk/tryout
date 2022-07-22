import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";

import SideLayout from "../../layots/SideLayout";
import {cardReducer} from "../../redux/slices/testSlice";
import {useState} from "react";
import {useRouter} from "next/router";
import { motion } from 'framer-motion';
import {useGetCardsQuery} from "../../redux/tryout/tryout.api";


export default function Explore(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [zIndex,setIndex] = useState('-z-10')

    const id = useSelector((state)=> state.card.id);
    const text = useSelector((state)=> state.card.cardText);
    const image = useSelector((state)=> state.card.cardUi);
    const title = useSelector((state)=> state.card.cardName);
    const transform = useSelector((state)=> state.card.transform);

    const {isLoading,isError,data} = useGetCardsQuery()

    console.log(data)

    const items = [
       {id: 1, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 2, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 3, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 4, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 5, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 6, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 7, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 8, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 9, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'},
       {id: 10, name: 'Illustrator', img: '/img/bg.png', text: 'Everyone can be an illustrator! Just believe in yourself'}
    ];

    const handleCard = ({idx,name,img,text}) => {
        setTimeout(()=>{
            dispatch(cardReducer({idx,name,img,text,transform: 'opacity-100 md:animate-resize'}));
        },250)
        setIndex('z-10')
    }

    const handleCardButton = () => {
        dispatch(cardReducer({id: id,name: title,img: image,text: text,transform: 'opacity-0'}));
        setTimeout(()=>{
            setIndex('-z-10')
        },1000)
    }

    const handlePage = () => {
        dispatch(cardReducer({id: id,name: title,img: image,text: text,transform: 'opacity-0'}));
        setTimeout(()=>{
            setIndex('-z-10')
        },1000)
        router.push(`/explore/${id}`)
    }

   return(
       <SideLayout>
           {/*<motion.div>*/}
               <div className={'w-full md:w-5/6 flex flex-wrap h-screen  md:p-10  mt-14 md:mt-0 md:ml-5 overflow-y-scroll  '}>
                   <ul className={'flex flex-col md:flex-row gap-10 flex-wrap mb-20 w-full '}>
                       {
                           data?.map((card)=>{
                               return(
                                   <li key={card.id} onClick={()=>handleCard({idx: card.id, name: card.title, img: '/img/bg.png', text: card.text})} className={'h-[16rem] w-full md:w-56 md:h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                                       <div className={'h-32 object-cover overflow-hidden '}>
                                           <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} unoptimized quality={100} className={'rounded'}/>
                                       </div>
                                       <div className={'flex flex-col gap-5 font-montserratRegular p-1 mt-2 text-sm break-words'}>
                                           <span className={'text-center tracking-widest font-montserratBold text-[18px]'}>{card.title}</span>
                                           <span className={'break-words px-2'}>{card.text}</span>
                                       </div>
                                   </li>
                               )
                           })
                       }
                   </ul>
                   <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full w-[400px] h-[400px]   md:w-card md:h-card bg-gray-300 md:bg-white rounded ${transform} ${zIndex} transition ease-in-out delay-500 overflow-hidden`}>
                       <div className={'relative h-2/3  w-full object-cover overflow-hidden '}>
                           <button onClick={handleCardButton} className={'absolute right-3 top-3 text-2xl text-white border rounded-full z-20 pl-3 pr-3 pb-1'}>&times;</button>
                           {
                               image === ''
                                   ? <div></div>
                                   : <Image src={image} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'} objectFit={'cover'}/>

                           }
                       </div>
                       <div className={''}>
                           <div className={'w-full'}>
                               <h1 className={'font-montserratBold text-center text-2xl'}>{title}</h1>
                               <p className={'font-montserratRegular flex items-center justify-center'}>{text}</p>
                           </div>
                           <div className={'w-full  flex items-center justify-center mt-2 '}>
                               <button onClick={handlePage} className={'w-full md:w-[120px] translate-y-[14px] font-montserratRegular bg-purple-500 md:p-2 p-4 text-white text-base  rounded '}>Посмотреть</button>
                           </div>
                       </div>
                   </div>
               </div>
           {/*</motion.div>*/}
       </SideLayout>
   )
}