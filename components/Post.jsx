import {
  BookmarkIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { addDoc, collection, serverTimestamp, updateDoc, doc, onSnapshot, query, orderBy, setDoc } from 'firebase/firestore'
import { db, storage } from '../firebase';
import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Moment from 'react-moment'


export default function Post({ id, username, userImg, img, caption }) {

  const { data:session }  = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
  [db,id])

  useEffect(() =>
    onSnapshot(collection(db, 'posts', id, 'likes'),
    (snapshot) => setLikes(snapshot.docs))
  ,[db, id])

  const likePost = async() => {
    await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
      username: session.user.username,
    })
  }

  const sendComment = async(e) => {
    e.preventDefault()
    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    })
  }

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
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            <HeartIcon onClick={likePost} className='btn'/>
            <ChatIcon className='btn'/>
            <PaperAirplaneIcon className='btn'/>
          </div>
          <BookmarkIcon className='btn'/>
        </div>
      )}

      {/* Caption */}
      <div>
        <p className='p-5 truncate'>
          <span className='font-bold mr-1'>{username}</span>
          {caption}
        </p>
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className='ml-10 h-21 overflow-y-scroll
        scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img className='h-7 rounded-full' src={comment.data().userImage} alt='User coment photo'/>
              <p className='text-sm flex-1'><span className='font-semibold mr-3'>{comment.data().username}</span>{comment.data().comment}</p>
              <Moment className='pr-5 text-xs' fromNow
              >{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input box */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='btn' />
          <input className='border-none flex-1
          focus:ring-0 outline-none' type='text'
          placeholder='Add a comment...'
          value={comment}
          onChange={e => setComment(e.target.value)}
          />
          <button className='font-semibold
          text-blue-400 cursor-pointer'
          type='submit'
          disabled={!comment.trim()}
          onClick={sendComment}
          >Post</button>
        </form>
      )}
    </div>
  )
}
