import { db, storage } from '../firebase';
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Post from "./Post"

export default function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot =>{
      setPosts(snapshot.docs)
    }),[db])

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id}
        id={post.id}
        username={post.data().username}
        userImg={post.data().profileImg}
        img={post.data().image}
        caption={post.data().caption}
        />
      ))}
    </div>
  )
}
