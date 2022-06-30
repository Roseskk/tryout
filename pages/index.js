import Head from 'next/head'
import {useRouter} from "next/router";
// import background from '/public/illustration.mp4';

export default function Home() {
    const router = useRouter();

  return (
    <div className='mx-auto w-screen h-screen relative'>
      <Head>
        <title>Try Out</title>
      </Head>
      <div className={''}>
        <video
            autoPlay
            muted
            loop
            className={'w-screen h-screen object-cover absolute -z-10'}
        >
            <source src={'/illustration.mp4'} type={'video/mp4'}/>
        </video>
          <h1 className={'flex items-center justify-center font-montserratBold absolute w-full h-screen text-white text-lg text-screen -translate-y-36'}>TRY OUT!</h1>
        <div className={'absolute flex items-center justify-center w-full h-full text-white'}>
            <div className={'w-64 h-40  rounded flex flex-col items-center justify-center relative '}>
                <span className={'font-montserratBold text-white mb-3 text-xxl absolute top-2'}>SIGN IN</span>
                <div className={'absolute bottom-0 w-full'}>
                    <button onClick={()=> router.push('/explore')} className={' w-full flex items-center justify-center gap-3 bg-white  p-1'}><pre className={'font-montserratThin text-red-500'}>Google</pre></button>
                    <button className={'w-full flex items-center justify-center gap-3 bg-white  p-1'}><pre className={'flex items-center font-montserratThin text-blue-500'}>Behance</pre></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
