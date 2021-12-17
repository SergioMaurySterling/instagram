import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className='shadow-sm border-b bg-white pb-2
    sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5
      lg:mx-auto pt-2'>

        {/* Left */}
        <div className='relative hidden lg:inline-grid
        w-24 cursor-pointer'>
          <Image
            src="https://links.papareact.com/ocw"
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative lg:hidden w-10
        flex-shrink-0 cursor-pointer'>
          <Image
            src="https://links.papareact.com/jjm"
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Middle - seach input field */}
        <div className='max-w-xs'>
          <div className='relative mt-1 pd-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex
            items-center pointer-events-none '>
              <SearchIcon className="h-5 w-5 text-gray-500"/>
            </div>
            <input className='bg-gray-50 block w-full pl-10
            sm:text-sm border-gray-300 rounded-md focus:ring-black
            focus:border-black h-8'
            placeholder="Search"></input>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end space-x-4">
          <MenuIcon className='cursor-pointer w-6 h-6
            md:hidden'/>
          <HomeIcon className='navBtn'/>
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45'/>
            <div className='absolute -top-2 -right-2
            text-xs w-5 h-5 bg-red-500 rounded-full flex
            items-center justify-center text-white font-bold
            animate-bounce'>3</div>
          </div>
          <PlusCircleIcon className='navBtn'/>
          <UserGroupIcon className='navBtn'/>
          <HeartIcon className='navBtn'/>
          <img className='h-10 w-10 rounded-full cursor-pointer'
          src='https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363' alt='Profile picture' />
        </div>

      </div>
    </div>
  )
}
