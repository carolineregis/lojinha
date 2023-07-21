import Image from 'next/image';
import Produto from './components/produto';
import Sidebar from './components/MainContainer';
import Header from './components/header';
import MainContainer from './components/MainContainer';

export default function Home() {
  return (

    
    
  <>

    <Header></Header>
    <div className="top-0 blur-lg fixed left-0 page-background bg-center bg-[url('https://c4.wallpaperflare.com/wallpaper/196/771/745/retrowave-retrowave-purple-abstract-wallpaper-preview.jpg')] bg-no-repeat bg-cover bg-blend-multiply flex min-h-screen flex-col items-center justify-between p-12 bg-gray-900"></div>
    
    <div className='flex-row z-50'>
      <MainContainer></MainContainer>
      <div className='main flex flex-row'>
        <main className="basis-1/2 row-span-2 col-span-2">
        </main>
      </div>
    </div>


    </>
  )
}
