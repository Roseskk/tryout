import Image from "next/image";

import SideLayout from "../../layots/SideLayout";

export default function Explore() {
   return(
       <SideLayout>
           <div className={'flex flex-wrap mt-5 ml-5 '}>
               <ul className={'flex gap-10 flex-wrap '}>
                   <li className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                       <div className={'h-32 object-cover overflow-hidden '}>
                            <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                       </div>
                       <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                           <span className={'break-words'}>Everyone can be an illustrator! Just believe in yourself</span>
                       </div>
                   </li>
                   <li className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                       <div className={'h-32 object-cover overflow-hidden '}>
                           <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                       </div>
                       <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                           <span className={'break-words'}>Everyone can be an illustrator! Just believe in yourself</span>
                       </div>
                   </li>
                   <li className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                       <div className={'h-32 object-cover overflow-hidden '}>
                           <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                       </div>
                       <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                           <span className={'break-words'}>Everyone can be an illustrator! Just believe in yourself</span>
                       </div>
                   </li>
                   <li className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                       <div className={'h-32 object-cover overflow-hidden '}>
                           <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                       </div>
                       <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                           <span className={'break-words'}>Everyone can be an illustrator! Just believe in yourself</span>
                       </div>
                   </li>
                   <li className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                       <div className={'h-32 object-cover overflow-hidden '}>
                           <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                       </div>
                       <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                           <span className={'break-words'}>Everyone can be an illustrator! Just believe in yourself</span>
                       </div>
                   </li>
                   <li className={'w-56 h-56  bg-white  rounded overflow-hidden cursor-pointer'}>
                       <div className={'h-32 object-cover overflow-hidden '}>
                           <Image src={'/img/bg.png'} width={'100%'} height={'100%'} layout={"responsive"} className={'rounded'}/>
                       </div>
                       <div className={'font-montserratRegular p-1 mt-2 text-sm break-words'}>
                           <span className={'break-words'}>Everyone can be an illustrator! Just believe in yourself</span>
                       </div>
                   </li>


               </ul>
           </div>
       </SideLayout>
   )
}