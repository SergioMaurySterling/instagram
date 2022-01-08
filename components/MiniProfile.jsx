

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='h-16 w-16 rounded-full cursor-pointer
      p-[2px] border'
      src='https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363' alt='Profile picture' />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold
        '>sergiomaurysterling</h2>
        <h3 className='text-sm
        text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button className='text-blue-400
      text-sm font-semibold'>Sign Out</button>
    </div>
  )
}
