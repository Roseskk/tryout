import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";

import SideLayout from "../../layots/SideLayout";
import {cardReducer} from "../../redux/slices/testSlice";
import {useState} from "react";
import {useRouter} from "next/router";


export default function Explore(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [zIndex,setIndex] = useState('-z-10')

    const text = useSelector((state)=> state.card.cardText);
    const image = useSelector((state)=> state.card.cardUi);
    const title = useSelector((state)=> state.card.cardName);
    const transform = useSelector((state)=> state.card.transform);

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

    const handleCard = ({name,img,text}) => {
        setTimeout(()=>{
            dispatch(cardReducer({name,img,text,transform: 'opacity-100 animate-resize'}));
        },250)
        setIndex('z-10')
    }

    const handleCardButton = () => {

        dispatch(cardReducer({name: title,img: image,text: text,transform: 'opacity-0'}));
        setTimeout(()=>{
            setIndex('-z-10')
        },1000)
    }

   return(
       <SideLayout>
           <div className={'w-5/6 flex flex-wrap h-screen  p-10  ml-5 overflow-y-scroll  '}>
               <ul className={'flex gap-10 flex-wrap mb-5 '}>
                   {
                       items.map((card)=>{
                           return(
                               <li key={card.id} onClick={()=>handleCard({name: card.name, img: card.img, text: card.text})} className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                                   <div className={'h-32 object-cover overflow-hidden '}>
                                       <Image src={card.img} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                                   </div>
                                   <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                                       <span className={'break-words'}>{card.text}</span>
                                   </div>
                               </li>
                           )
                       })
                   }
               </ul>
               <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-card h-card bg-white rounded ${transform} ${zIndex} transition ease-in-out delay-500 overflow-hidden`}>
                   <div className={'relative h-2/3 w-full object-cover overflow-hidden '}>
                       <button onClick={handleCardButton} className={'absolute right-3 top-3 text-2xl text-white border rounded-full z-20 pl-3 pr-3 pb-1'}>&times;</button>
                       {
                           image === ''
                               ? <div></div>
                               : <Image src={image} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'} objectFit={'cover'}/>

                       }
                   </div>
                   <div className={'w-full'}>
                       <h1 className={'font-montserratBold text-center text-3xl'}>{title}</h1>
                       <p className={'font-montserratRegular flex items-center justify-center'}>{text}</p>
                   </div>
               </div>
           </div>
       </SideLayout>
   )
}