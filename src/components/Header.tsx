import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/isotipo@4x.png'

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center gap-2">
       <Image src={Logo} alt={'logo'} height={25} width={25}/>
        <span className="self-center text-2xl font-bold whitespace-nowrap text-[#ed1c24]">foodyapp</span>
    </Link>
   
    
  </div>
</nav>
  )
}

export default Header