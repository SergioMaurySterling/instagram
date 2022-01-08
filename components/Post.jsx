import {
  BookmarkIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center p-5">
        <img className='h-12 w-12
        rounded-full cursor-pointer border p-1 mr-3' src={userImg} alt=''/>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 w-5' />
      </div>
      {/* Img */}

      {/* Buttons */}

      {/* Caption */}

      {/* Comments */}

      {/* Input box */}
    </div>
  )
}
