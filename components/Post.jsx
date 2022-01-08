import {
  BookmarkIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className="flex items-center p-5">
        <img className='h-12 w-12
        rounded-full cursor-pointer border p-1 mr-3' src={userImg} alt=''/>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 w-5' />
      </div>
      {/* Img */}
      <img className='object-cover w-full h-auto' src={img} alt='picture' />

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn'/>
          <ChatIcon className='btn'/>
          <PaperAirplaneIcon className='btn'/>
        </div>
        <BookmarkIcon className='btn'/>
      </div>

      {/* Caption */}
      <div>
        <p className='p-5 truncate'>
          <span className='font-bold mr-1'>{username}</span>
          {caption}
        </p>
      </div>

      {/* Comments */}

      {/* Input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='btn' />
        <input className='border-none flex-1
        focus:ring-0 outline-none' type='text'
        placeholder='Add a comment...' />
        <buttonc className='font-semibold
        text-blue-400 cursor-pointer '>Post</buttonc>
      </form>
    </div>
  )
}
