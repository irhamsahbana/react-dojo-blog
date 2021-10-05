import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('luigi')

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    console.log(blog)
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea required onChange={e => setBody(e.target.value)} value={body}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        <button>Add Blog</button>
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  )
}

export default Create
