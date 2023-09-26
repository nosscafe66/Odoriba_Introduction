import Card from '@/components/Store/store'
import { useState } from 'react'


export default function Home() {
  const [likes, setLikes] = useState(0)

  const incrementLikes = () => {
    setLikes(likes + 1)
  }
  const shops = [
    {
      title: 'Shop 1',
      image: '/shop1.jpg',
      description: 'This is shop 1'
    },
    {
      title: 'Shop 2',
      image: '/shop2.jpg',
      description: 'This is shop 2'
    },
    {
      title: 'Shop 3',
      image: '/shop3.jpg',
      description: 'This is shop 3'
    }
  ]

  return (
    <div>
      <h1>My Shop Page</h1>
      <Card />
      <button onClick={incrementLikes}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  )
}