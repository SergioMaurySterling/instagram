import Post from "./Post"

const posts = [
  {
    id: '123',
    username: 'sergiomaurysterling',
    userImg: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    img: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    caption: 'This is DOPE',
  },
  {
    id: '123',
    username: 'sergiomaurysterling',
    userImg: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    img: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    caption: 'This is DOPE',
  },
  {
    id: '123',
    username: 'sergiomaurysterling',
    userImg: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    img: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    caption: 'This is DOPE',
  },
  {
    id: '123',
    username: 'sergiomaurysterling',
    userImg: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    img: 'https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/images%2F4Pe0SOSeY1RRfkcJceD8OYWK4vc2?alt=media&token=d0347cb6-7474-4544-a8ce-9809e58a8363',
    caption: 'This is DOPE',
  },
]

export default function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
      ))}
    </div>
  )
}
