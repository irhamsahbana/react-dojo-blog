import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum ...', author: 'mario', id: 1 },
    { title: 'Welcom party!', body: 'lorem ipsum ...', author: 'luigi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum ...', author: 'princess', id: 3 }
  ])

  const [name, setName] = useState('mario')

  useEffect(() => {
    console.log('use effect ran!')
    console.log(name)
  }, [name])

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/>
      <button onClick={() => name === 'mario' ? setName('luigi'): setName('mario')}>Change Name</button>
    </div>
  )
}

export default Home
