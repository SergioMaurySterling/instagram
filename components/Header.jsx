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
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Header() {

  const { data:session }  = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter()

  return (
    <div className='shadow-sm border-b bg-white pb-2
    sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5
      lg:mx-auto pt-2'>

        {/* Left */}
        <div onClick={()=>router.push('/')} className='relative hidden lg:inline-grid
        w-24 cursor-pointer'>
          <Image
            src="https://links.papareact.com/ocw"
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div onClick={()=>router.push('/')} className='relative lg:hidden w-10
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
          {/* <MenuIcon className='cursor-pointer w-6 h-6
            md:hidden'/> */}
            {session && (
              <PlusCircleIcon onClick={()=>setOpen(true)}
              className='h-6 md:inline-flex
              cursor-pointer hover:scale-125
              transition-all duration-150 ease-out'
            />
            )}
          <HomeIcon onClick={()=>router.push('/')} className='navBtn'/>
          {session?(
            <>
              <div className='relative navBtn'>
              <PaperAirplaneIcon className='navBtn rotate-45'/>
              <div className='absolute -top-2 -right-2
              text-xs w-5 h-5 bg-red-500 rounded-full flex
              items-center justify-center text-white font-bold
              animate-bounce'>3</div>
              </div>
              <PlusCircleIcon onClick={()=>setOpen(true)}
              className='navBtn'/>
              <UserGroupIcon className='navBtn'/>
              <HeartIcon className='navBtn'/>
              <img onClick={signOut}
              className='h-10 w-10 rounded-full cursor-pointer'
              src={session?.user?.image} alt='Profile picture' />
            </>
          ): (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}
