import Image from 'next/image'

export default function Header() {
  return (
    <div className=''>
      <div className='flex justify-between max-w-6xl'>
        <div className='relative hidden lg:inline-grid h-24 w-24'>
          <Image
            src="https://links.papareact.com/ocw"
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative lg:hidden h-10 w-10 flex-shrink-0'>
          <Image
            src="https://links.papareact.com/jjm"
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}
